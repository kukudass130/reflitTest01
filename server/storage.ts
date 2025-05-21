import { users, type User, type InsertUser, preregistrations, type Preregistration, type InsertPreregistration } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // 사전 예약 정보 관련 메소드
  createPreregistration(data: InsertPreregistration): Promise<Preregistration>;
  getPreregistrationByPhone(phoneNumber: string): Promise<Preregistration | undefined>;
  getAllPreregistrations(): Promise<Preregistration[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // 사전 예약 정보를 저장하는 메소드
  async createPreregistration(data: InsertPreregistration): Promise<Preregistration> {
    try {
      const [result] = await db
        .insert(preregistrations)
        .values(data)
        .returning();
      return result;
    } catch (error) {
      // 중복 전화번호 등 오류 처리
      console.error("Failed to create preregistration:", error);
      throw error;
    }
  }
  
  // 전화번호로 사전 예약 정보 조회
  async getPreregistrationByPhone(phoneNumber: string): Promise<Preregistration | undefined> {
    const [result] = await db
      .select()
      .from(preregistrations)
      .where(eq(preregistrations.phoneNumber, phoneNumber));
    return result || undefined;
  }
  
  // 모든 사전 예약 정보 조회
  async getAllPreregistrations(): Promise<Preregistration[]> {
    return db.select().from(preregistrations).orderBy(preregistrations.createdAt);
  }
}

export const storage = new DatabaseStorage();

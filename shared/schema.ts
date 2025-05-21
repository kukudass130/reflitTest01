import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// 사전 예약 정보를 저장하는 테이블
export const preregistrations = pgTable("preregistrations", {
  id: serial("id").primaryKey(),
  phoneNumber: text("phone_number").notNull().unique(),
  agreedToTerms: boolean("agreed_to_terms").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPreregistrationSchema = createInsertSchema(preregistrations).pick({
  phoneNumber: true,
  agreedToTerms: true,
});

export type InsertPreregistration = z.infer<typeof insertPreregistrationSchema>;
export type Preregistration = typeof preregistrations.$inferSelect;

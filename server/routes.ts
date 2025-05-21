import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPreregistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // 사전 예약 API 엔드포인트
  app.post("/api/preregister", async (req: Request, res: Response) => {
    try {
      // 요청 데이터 검증
      const schema = insertPreregistrationSchema.extend({
        agreedToTerms: z.boolean().refine(val => val === true, {
          message: "이용약관에 동의해야 합니다."
        })
      });
      
      const validatedData = schema.parse(req.body);
      
      // 기존 등록 여부 확인
      const existingRegistration = await storage.getPreregistrationByPhone(validatedData.phoneNumber);
      if (existingRegistration) {
        return res.status(409).json({
          success: false,
          message: "이미 등록된 전화번호입니다."
        });
      }
      
      // 데이터베이스에 저장
      const result = await storage.createPreregistration(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "사전 예약이 완료되었습니다.",
        data: {
          id: result.id,
          phoneNumber: result.phoneNumber,
          createdAt: result.createdAt
        }
      });
    } catch (error) {
      console.error("사전 예약 에러:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "입력 데이터가 올바르지 않습니다.",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "서버 오류가 발생했습니다."
      });
    }
  });
  
  // 관리자용 사전 예약 목록 조회 API (실제 구현 시 인증 추가 필요)
  app.get("/api/preregister", async (_req: Request, res: Response) => {
    try {
      const registrations = await storage.getAllPreregistrations();
      
      return res.status(200).json({
        success: true,
        data: registrations
      });
    } catch (error) {
      console.error("사전 예약 목록 조회 에러:", error);
      return res.status(500).json({
        success: false,
        message: "서버 오류가 발생했습니다."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

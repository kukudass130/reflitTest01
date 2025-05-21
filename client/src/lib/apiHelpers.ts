/**
 * 사전 예약 API를 호출하기 위한 유틸리티 함수
 */

interface PreregisterResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    phoneNumber: string;
    createdAt: string;
  };
  errors?: any;
}

/**
 * 전화번호와 약관 동의 여부를 받아 사전 예약 요청을 보내는 함수
 */
export async function submitPreregistration(phoneNumber: string, agreedToTerms: boolean): Promise<PreregisterResponse> {
  try {
    const response = await fetch('/api/preregister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber,
        agreedToTerms
      })
    });
    
    const result = await response.json();
    
    return {
      success: response.ok,
      message: result.message || (response.ok ? "사전 예약이 완료되었습니다." : "사전 예약 중 오류가 발생했습니다."),
      data: result.data,
      errors: result.errors
    };
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "요청 중 오류가 발생했습니다."
    };
  }
}

/**
 * 사전 예약 목록 조회 함수 (관리자용)
 */
export async function getPreregistrations(): Promise<any[]> {
  try {
    const response = await fetch('/api/preregister');
    
    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
    
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("사전 예약 목록 조회 중 오류:", error);
    return [];
  }
}
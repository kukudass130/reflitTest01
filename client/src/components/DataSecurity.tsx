import { useState } from "react";
import { ChevronRight, Share2, ShieldCheck, AlertCircle, X } from "lucide-react";

export default function DataSecurity() {
  const [showDataSafetyModal, setShowDataSafetyModal] = useState(false);
  
  return (
    <>
      <div className="px-4 mt-2 py-4 bg-white border-t border-gray-200">
        <button 
          className="flex justify-between items-center w-full"
          onClick={() => setShowDataSafetyModal(true)}
        >
          <div className="flex items-center">
            <h2 className="text-lg font-medium">데이터 보안</h2>
            <ChevronRight className="ml-1 text-gray-500" size={18} />
          </div>
        </button>
        
        <div className="mt-4 border rounded-lg p-4 text-sm">
          <p className="mb-1">보안은 개발자가 데이터를 수집 및 공유하는 방식을 파악하는 것에서 시작됩니다.</p>
          <div className="flex items-center mt-3">
            <Share2 className="text-gray-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-sm">제3자와 공유되는 데이터 없음</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 데이터 보안 모달 */}
      {showDataSafetyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto shadow-xl">
            <div className="flex items-center p-4 border-b">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden mr-3">
                  <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8"
                    >
                      <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 22C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">RestOPet</h2>
                  <p className="text-sm text-gray-600">데이터 보안</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDataSafetyModal(false)}
                className="ml-auto"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-sm mb-6">
                보안은 개발자가 데이터를 수집 및 공유하는 방식을 파악하는 것에서 시작됩니다. 데이터 개인 정보 보호 및 보안 관행은 사용자의 앱 사용, 지역, 연령에 따라 다를 수 있습니다. 다음은 개발자가 제공한 정보이며 추후 업데이트될 수 있습니다.
              </p>

              <div className="border rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <Share2 className="text-gray-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-sm">제3자와 공유되는 데이터 없음</p>
                    <p className="text-xs text-gray-500">개발자가 어떻게 공유를 선언하는지 자세히 알아보세요.</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <ShieldCheck className="text-gray-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-sm">앱에서 수집할 수 있는 데이터 유형</p>
                    <p className="text-xs text-gray-500">위치, 개인 정보 외 7개 항목</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <AlertCircle className="text-gray-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-sm">전송 중 데이터 암호화됨</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <AlertCircle className="text-gray-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-sm">데이터 삭제를 요청할 수 있음</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <AlertCircle className="text-gray-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-sm">Play 가족 정책을 준수하겠다고 약속한 앱입니다.</p>
                  </div>
                </div>
              </div>

              <button className="w-full text-sm text-[#00c853] font-medium py-2">
                데이터 보안에 관해 자세히 알아보기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
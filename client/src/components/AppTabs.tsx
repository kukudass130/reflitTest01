import { useState } from "react";
import { APP_INFO } from "@/lib/constants";
import { X, Share2, ShieldCheck, AlertCircle, ChevronRight } from "lucide-react";

type Tab = "about";

export default function AppTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [showGameInfoModal, setShowGameInfoModal] = useState(false);
  const [showDataSafetyModal, setShowDataSafetyModal] = useState(false);
  
  return (
    <>
      <div className="overflow-x-auto px-4 bg-white">
        <div className="flex whitespace-nowrap mt-2">
          <button 
            className={`py-3 px-5 text-sm font-medium flex items-center ${
              activeTab === "about" 
                ? "text-[#00c853] border-b-2 border-[#00c853]" 
                : "text-[hsl(var(--text-secondary))]"
            }`}
            onClick={() => {
              setActiveTab("about");
              setShowGameInfoModal(true);
            }}
          >
            게임 소개
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        <div className="border-b border-gray-200"></div>
      </div>

      {/* 게임 소개 모달 */}
      {showGameInfoModal && (
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
                  <p className="text-sm text-gray-600">게임 소개</p>
                </div>
              </div>
              <button 
                onClick={() => setShowGameInfoModal(false)}
                className="ml-auto"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-sm mb-6">
                전 세계 트레이너들과 함께 애니몬 세계를 탐험하고 새로운 애니몬을 발견하세요. 세상의 게임 업계에서 혁명을 가져온 "RestOPet"은 새롭고 혁신적인 증강현실 게임입니다.
              </p>
              <p className="text-sm mb-6">
                _______________________
              </p>
              <p className="text-sm mb-2">
                애니몬 세계를 모험: 언제 어디서든 애니몬을 찾아보세요!
              </p>
              <p className="text-sm mb-6">
                _______________________
              </p>
              <p className="text-sm mb-2">
                "RestOPet" 대응 환경:
              </p>
              <p className="text-sm mb-2">
                - 이 앱은 무료로 즐길 수 있으며 앱 내 과금이 가능합니다.
              </p>
              <p className="text-sm mb-2">
                - 대응 OS 및 단말기: Android OS 6.0 이상
              </p>
              <p className="text-sm mb-2">
                - GPS 미탑재 단말기나 Wi-Fi 회선만 접속한 단말기의 동작은 보증하지 않습니다.
              </p>
              <p className="text-sm mb-2">
                - 대응 단말 정보는 수시로 변경될 수 있습니다.
              </p>
              <p className="text-sm mb-2">
                - 일부 단말기에서는 대응 OS버전 이상이어도 동작하지 않는 경우가 있습니다.
              </p>
              <p className="text-sm mb-2">
                - 자세한 대응 정보는 "RestOPet" 공식 사이트에서 확인하세요.
              </p>
              <p className="text-sm mb-6">
                - 2025년 5월 9일 현재 대응 환경입니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <p className="text-sm text-gray-500">버전</p>
                  <p className="text-sm">2.4.1</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">업데이트 날짜</p>
                  <p className="text-sm">{APP_INFO.updated}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">필요한 Android 버전</p>
                  <p className="text-sm">9 이상</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">다운로드</p>
                  <p className="text-sm">{APP_INFO.downloads}회</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">인앱 구매</p>
                  <p className="text-sm">₩1,200 - ₩59,900 (항목당)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">콘텐츠 등급</p>
                  <p className="text-sm">전체이용가</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">권한</p>
                  <p className="text-sm text-[#00c853]">세부정보 보기</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">상호작용 요소</p>
                  <p className="text-sm">인앱 구매</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">출시일</p>
                  <p className="text-sm">2023. 8. 15.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">개발자</p>
                  <p className="text-sm">{APP_INFO.developer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

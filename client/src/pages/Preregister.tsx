import { useState, useRef, useEffect } from "react";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import { submitPreregistration } from "@/lib/apiHelpers";

const PreregisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshotContainerRef = useRef<HTMLDivElement>(null);
  
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (!phoneNumber || phoneNumber.length !== 11) {
      setSubmitError("전화번호는 11자리 숫자여야 합니다.");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // API 호출
      const result = await submitPreregistration(phoneNumber, true);
      
      if (!result.success) {
        throw new Error(result.message || "사전 예약 중 오류가 발생했습니다.");
      }
      
      // 성공적으로 등록됨
      setIsRegistered(true);
      setPhoneNumber("");
      setShowModal(false);
    } catch (error) {
      console.error("사전 예약 요청 실패:", error);
      setSubmitError(error instanceof Error ? error.message : "사전 예약 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openRegisterModal = () => {
    setShowModal(true);
  };
  
  const scrollToItem = (index: number) => {
    const container = screenshotContainerRef.current;
    if (!container) return;
    
    const items = container.querySelectorAll('.screenshot-item');
    if (items.length === 0) return;
    
    const itemWidth = items[0].clientWidth;
    const padding = 12; // space-x-3 = 12px
    const scrollPos = index * (itemWidth + padding);
    
    container.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
    
    setActiveIndex(index);
  };
  
  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, 5);
    scrollToItem(nextIndex);
  };
  
  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToItem(prevIndex);
  };
  
  useEffect(() => {
    const container = screenshotContainerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const scrollPos = container.scrollLeft;
      const items = container.querySelectorAll('.screenshot-item');
      if (items.length === 0) return;
      
      const itemWidth = items[0].clientWidth;
      const padding = 12; // space-x-3 = 12px
      const newIndex = Math.round(scrollPos / (itemWidth + padding));
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < 6) {
        setActiveIndex(newIndex);
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <AppHeader />
      
      <div className="container max-w-3xl mx-auto px-4 pb-16">
        {/* 앱 소개 섹션 */}
        <div className="flex flex-col md:flex-row items-center py-6 bg-white my-4 rounded-xl">
          <div className="md:w-3/4 mb-4 md:mb-0 pr-4">
            <h1 className="text-3xl font-bold mb-2">RestOPet: 사전 예약</h1>
            <div className="text-[#00c853] text-sm font-medium mb-1">픽셀펫 스튜디오</div>
            <div className="text-xs text-gray-500 mb-4">포함 광고 • 인앱 구매</div>
            <div className="flex items-center">
              <span className="bg-[#00c853] text-white text-xs font-bold px-3 py-1 rounded-full mr-2">출시 예정</span>
              <span className="text-xs text-gray-500">2025년 6월 15일 출시 예정</span>
            </div>
          </div>
          <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md">
            <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-16 h-16"
              >
                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 22C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* 사전 예약 버튼 */}
        <div className="bg-white p-4 my-4 rounded-xl shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">사전 예약하고 특별 보상 받기</h2>
            <p className="text-sm text-gray-600 mb-4">
              지금 사전 예약하시면 출시 즉시 알림을 받고 특별 아이템과 프리미엄 통화 보너스를 받을 수 있습니다!
            </p>
            {isRegistered ? (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-700 font-medium">
                  사전 예약이 완료되었습니다! 게임 출시 시 카카오톡으로 알림을 보내드립니다.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <button
                  onClick={openRegisterModal}
                  className="w-full max-w-md py-3 bg-[#00c853] text-white font-bold text-sm rounded-lg"
                >
                  사전 예약하기
                </button>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm font-medium">사전 예약자 수</div>
              <div className="text-lg font-bold">12,458명</div>
            </div>
            <div>
              <div className="text-sm font-medium">출시 예정일</div>
              <div className="text-lg font-bold">2025년 6월 15일</div>
            </div>
          </div>
        </div>
        
        {/* 사전 예약 팝업 모달 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">RestOPet 사전 예약하기</h3>
                <p className="text-sm text-gray-600 mb-4">
                  전화번호를 입력하시면 게임 출시 시 카카오톡으로 알림을 보내드립니다.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="01012345678"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00c853]"
                      required
                      pattern="[0-9]{11}"
                      maxLength={11}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      형식: 01012345678 (숫자 11자리)
                    </p>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="consent" className="text-xs text-gray-700">
                      개인정보 수집 및 이용과 마케팅 정보 수신에 동의합니다.
                    </label>
                  </div>
                  
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg"
                      disabled={isSubmitting}
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#00c853] text-white font-bold text-sm rounded-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "처리 중..." : "예약하기"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        
        {/* 게임 미리보기 */}
        <div className="bg-white p-4 my-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4">게임 미리보기</h2>
          <div className="relative">
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div 
              ref={screenshotContainerRef}
              className="overflow-x-auto screenshot-scroll cursor-grab px-8 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-3 pb-4 pt-1 w-max">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div 
                    key={index} 
                    className="screenshot-item flex-shrink-0 w-40 h-auto rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                  >
                    <div className={`w-full aspect-[9/16] flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br ${
                      index % 6 === 1 ? "from-teal-100 to-teal-200" : 
                      index % 6 === 2 ? "from-blue-100 to-blue-200" : 
                      index % 6 === 3 ? "from-green-100 to-green-200" : 
                      index % 6 === 4 ? "from-purple-100 to-purple-200" : 
                      index % 6 === 5 ? "from-amber-100 to-amber-200" : 
                      "from-pink-100 to-pink-200"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                        <span className="material-icons text-xl text-[#00c853]">
                          {index % 6 === 1 ? "pets" : 
                           index % 6 === 2 ? "explore" : 
                           index % 6 === 3 ? "location_on" : 
                           index % 6 === 4 ? "collections" : 
                           index % 6 === 5 ? "auto_awesome" : 
                           "card_giftcard"}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-gray-800">
                        {index % 6 === 1 ? "귀여운 애니몬들" : 
                         index % 6 === 2 ? "지역 탐험" : 
                         index % 6 === 3 ? "지도 보기" : 
                         index % 6 === 4 ? "컬렉션" : 
                         index % 6 === 5 ? "애니몬 진화" : 
                         "특별 보상"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Screenshot indicator dots */}
          <div className="flex justify-center mt-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === activeIndex 
                    ? "bg-[#00c853]" 
                    : "bg-gray-300"
                }`}
                onClick={() => scrollToItem(index)}
              ></div>
            ))}
          </div>
        </div>
        
        {/* 게임 정보 */}
        <div className="bg-white p-4 my-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4">게임 정보</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-md font-semibold mb-2">게임 소개</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                동네를 걸으며 귀여운 가상 펫 애니몬을 발견해보세요! RestOPet은 지역 상권을 탐험하면서 가상의 동반자를 돌보는 위치 기반 증강현실 게임입니다.
                지역 상점, 레스토랑, 명소를 방문하여 애니몬에게 에너지를 공급하세요. 지속적으로 돌봄으로써 애니몬이 성장하고 진화하는 모습을 지켜보세요!
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2">주요 특징</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">check_circle</span>
                  <span>지역사회 탐험: 애니몬을 찾고 먹이를 주는 동안 지역 상권을 발견하세요.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">check_circle</span>
                  <span>독특한 애니몬 수집: 고유한 능력을 가진 수십 종의 귀여운 가상 펫을 찾고 돌보세요.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">check_circle</span>
                  <span>먹이주기 & 진화: 애니몬에게 에너지를 주고 새로운 형태로 성장하는 모습을 지켜보세요.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">check_circle</span>
                  <span>지역 상권 지원: 참여 중인 지역 상점을 방문하면 특별한 보상을 받으세요.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2">사전 예약 특전</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">stars</span>
                  <span>전설 등급 애니몬 '스타라이트' 무료 증정</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">stars</span>
                  <span>게임 내 통화 5,000 포인트 보너스</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">stars</span>
                  <span>첫 주 특별 이벤트 참가 자격</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-[#00c853] mr-2">stars</span>
                  <span>한정판 프로필 프레임</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* FAQ 섹션 */}
        <div className="bg-white p-4 my-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-md font-semibold mb-2">출시일은 언제인가요?</h3>
              <p className="text-sm text-gray-700">
                2025년 6월 15일에 정식 출시될 예정입니다. 사전 예약하시면 출시 즉시 알림을 받으실 수 있습니다.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-md font-semibold mb-2">지원하는 기기는 무엇인가요?</h3>
              <p className="text-sm text-gray-700">
                Android 8.0 이상 및 iOS 12.0 이상 기기에서 플레이 가능합니다. GPS 기능이 필요하며, Wi-Fi 회선만 연결된 단말기에서는 정상 동작을 보증하지 않습니다.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-md font-semibold mb-2">사전 예약 보상은 어떻게 받나요?</h3>
              <p className="text-sm text-gray-700">
                게임 출시 후 사전 예약에 사용한 이메일로 보상 코드를 보내드립니다. 게임 내에서 해당 코드를 입력하시면 보상을 받으실 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">인앱 결제가 있나요?</h3>
              <p className="text-sm text-gray-700">
                게임은 무료로 즐길 수 있으며, 일부 아이템 및 기능에 대해 인앱 결제가 가능합니다. 그러나 인앱 결제 없이도 게임을 충분히 즐길 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA 다시 한 번 */}
        {!isRegistered && (
          <div className="bg-gradient-to-r from-[#00c853] to-[#00a843] p-6 my-4 rounded-xl text-white text-center">
            <h2 className="text-xl font-bold mb-2">지금 사전 예약하세요!</h2>
            <p className="text-sm mb-4">
              출시 전에 사전 예약하고 특별한 보상을 받으세요. 최신 소식과 업데이트 정보를 가장 먼저 알려드립니다.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-[#00c853] font-bold text-sm px-8 py-3 rounded-lg"
            >
              사전 예약하기
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default PreregisterPage;
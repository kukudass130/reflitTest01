import { APP_INFO, APP_DESCRIPTION, APP_FEATURES } from "@/lib/constants";
import { useState } from "react";

export default function AboutGame() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="px-4 py-6 mb-2 bg-white">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-xs text-[hsl(var(--text-secondary))]">이용등급</p>
          <div className="mt-1 inline-block">
            <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md">
              <p className="text-xs font-medium">{APP_INFO.contentRating}</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-[hsl(var(--text-secondary))]">크기</p>
          <p className="mt-1 text-xs">{APP_INFO.size}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[hsl(var(--text-secondary))]">업데이트 날짜</p>
          <p className="mt-1 text-xs">{APP_INFO.updated}</p>
        </div>
      </div>

      <div className="text-sm leading-6 text-[hsl(var(--text-primary))] mb-4">
        {expanded ? (
          <>
            <p className="whitespace-pre-line mb-4">{APP_DESCRIPTION.long}</p>
            <p className="whitespace-pre-line mb-4">_______________________</p>
            <p className="whitespace-pre-line mb-4">애니몬 세계를 모험: 언제 어디서든 애니몬을 찾아보세요!</p>
            <p className="whitespace-pre-line mb-4">애니몬을 더 많이 잡고 「애니몬 도감」을 완성하세요!</p>
            <p className="whitespace-pre-line mb-4">파트너 애니몬과 함께 여행하며 애니몬을 강화하고 보상을 받으세요!</p>
            <p className="whitespace-pre-line mb-4">불꽃 튀는 「체육관 배틀」을 하거나...</p>
            <p className="whitespace-pre-line mb-4">다른 트레이너들과 협력하여 강력한 애니몬이 등장하는 「레이드배틀」에 도전하세요!</p>
            <p className="whitespace-pre-line mb-4">지금이 바로 모험의 시간입니다! "RestOPet" 세계로 떠나요!</p>
            <p className="whitespace-pre-line mb-4">_______________________</p>
            <p className="whitespace-pre-line mb-2">"RestOPet" 대응 환경:</p>
            <p className="whitespace-pre-line mb-2">- 이 앱은 무료로 즐길 수 있으며 앱 내 과금이 가능합니다. 스마트폰에 최적화되어 있습니다.</p>
            <p className="whitespace-pre-line mb-2">- 대응 OS 및 단말기: Android OS 6.0 이상, iOS 12.0 이상</p>
            <p className="whitespace-pre-line mb-2">- GPS 기능이 필요하며, Wi-Fi 회선만 연결된 단말기에서는 정상 동작을 보증하지 않습니다.</p>
          </>
        ) : (
          <p>{APP_DESCRIPTION.short}</p>
        )}
      </div>

      <button
        className="text-sm text-[#00c853] font-medium"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "간략히 보기" : "더 보기"}
      </button>

      <div className="mt-8 mb-4">
        <h3 className="text-base font-medium mb-4">주요 기능</h3>
        <div className="grid grid-cols-1 gap-6">
          {APP_FEATURES.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="material-icons text-[#00c853]">
                  {feature.icon}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">{feature.title}</h4>
                <p className="text-sm text-[hsl(var(--text-secondary))]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2 text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">액션</span>
          <span className="mr-2 mb-2 text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">캐주얼</span>
          <span className="mr-2 mb-2 text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">어드벤처</span>
          <span className="mr-2 mb-2 text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">멀티플레이어</span>
          <span className="mr-2 mb-2 text-xs font-medium bg-gray-100 px-3 py-1 rounded-full">증강현실</span>
        </div>
      </div>
    </div>
  );
}
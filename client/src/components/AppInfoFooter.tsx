import { APP_INFO } from "@/lib/constants";

export default function AppInfoFooter() {
  const appInfoItems = [
    { label: "버전", value: APP_INFO.version },
    { label: "업데이트 날짜", value: APP_INFO.updated },
    { label: "다운로드 수", value: APP_INFO.downloads },
    { label: "필요한 OS", value: APP_INFO.requiredOS },
    { label: "콘텐츠 등급", value: APP_INFO.contentRating },
    { label: "인앱 구매", value: APP_INFO.inAppPurchases },
    { label: "제공자", value: APP_INFO.developer },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">앱 정보</h2>
      <div className="text-sm">
        {appInfoItems.map((item, index) => (
          <div key={index} className="flex py-2 border-b border-gray-200">
            <div className="w-1/3 text-[hsl(var(--text-secondary))]">{item.label}</div>
            <div className="w-2/3">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

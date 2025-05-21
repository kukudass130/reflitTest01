import { APP_INFO } from "@/lib/constants";
import { Star, StarHalf, Share2, Info } from "lucide-react";

export default function AppInfo() {
  return (
    <div className="relative pt-6 pb-4 bg-gradient-to-r from-teal-600 to-emerald-700">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="relative z-10 flex px-4">
        <div className="mr-4 flex-shrink-0">
          {/* App icon */}
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white">
            {/* App icon with more professional design */}
            <div className="w-full h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-12 h-12"
              >
                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 22C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 text-white">
          <h1 className="text-2xl font-bold">{APP_INFO.name}</h1>
          <p className="text-sm text-gray-200">{APP_INFO.developer}</p>
          <p className="text-xs text-gray-300 mt-1">인앱 구매</p>
          
          <div className="flex items-center mt-2 mb-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-sm ml-1 text-white">{APP_INFO.rating}</span>
            <span className="text-xs ml-1 text-gray-300">{APP_INFO.reviews}개</span>
          </div>
          
          <div className="flex text-xs text-gray-300">
            <span>{APP_INFO.downloads}회 다운로드</span>
            <span className="mx-1">•</span>
            <span>{APP_INFO.contentRating}</span>
            {APP_INFO.containsAds && (
              <>
                <span className="mx-1">•</span>
                <span>광고 포함</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="relative z-10 mt-4 px-4 flex space-x-6 text-xs text-white">
        <div className="flex flex-col items-center">
          <Star className="w-5 h-5 mb-1" />
          <span>평점 {APP_INFO.rating}</span>
        </div>
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
          <span>{APP_INFO.downloads}회</span>
        </div>
        <div className="flex flex-col items-center">
          <Info className="w-5 h-5 mb-1" />
          <span>에디터 추천</span>
        </div>
      </div>
    </div>
  );
}

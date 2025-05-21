import { APP_INFO, APP_REVIEWS, RATING_DISTRIBUTION } from "@/lib/constants";
import { Star, User, ThumbsUp, ChevronRight, Info } from "lucide-react";

export default function RatingsAndReviews() {
  return (
    <div className="mb-6 px-4 py-4 bg-white">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <h2 className="text-lg font-medium">평점 및 리뷰</h2>
          <ChevronRight className="ml-1 text-gray-400" size={18} />
        </div>
        <div className="flex items-center">
          <Info className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-4">
          <div className="flex justify-center items-center">
            <button className="px-3 py-1 mr-2 bg-gray-100 rounded-full text-xs font-medium">전화</button>
            <button className="px-3 py-1 mr-2 bg-gray-100 rounded-full text-xs font-medium">Chromebook</button>
            <button className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">태블릿</button>
          </div>
        </div>
        
        <div className="flex mb-4">
          <div className="flex-shrink-0 flex flex-col justify-center mr-4">
            <div className="text-5xl font-medium">{APP_INFO.rating}</div>
            <div className="flex mt-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00c853] text-[#00c853]" />
              ))}
              <Star className="w-4 h-4 fill-[#00c853] text-[#00c853] opacity-70" />
              <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
            </div>
            <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">리뷰 {APP_INFO.reviews}개</div>
          </div>
          <div className="flex-1">
            {/* Rating bars - green color now */}
            {RATING_DISTRIBUTION.map((rating) => (
              <div key={rating.stars} className="flex items-center mb-1">
                <span className="text-xs w-3">{rating.stars}</span>
                <div className="flex-1 mx-2">
                  <div className="h-2 bg-gray-200 rounded-sm">
                    <div className="h-2 bg-[#00c853] rounded-sm" style={{ width: `${rating.percentage}%` }}></div>
                  </div>
                </div>
                <span className="text-xs text-[hsl(var(--text-secondary))]">
                  {Math.round(rating.percentage * 107 / 100)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-4">
        {APP_REVIEWS.map((review, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full overflow-hidden mr-3 flex items-center justify-center">
                <span className="font-bold text-blue-500 text-lg">{review.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{review.name}</span>
                  <span className="text-xs text-[hsl(var(--text-secondary))]">{review.date}</span>
                </div>
                <div className="flex items-center mt-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#00c853] text-[#00c853]" />
                  ))}
                </div>
                <p className="text-sm">{review.comment}</p>
                <div className="flex items-center mt-2">
                  <button className="flex items-center text-xs text-[hsl(var(--text-secondary))] mr-4">
                    <ThumbsUp className="w-3 h-3 mr-1" />
                    도움이 됨
                  </button>
                </div>
              </div>
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="19" cy="12" r="1"/>
                  <circle cx="5" cy="12" r="1"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2 text-sm text-[#00c853] font-medium border border-[#00c853] rounded-md">
        모든 리뷰 보기
      </button>
    </div>
  );
}

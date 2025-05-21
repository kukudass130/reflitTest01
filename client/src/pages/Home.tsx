import AppHeader from "@/components/AppHeader";
import AppInfo from "@/components/AppInfo";
import AppScreenshots from "@/components/AppScreenshots";
import AppTabs from "@/components/AppTabs";
import AboutGame from "@/components/AboutGame";
import DataSecurity from "@/components/DataSecurity";
import RatingsAndReviews from "@/components/RatingsAndReviews";
import AppInfoFooter from "@/components/AppInfoFooter";
import SimilarApps from "@/components/SimilarApps";
import StoryContainer from "@/components/StoryContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <AppHeader />
      
      <div className="container max-w-3xl mx-auto px-4 pb-16">
        <AppInfo />
        
        <div className="my-4 px-4 bg-white">
          <div className="flex justify-between items-center mb-2">
            <a 
              href="/preregister"
              className="flex-grow py-2.5 bg-[#00c853] text-white font-bold text-sm rounded-full mr-3 text-center"
            >
              사전 예약하기
            </a>
            <div className="flex items-center">
              <button className="flex items-center justify-center w-10 h-10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-4 py-2">
            <button className="p-2 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
            <button className="p-2 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </button>
            <button className="p-2 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <AppScreenshots />
        <AppTabs />
        <AboutGame />
        <DataSecurity />
        <RatingsAndReviews />
        <AppInfoFooter />
        <SimilarApps />
        <StoryContainer />
        <Footer />
      </div>
    </div>
  );
}

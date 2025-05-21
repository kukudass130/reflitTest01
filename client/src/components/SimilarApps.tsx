import { SIMILAR_APPS } from "@/lib/constants";
import { Star } from "lucide-react";

const APP_ICONS = [
  {
    gradient: "from-teal-400 to-teal-500",
    icon: "pets"
  },
  {
    gradient: "from-blue-400 to-blue-500",
    icon: "sports_esports"
  },
  {
    gradient: "from-purple-400 to-purple-500",
    icon: "catching_pokemon"
  },
  {
    gradient: "from-amber-400 to-amber-500",
    icon: "science"
  },
  {
    gradient: "from-pink-400 to-pink-500",
    icon: "public"
  }
];

export default function SimilarApps() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">비슷한 게임</h2>
        <button className="text-sm text-[hsl(var(--play-green))] font-medium">더보기</button>
      </div>
      <div className="overflow-x-auto screenshot-scroll">
        <div className="flex space-x-4 pb-2 w-max">
          {SIMILAR_APPS.map((app, index) => (
            <div key={index} className="w-20">
              <div className={`w-20 h-20 rounded-xl overflow-hidden mb-1 shadow-sm bg-gradient-to-br ${APP_ICONS[index]?.gradient || "from-teal-400 to-teal-500"} flex items-center justify-center`}>
                {/* Better looking app icons with gradients */}
                <span className="material-icons text-white text-2xl">
                  {APP_ICONS[index]?.icon || "pets"}
                </span>
              </div>
              <div className="text-xs truncate font-medium">{app.name}</div>
              <div className="text-xs text-[hsl(var(--text-secondary))] flex items-center">
                {app.rating}
                <Star className="w-3 h-3 ml-0.5 fill-[hsl(var(--star-color))] text-[hsl(var(--star-color))]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

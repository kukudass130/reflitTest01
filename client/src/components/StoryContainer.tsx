export default function StoryContainer() {
  // Images that would showcase the game in real-world settings
  const storyImages = [
    {
      title: "RestOPet을 하며 걷는 사람",
      description: "도시에서 휴대폰을 들고 걷는 사람",
      icon: "directions_walk",
      gradient: "from-blue-200 to-blue-300"
    },
    {
      title: "RestOPet과 함께 지역 식당을 방문하는 사람",
      description: "지역 상점 앞에서 휴대폰을 사용하는 사람",
      icon: "storefront",
      gradient: "from-amber-200 to-amber-300"
    },
    {
      title: "RestOPet 사용자가 애니몬을 찾을 수 있는 지역 상점",
      description: "지역 상점 전경",
      icon: "store",
      gradient: "from-green-200 to-green-300"
    },
    {
      title: "RestOPet에서 귀여운 애니몬",
      description: "귀여운 가상 펫",
      icon: "pets",
      gradient: "from-purple-200 to-purple-300"
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">RestOPet과 함께하는 생활</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {storyImages.map((image, index) => (
          <div key={index} className={`rounded-lg overflow-hidden shadow-md h-44 bg-gradient-to-br ${image.gradient}`}>
            {/* Enhanced placeholders with better gradients and visual hierarchy */}
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <span className="material-icons text-3xl text-[hsl(var(--play-green))]">
                  {image.icon}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

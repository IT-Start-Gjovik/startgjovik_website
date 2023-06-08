export const SkeletonCard = () => {
    return (
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 space-x-3">
        <div className="w-full md:w-48 md:rounded-l-lg">
          <div className="h-0 pb-[100%] bg-gray-300 animate-pulse rounded-md"></div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="w-56 h-5 ml-1 my-2 bg-gray-400 rounded-sm mb-1 animate-blink"></div>
            <div className="w-56 h-3 ml-1 bg-gray-300 rounded-sm mb-1 animate-blink"></div>
            <div className="w-56 h-3 ml-1 bg-gray-300 rounded-sm mb-1 animate-blink"></div>
            <div className="w-56 h-3 ml-1 bg-gray-300 rounded-sm mb-1 animate-blink"></div>
            <div className="w-56 h-3 ml-1 bg-gray-300 rounded-sm mb-1 animate-blink"></div>
            <div className="w-56 h-3 ml-1 bg-gray-300 rounded-sm animate-blink"></div>
        </div>
        
      </div>
    );
  };
  
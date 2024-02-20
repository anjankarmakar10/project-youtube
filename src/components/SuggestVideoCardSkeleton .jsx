const SuggestVideoCardSkeleton = () => {
  return (
    <div className="flex gap-2">
      <div className="w-[168px] h-[94px] bg-gray-200 animate-pulse rounded-xl"></div>
      <div className="flex gap-2 flex-col flex-1">
        <div className="mb-1 flex flex-col gap-1">
          <div className="text-secondary-text text-xs bg-gray-200 h-3 animate-pulse w-full "></div>
          <div className="text-secondary-text text-xs bg-gray-200 h-3 animate-pulse w-2/4 "></div>
        </div>
        <div className="text-secondary-text text-xs bg-gray-200 h-2 animate-pulse w-24 mb-[2px]"></div>
        <div className="text-secondary-text text-xs bg-gray-200 h-2 animate-pulse w-32 mb-[2px]"></div>
      </div>
    </div>
  );
};
export default SuggestVideoCardSkeleton;

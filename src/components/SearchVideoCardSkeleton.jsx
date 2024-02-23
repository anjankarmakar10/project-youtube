const SearchVideoCardSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className=" w-full sm:w-[360px] h-[250px] sm:h-[202px] bg-gray-200 animate-pulse rounded-xl"></div>
      <div className="flex gap-2 flex-col flex-1">
        <div className="mb-1 flex flex-col gap-1">
          <div className="text-secondary-text text-xs bg-gray-200 h-5 animate-pulse w-full "></div>
          <div className="text-secondary-text text-xs bg-gray-200 h-5 animate-pulse w-2/4 "></div>
        </div>
        <div className="text-secondary-text text-xs bg-gray-200 h-3 animate-pulse w-24 mb-[2px]"></div>
        <div className="text-secondary-text my-3 text-xs bg-gray-200 h-3 animate-pulse w-40 mb-[2px]"></div>
        <div className="text-secondary-text text-xs bg-gray-200 h-3 animate-pulse w-full mb-[2px]"></div>
        <div className="text-secondary-text text-xs bg-gray-200 h-3 animate-pulse w-4/6 mb-[2px]"></div>
      </div>
    </div>
  );
};
export default SearchVideoCardSkeleton;

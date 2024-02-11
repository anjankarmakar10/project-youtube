const VideoCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-video bg-gray-200 animate-pulse rounded-xl"></div>
      <div className="flex gap-2">
        <div className="flex-shrink-0">
          <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold bg-gray-200 h-4 animate-pulse w-64 "></div>
          <div className="text-secondary-text text-sm bg-gray-200 h-3 animate-pulse w-52"></div>
          <div className="text-secondary-text text-sm bg-gray-200 h-3 animate-pulse w-32"></div>
        </div>
      </div>
    </div>
  );
};
export default VideoCardSkeleton;

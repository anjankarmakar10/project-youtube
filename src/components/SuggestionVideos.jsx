"use client";

import usePopularVideos from "@/hooks/usePopularVideos";
import SuggestVideoCard from "./SuggestVideoCard";
import SuggestVideoCardSkeleton from "./SuggestVideoCardSkeleton ";
const SuggestionVideos = () => {
  const { data, isLoading, isError } = usePopularVideos();

  if (isError) return <div>An error occurred!</div>;

  return (
    <>
      {isLoading && (
        <div className="flex flex-col gap-2">
          {Array(6)
            .fill("")
            .map((item, index) => (
              <SuggestVideoCardSkeleton key={index} />
            ))}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {data?.items?.map((video) => (
          <SuggestVideoCard key={video} video={video} />
        ))}
      </div>
    </>
  );
};
export default SuggestionVideos;

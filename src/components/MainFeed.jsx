"use client";
import VideoCard from "@/components/VideoCard";
import VideoCardSkeleton from "@/components/VideoCardSkeleton";
import VideoGird from "@/components/VideoGird";
import usePopularVideos from "@/hooks/usePopularVideos";
const MainFeed = () => {
  const { data, isLoading, isError } = usePopularVideos();

  if (isError) return <div>An error occurred!</div>;

  return (
    <>
      {isLoading && (
        <VideoGird>
          {Array(6)
            .fill("")
            .map((item, index) => (
              <VideoCardSkeleton key={index} />
            ))}
        </VideoGird>
      )}
      <VideoGird>
        {data?.items?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </VideoGird>
    </>
  );
};
export default MainFeed;

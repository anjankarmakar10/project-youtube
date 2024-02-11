"use client";
import VideoCard from "@/components/VideoCard";
import VideoCardSkeleton from "@/components/VideoCardSkeleton";
import VideoGird from "@/components/VideoGird";
import usePopularVideos from "@/hooks/usePopularVideos";

export default function Home() {
  const { data, isLoading } = usePopularVideos();

  return (
    <main>
      <header className="sticky top-0 bg-white z-10 pb-4">
        <div>Cetagory</div>
      </header>
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
    </main>
  );
}

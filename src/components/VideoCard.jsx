"use client";

import useChannelInfo from "@/hooks/useChannelIfno";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import Image from "next/image";
import { useState } from "react";
import { close } from "@/redux/slices/sidebarSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const VideoCard = ({ video }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // const videoRef = useRef(null);

  const discpatch = useDispatch();

  const { title, thumbnails, channelId, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  const { maxres } = thumbnails;

  const { data, isLoading } = useChannelInfo(channelId);

  const channel = data?.items[0]?.snippet;

  // useEffect(() => {
  //   if (videoRef.current == null) return;

  //   if (isVideoPlaying) {
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //
  // }, [isVideoPlaying]);

  const handleCloseMenu = () => {
    discpatch(close());
  };

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link
        onClick={handleCloseMenu}
        href={`/watch?v=${video.id}`}
        className="relative aspect-video"
      >
        <Image
          fill
          loading="lazy"
          src={maxres?.url}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
          alt={title}
        />

        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded"></div>
        {/* <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        /> */}
      </Link>
      <div className="flex gap-2">
        {isLoading ? (
          <div className="flex-shrink-0">
            <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
          </div>
        ) : (
          <Link href={`/channel/@${channelId}`} className="flex-shrink-0">
            <Image
              width={48}
              height={48}
              className="rounded-full"
              src={channel?.thumbnails.default.url}
              alt={channel?.title}
            />
          </Link>
        )}

        <div className="flex flex-col">
          <Link
            onClick={handleCloseMenu}
            href={`/watch?v=${video.id}`}
            className="font-bold"
          >
            {title}
          </Link>
          <Link
            href={`/channel/@${channelId}`}
            className="text-secondary-text text-sm"
          >
            {channel?.title}
          </Link>
          <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(viewCount)} Views •{" "}
            {formatTimeAgo(publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;

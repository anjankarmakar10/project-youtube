"use client";

import useVideo from "@/hooks/useVideo";
import ChannelInfo from "./ChannelInfo";

const VideoDetails = ({ videoId }) => {
  const { data, isLoading } = useVideo(videoId);

  if (isLoading) return <div>Loading</div>;

  const video = data?.items[0];
  const { title, description, channelId } = video?.snippet;

  return (
    <section className="my-3 flex flex-col gap-3">
      <h1 className="text-xl line-clamp-2 font-bold">{title}</h1>
      <ChannelInfo channelId={channelId} />
    </section>
  );
};
export default VideoDetails;

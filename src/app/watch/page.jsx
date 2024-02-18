"use client";

import VideoDetails from "@/components/VideoDetails";
import VideoSidebar from "@/components/VideoSidebar";
import { close, wtachPage } from "@/redux/slices/sidebarSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const WatchPage = ({ searchParams }) => {
  const discpatch = useDispatch();

  const videoId = searchParams.v;

  useEffect(() => {
    discpatch(close());
    discpatch(wtachPage());
  }, []);

  return (
    <div className="flex max-w-[1195px] gap-6 md:gap-0 mx-auto flex-col md:flex-row">
      <div className=" md:basis-[747px] md:px-6 md:pt-6">
        <iframe
          className="w-full aspect-video rounded-2xl"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        <VideoDetails videoId={videoId} />
      </div>
      <div className=" md:flex-1 md:pr-6 md:pt-6 ">
        <VideoSidebar />
      </div>
    </div>
  );
};
export default WatchPage;

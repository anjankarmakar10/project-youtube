"use client";

import { close, wtachPage } from "@/redux/slices/sidebarSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const WatchPage = ({ params }) => {
  const discpatch = useDispatch();

  useEffect(() => {
    discpatch(close());
    discpatch(wtachPage());
  }, []);

  return (
    <div className="flex max-w-[1195px] gap-6 md:gap-0 mx-auto flex-col md:flex-row">
      <div className=" md:basis-[747px] md:px-6 md:pt-6">
        <iframe
          className="w-full aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/k__sMa1nopM?si=7lI16Loo7Jy7zSFO"
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
          frameborder="0"
        ></iframe>
      </div>
      <div className=" md:flex-1 md:pr-6 md:pt-6 ">sdf</div>
    </div>
  );
};
export default WatchPage;

"use client";

import formatNumber from "@/utils/formatNumber";
import formatePublishDate from "@/utils/formatePublishDate";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
const VideoDescription = ({ description, publishedAt, viewCount }) => {
  const [showDesc, setShowDese] = useState(false);

  return (
    <section className="bg-[rgba(0,0,0,0.05)] rounded-xl p-3 text-sm relative">
      <div className="flex items-center gap-[6px]  text-[#0f0f0f] font-semibold">
        {formatNumber(viewCount)} views {formatePublishDate(publishedAt)}
      </div>
      <article
        className={twMerge(
          `overflow-hidden leading-6 relative`,
          !showDesc && "mask max-h-[75px]"
        )}
      >
        {description}
      </article>

      {showDesc ? (
        <button
          onClick={() => setShowDese(false)}
          className="font-semibold  mt-10 p-0 "
        >
          Show less
        </button>
      ) : (
        <button
          onClick={() => setShowDese(true)}
          className="absolute font-semibold left-[274px] bottom-[17px]"
        >
          ...more
        </button>
      )}
    </section>
  );
};
export default VideoDescription;

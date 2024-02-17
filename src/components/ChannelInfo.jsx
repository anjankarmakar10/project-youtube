"use client";

import useChannelInfo from "@/hooks/useChannelIfno";
import formatNumber from "@/utils/formatNumber";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
const ChannelInfo = ({ channelId }) => {
  const { data, isLoading } = useChannelInfo(channelId);

  if (isLoading) return <div>Loading</div>;

  const { snippet, statistics } = data?.items[0];

  return (
    <div className="flex items-center gap-6">
      <Link className="flex gap-3 items-start" href="/">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src={snippet?.thumbnails?.default?.url}
          alt={snippet?.title}
        />
        <div>
          <h6 className="text-base font-semibold leading-4 line-clamp-1">
            {snippet?.title}
          </h6>
          <span className="text-sm text-gray-700">
            {formatNumber(+statistics?.subscriberCount)} subscribers
          </span>
        </div>
      </Link>
      <div>
        <button className="font-medium h-9 px-4 text-sm rounded-full bg-[#0f0f0f] text-white hover:bg-[#0f0f0fef]">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default ChannelInfo;

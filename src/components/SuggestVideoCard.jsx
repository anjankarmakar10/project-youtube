import formatNumber from "@/utils/formatNumber";
import formatePublishDate from "@/utils/formatePublishDate";
import Image from "next/image";
import Link from "next/link";

const SuggestVideoCard = ({ video }) => {
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  const { viewCount } = video.statistics;
  const { medium } = thumbnails;

  return (
    <Link href={`/watch?v=${video.id}`} className="flex gap-2">
      <Image
        width={168}
        height={98}
        loading="lazy"
        src={medium?.url}
        className="object-cover rounded-lg"
        alt={title}
      />

      <div>
        <h6 className="line-clamp-2 text-sm font-semibold mb-1">{title}</h6>
        <div className="text-[#606060] text-xs flex flex-col gap-[2px]">
          <div className="flex gap-1 items-center ">
            <p>{channelTitle}</p>
            <svg height="14" viewBox="0 0 24 24" width="14" focusable="false">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
            </svg>
          </div>
          <div>
            {formatNumber(viewCount)} views • {formatePublishDate(publishedAt)}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SuggestVideoCard;

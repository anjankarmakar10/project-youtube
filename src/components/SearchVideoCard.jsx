import formatePublishDate from "@/utils/formatePublishDate";
import Image from "next/image";
import Link from "next/link";

const SearchVideoCard = ({ search }) => {
  const { publishedAt, channelTitle, title, description, thumbnails } =
    search?.snippet;

  return (
    <Link
      href={`/watch?v=${search?.id?.videoId}`}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Image
        width={360}
        height={202}
        loading="lazy"
        src={thumbnails?.medium.url}
        className="object-cover w-full sm:w-[360px] sm:h-[202px] transition-[border-radius] duration-200 rounded-xl sm:rounded-none hover:rounded-xl"
        alt={title}
      />

      <div className="text-sm">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>

        <div>{formatePublishDate(publishedAt)}</div>

        <div className="py-3 flex items-center gap-1 text-gray-600">
          <p>{channelTitle}</p>
          <svg height="14" viewBox="0 0 24 24" width="14" focusable="false">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
          </svg>
        </div>
        <p className="line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};
export default SearchVideoCard;

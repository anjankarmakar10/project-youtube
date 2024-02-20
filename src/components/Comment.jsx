import formatePublishDate from "@/utils/formatePublishDate";
import Image from "next/image";

const Comment = ({ comment }) => {
  const {
    textDisplay,
    authorProfileImageUrl,
    authorDisplayName,
    likeCount,
    publishedAt,
  } = comment?.snippet?.topLevelComment?.snippet;

  return (
    <article className="flex gap-4 items-start">
      <Image
        width={40}
        height={40}
        className="rounded-full"
        src={authorProfileImageUrl}
        alt={authorDisplayName}
      />
      <div className="flex flex-col gap-[2px] ">
        <div className="flex gap-1 items-center">
          <h6 className="text-[13px] font-semibold ">{authorDisplayName}</h6>
          <span className="text-sm text-[#606060]">
            {formatePublishDate(publishedAt)}
          </span>
        </div>
        <p className="text-sm">{textDisplay}</p>
        <div className="mt-1 flex items-center gap-1">
          <div>
            <svg
              className="ml-[-3px]"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
            </svg>
          </div>
          <div className="text-sm text-[#606060] mr-1">{likeCount}</div>
          <div>
            <svg height="24s" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
            </svg>
          </div>
          <button className="px-4 py-2 text-xs rounded-full font-semibold hover:bg-[rgba(0,0,0,0.05)] ">
            Reply
          </button>
        </div>
      </div>
    </article>
  );
};
export default Comment;

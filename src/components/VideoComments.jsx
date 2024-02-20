"use client";

import useComments from "@/hooks/useComments";
import Comment from "./Comment";

const VideoComments = ({ commentCount, videoId }) => {
  const { data, isLoading } = useComments(videoId);

  if (isLoading) return <div>Loading</div>;

  return (
    <section className="mt-3">
      <div className="font-bold text-xl mb-6">{commentCount} Comments</div>
      <div className="flex flex-col gap-4">
        {data.items?.map((item) => (
          <Comment comment={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
export default VideoComments;

"use client";

import useComments from "@/hooks/useComments";

const VideoComments = ({ commentCount, videoId }) => {
  const { data } = useComments(videoId);
  console.log(data);

  return (
    <section className="mt-3">
      <div className="font-bold text-xl mb-6">{commentCount} Comments</div>
    </section>
  );
};
export default VideoComments;

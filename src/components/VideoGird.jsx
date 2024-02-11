const VideoGird = ({ children }) => {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {children}
    </section>
  );
};
export default VideoGird;

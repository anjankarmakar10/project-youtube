"use client";
import { useState } from "react";
import LiveChat from "./LiveChat";
import SuggestionVideos from "./SuggestionVideos";

const VideoSidebar = () => {
  const [showChat, setShowChat] = useState(false);

  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <section className="flex flex-col gap-6">
      {showChat ? (
        <LiveChat hideChat={hideChat} />
      ) : (
        <button
          onClick={() => setShowChat(true)}
          className="font-medium text-sm px-4 w-full rounded-full hover:bg-[#0000001a] h-9 border"
        >
          Show chat
        </button>
      )}
      <SuggestionVideos />
    </section>
  );
};
export default VideoSidebar;

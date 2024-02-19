"use client";
import { addMessages } from "@/redux/slices/chatSlice";
import getRamdomEmoji from "@/utils/getRamdomEmoji";
import getRamdomName from "@/utils/getRamdomName";
import getRandomText from "@/utils/getRandomText";
import { MoreVertical, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatMessage } from "./ChatMessage";
import Button from "./Button";

const LiveChat = ({ hideChat }) => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  const [inputChat, setInputChat] = useState("");

  useEffect(() => {
    let time = setInterval(() => {
      dispatch(
        addMessages({
          id: crypto.randomUUID(),
          name: getRamdomName(),
          message: getRandomText() + " " + getRamdomEmoji(),
        })
      );
    }, [1000]);

    return () => clearInterval(time);
  }, []);

  const submitChat = (e) => {
    e.preventDefault();
    if (!inputChat.trim("")) return;
    dispatch(
      addMessages({
        id: crypto.randomUUID(),
        name: "Anjan",
        message: inputChat,
      })
    );
    setInputChat("");
  };

  return (
    <section className="border-[1.5px] rounded-xl flex flex-col ">
      <div className="p-2 h-12 border-b flex justify-between items-center text-base ">
        <div className="p-2 flex items-center ">
          Top chat
          <svg
            className="mt-1"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
          </svg>
        </div>
        <Button className="bg-transparent" size="icon">
          <MoreVertical />
        </Button>
      </div>
      <div className="flex flex-col-reverse gap-4 px-4 py-2 h-[400px] overflow-y-scroll">
        {chats.map((chat) => (
          <ChatMessage key={chat.id} chat={chat} />
        ))}
      </div>
      <form
        onSubmit={submitChat}
        className="pl-4 pr-6 border-t flex gap-4  justify-between items-center"
      >
        <input
          value={inputChat}
          onChange={(e) => setInputChat(e.target.value)}
          className="w-full text-sm outline-none  py-[10px]"
          type="text"
          placeholder="Enter message"
        />
        <Send type="submit" className="text-gray-500 mr-[-6px]" />
      </form>
      <div className="p-1  border-t">
        <button
          onClick={hideChat}
          className="font-medium text-sm px-4 w-full rounded-full hover:bg-[#0000001a] h-9"
        >
          Hide chat
        </button>
      </div>
    </section>
  );
};
export default LiveChat;

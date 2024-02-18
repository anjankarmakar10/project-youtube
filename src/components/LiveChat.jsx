import { addMessages } from "@/redux/slices/chatSlice";
import getRamdomEmoji from "@/utils/getRamdomEmoji";
import getRamdomName from "@/utils/getRamdomName";
import getRandomText from "@/utils/getRandomText";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatMessage } from "./ChatMessage";

const LiveChat = () => {
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
    }, [500]);

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
    <section className="border-2 rounded-xl flex flex-col ">
      <div className="p-2 h-12 border-b flex items-center text-base font-medium">
        Live Chat
      </div>
      <div className="flex flex-col-reverse gap-4 px-4 py-2 h-[400px] overflow-y-scroll">
        {chats.map((chat) => (
          <ChatMessage key={chat.id} chat={chat} />
        ))}
      </div>
      <form
        onSubmit={submitChat}
        className="p-2 border-t flex gap-2 pr-4 justify-between items-center"
      >
        <input
          value={inputChat}
          onChange={(e) => setInputChat(e.target.value)}
          className="w-full outline-none px-1 "
          type="text"
          placeholder="enter message"
        />
        <Send type="submit" className="text-gray-500" />
      </form>
      <div className="p-2  border-t">
        <button className="font-medium px-4 w-full rounded-full border py-[2px]">
          Close
        </button>
      </div>
    </section>
  );
};
export default LiveChat;

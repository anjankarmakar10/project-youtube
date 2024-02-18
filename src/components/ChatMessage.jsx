export const ChatMessage = ({ chat }) => {
  return (
    <article className="flex gap-2 items-center">
      <img
        className="w-6 h-6 rounded-full"
        src={`https://ui-avatars.com/api/?name=${chat.name}`}
        alt={chat.name}
      />
      <div className="flex gap-1 items-center text-[13px]">
        <h6 className="text-sm mb-[2px]  font-semibold text-slate-900">
          {chat.name}
        </h6>
        <p className="line-clamp-1">{chat.message}</p>
      </div>
    </article>
  );
};

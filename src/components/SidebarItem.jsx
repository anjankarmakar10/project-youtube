import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

const SidebarItem = ({ IconOrImgUrl, title, url, isActive = false }) => {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex h-10 items-center rounded-lg gap-6 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img alt="icon" src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl strokeWidth="1.5px" className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap text-sm overflow-hidden text-ellipsis">
        {title}
      </div>
    </Link>
  );
};
export default SidebarItem;

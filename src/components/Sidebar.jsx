"use client";
import { useSelector } from "react-redux";
import { NavbarFirstSection } from "./NavbarFirstSection";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen } = useSelector((state) => state.sidebar);

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1   ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        } 
      `}
      >
        Small Sidebar
      </aside>

      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed z-[999] inset-0 bg-secondary-dark opacity-50"
        />
      )}

      <aside
        className={`w-52 lg:sticky absolute top-0 overflow-y-auto 
        h-full
        scrollbar-hidden pb-4  flex-col gap-2 px-2  
         ${isLargeOpen ? "lg:flex" : "lg:hidden"} 
        ${isSmallOpen ? "flex z-[999] bg-white max-h-screen " : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <NavbarFirstSection />
        </div>
        Sidebar
      </aside>
    </>
  );
};
export default Sidebar;

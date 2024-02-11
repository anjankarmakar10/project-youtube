"use client";

import { Bell, Mic, Search, Upload, User, ArrowLeft } from "lucide-react";

import { useState } from "react";
import Button from "@/components/Button";
import { NavbarFirstSection } from "@/components/NavbarFirstSection";

const Navbar = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <header className="flex justify-between gap-8 lg:gap-16 pt-2 mb-6 px-4 items-center">
      <NavbarFirstSection hidden={showFullWidthSearch} />

      {showFullWidthSearch && (
        <Button
          onClick={() => setShowFullWidthSearch(false)}
          size="icon"
          variant={"ghost"}
        >
          <ArrowLeft />
        </Button>
      )}

      <form
        className={`${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }   gap-4 flex-grow justify-center`}
      >
        <div className="flex items-center flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary  shadow-inner shadow-secondary py-1 px-4 text-lg w-full outline-none focus:border-blue-500"
          />
          <Button className="py-[6px] px-4 rounded-r-full border border-secondary border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <div>
          <Button type="button" className="flex-shrink-0 " size="icon">
            <Mic />
          </Button>
        </div>
      </form>
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } items-center flex-shrink-0 gap-2`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className="md:hidden"
          size="icon"
          variant={"ghost"}
        >
          <Search />
        </Button>
        <Button variant={"ghost"} className=" md:hidden" size="icon">
          <Mic />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <Upload />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <Bell />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <User />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

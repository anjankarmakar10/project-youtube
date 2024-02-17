"use client";

import { Bell, Mic, Search, Upload, User, ArrowLeft } from "lucide-react";

import { useState } from "react";
import Button from "@/components/Button";
import { NavbarFirstSection } from "@/components/NavbarFirstSection";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <header className="flex justify-between gap-8 lg:gap-16 pt-2 mb-6 px-4 items-center relative sm:static">
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

      <SearchBar showFullWidthSearch={showFullWidthSearch} />

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

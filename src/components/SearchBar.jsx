"use client";

import { Mic, Search, SearchIcon } from "lucide-react";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "@/redux/slices/searchSlice";

const SearchBar = ({ showFullWidthSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([0]);
  const [active, setActive] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const [activeIndex, setActiveIndex] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!searchQuery.trim("")) return;

      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    setActive(true);

    const res = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );

    const data = await res.json();
    setSuggestion(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    if (searchQuery === "") return;

    if (keyCode === 13) {
      console.log(suggestion[activeIndex]);
    }

    if (suggestion.length === 0) return;

    if (keyCode === 40) {
      //user down

      if (activeIndex === -1 || activeIndex === suggestion?.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (keyCode === 38) {
      // user up

      if (activeIndex === -1 || activeIndex === 0) {
        setActiveIndex(suggestion?.length - 1);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`sm:relative ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }   gap-4 flex-grow  justify-center`}
      >
        <div className="flex items-center flex-grow max-w-[600px]">
          <input
            onKeyUp={handleKeyUp}
            onFocus={() => {
              if (searchQuery) setActive(true);
            }}
            onBlur={() => setActive(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary  shadow-inner shadow-secondary py-1 px-4 text-lg w-full outline-none focus:border-blue-500 "
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

      {active | searchQuery ? (
        <ul className="absolute right-4 left-4  top-14 rounded-2xl z-30  pt-4 pb-2 bg-slate-100 shadow-2xl md:right-[34%] md:left-[27%] ">
          {suggestion.map((item, index) => (
            <li
              key={item}
              className={`pr-6 pl-4 h-8 flex font-normal text-sm items-center gap-3 hover:bg-slate-300 ${
                index === activeIndex && "bg-stone-300"
              } `}
            >
              <SearchIcon size={18} color="#222" /> <span> {item} </span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
export default SearchBar;

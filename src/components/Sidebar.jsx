"use client";
import { useSelector } from "react-redux";
import { NavbarFirstSection } from "./NavbarFirstSection";

import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Youtube,
  Flame,
  Gamepad2,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
  History,
  Settings,
  Flag,
  HelpCircle,
  MessageSquareWarning,
} from "lucide-react";
import Link from "next/link";
import { Children, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "../components/Button";
import { playlists, subscriptions } from "../utils/constants";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen } = useSelector((state) => state.sidebar);

  return (
    <>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed z-[999] inset-0 bg-secondary-dark opacity-50"
        />
      )}

      <aside
        className={`w-60 lg:sticky absolute top-0 overflow-y-auto 
        h-screen
        scrollbar-hidden pb-4  flex-col gap-2 px-3  
         ${isLargeOpen ? "lg:flex" : "lg:hidden"} 
        ${isSmallOpen ? "flex z-[999] bg-white max-h-screen " : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <NavbarFirstSection />
        </div>
        <SidebarSection>
          <SidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <SidebarItem IconOrImgUrl={Youtube} title="Shorts" url="/" />
          <SidebarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </SidebarSection>
        <hr />
        <SidebarSection visibleItemCount={5}>
          <SidebarItem IconOrImgUrl={Library} title="Library" url="/library" />
          <SidebarItem IconOrImgUrl={History} title="History" url="/history" />
          <SidebarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <SidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />

          {playlists.map((playlist) => (
            <SidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </SidebarSection>
        <hr />
        <SidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <SidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </SidebarSection>
        <hr />
        <SidebarSection title="Explore">
          <SidebarItem IconOrImgUrl={Flame} title="Trending" url="/trending" />

          <SidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />

          <SidebarItem IconOrImgUrl={Gamepad2} title="Gaming" url="/gaming" />

          <SidebarItem IconOrImgUrl={Trophy} title="Sport" url="/sport" />
        </SidebarSection>

        <hr />
        <SidebarSection>
          <SidebarItem
            IconOrImgUrl={Settings}
            title="Settings"
            url="/settings"
          />

          <SidebarItem
            IconOrImgUrl={Flag}
            title="Report history"
            url="/report"
          />

          <SidebarItem IconOrImgUrl={HelpCircle} title="Help" url="/help" />

          <SidebarItem
            IconOrImgUrl={MessageSquareWarning}
            title="Send feedback"
            url="/feedback"
          />
        </SidebarSection>
        <hr />
        <SidebarSection>
          <footer className="flex text-[13px] px-3 font-semibold flex-col text-slate-800  ">
            <ul className="flex flex-wrap gap-2 mb-3">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
              </li>
              <li>
                <Link href="/">Copyright</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link href="/">Creator</Link>
              </li>
              <li>
                <Link href="/">Advertise</Link>
              </li>
              <li>
                <Link href="/">Developers</Link>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Policy & Safety</Link>
              </li>
              <li>
                <Link href="/">How YouTube works</Link>
              </li>
              <li>
                <Link href="/">Test new features</Link>
              </li>
            </ul>

            <span className="py-4 text-xs font-normal">© 2024 Google LLC</span>
          </footer>
        </SidebarSection>
      </aside>
    </>
  );
};

export default Sidebar;

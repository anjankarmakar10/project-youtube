export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyCzaC9IYYtJUTFIv2Q9aD-XMFMrDbT5Gp4

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCHnyfMqiRRG1u-2MsSQLbXA&key=AIzaSyCzaC9IYYtJUTFIv2Q9aD-XMFMrDbT5Gp4

export const TOTAL_VISIBLE_CHAT = 50;

export const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
];

export const subscriptions = [
  {
    channelName: "Fireship",
    id: "Fireship",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Caleb Curry",
    id: "CalebCurry",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Web Dev Simplified",
    id: "WebDevSimplified",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Kevin Powell",
    id: "KevinPowell",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
  },

  {
    channelName: "Traversy Media",
    id: "TraversyMedia",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export const playlists = [
  { id: "1", name: "Frontend & Backend" },
  { id: "2", name: "Favorites" },
  { id: "3", name: "React" },
  { id: "4", name: "Non-Dev" },
  { id: "5", name: "TypeScript" },
];

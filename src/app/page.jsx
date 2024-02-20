import Categories from "@/components/Categories";
import MainFeed from "@/components/MainFeed";
import VideoCategories from "@/components/VideoCategories";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 bg-white z-10 pb-4">
        <VideoCategories />
      </header>

      <MainFeed />
    </main>
  );
}

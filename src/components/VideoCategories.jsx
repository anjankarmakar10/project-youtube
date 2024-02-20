"use client";

import { useState } from "react";
import Categories from "./Categories";
import { categories } from "@/utils/constants";

const VideoCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </div>
  );
};
export default VideoCategories;

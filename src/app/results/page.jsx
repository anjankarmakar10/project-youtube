"use client";
import useSearch from "@/hooks/useSearch";

const SearchPage = ({ searchParams }) => {
  const { data } = useSearch(searchParams?.search_query);

  console.log(data);

  return <div>Hello : {searchParams?.search_query}</div>;
};
export default SearchPage;

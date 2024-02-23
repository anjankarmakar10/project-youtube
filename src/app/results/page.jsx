"use client";
import SearchVideoCard from "@/components/SearchVideoCard";
import SearchVideoCardSkeleton from "@/components/SearchVideoCardSkeleton";
import useSearch from "@/hooks/useSearch";

const SearchPage = ({ searchParams }) => {
  const { data, isLoading } = useSearch(searchParams?.search_query);

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 ">
        {isLoading && (
          <div className="flex flex-col gap-2">
            {Array(6)
              .fill("")
              .map((item, index) => (
                <SearchVideoCardSkeleton key={index} />
              ))}
          </div>
        )}
      </div>
    );

  return (
    <section className="flex flex-col gap-4 ">
      {data?.items?.map((search) => (
        <SearchVideoCard key={search.id} search={search} />
      ))}
    </section>
  );
};
export default SearchPage;

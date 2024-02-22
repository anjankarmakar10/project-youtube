import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const useSearch = (query) => {
  const getData = () =>
    fetch(
      `${BASE_URL}/search?part=snippet&maxResults=25&type=video&key=${API_KEY}&q=${query}`
    ).then((res) => res.json());

  return useQuery({
    queryKey: ["search", query],
    queryFn: getData,
  });
};
export default useSearch;

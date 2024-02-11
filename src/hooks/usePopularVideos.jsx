import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const usePopularVideos = () => {
  const getData = () =>
    fetch(
      `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`
    ).then((res) => res.json());

  return useQuery({
    queryKey: ["popular videos"],
    queryFn: getData,
  });
};
export default usePopularVideos;

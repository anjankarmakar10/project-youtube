import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const useComments = (videoId) => {
  const getData = () =>
    fetch(
      `${BASE_URL}/commentThreads?part=snippet%2Creplies&maxResults=50&key=${API_KEY}&videoId=${videoId}`
    ).then((res) => res.json());

  return useQuery({
    queryKey: ["comments", videoId],
    queryFn: getData,
  });
};
export default useComments;

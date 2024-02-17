import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const useVideo = (videoId) => {
  const getData = () =>
    fetch(
      `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    ).then((res) => res.json());

  return useQuery({
    queryKey: ["video", videoId],
    queryFn: getData,
  });
};
export default useVideo;

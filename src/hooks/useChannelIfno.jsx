import { API_KEY, BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";

const useChannelInfo = (channelId) => {
  const getData = () =>
    fetch(
      `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    ).then((res) => res.json());

  return useQuery({
    queryKey: ["channels", channelId],
    queryFn: getData,
  });
};
export default useChannelInfo;

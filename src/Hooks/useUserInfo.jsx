import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: userInfo,refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axios.get(`/get-user?email=${user?.email}`);
      return res.data;
    },
  });

  return [userInfo,refetch];
};

export default useUserInfo;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useJoinCamps = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: registers = [] } = useQuery({
        queryKey: ['join-camp', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/join-camp?participantEmail=${user?.email}`)
            return res.data;
        }
    })
    return [registers, refetch]
};

export default useJoinCamps;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useProfile = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();

    const { data: profileData = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data
        }
    })
    return [profileData, refetch]
};

export default useProfile;
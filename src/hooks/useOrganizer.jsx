import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useOrganizer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: organizer, isPending: isOrganizerLoading } = useQuery({
        queryKey: [user?.email, 'organizer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin
        }
    })
    return [organizer, isOrganizerLoading];
};

export default useOrganizer;
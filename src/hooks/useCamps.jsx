import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCamps = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: camps = [], isPending: loading} = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosSecure.get('/camps')
            return res.data; 
        }
    })
    return [camps, loading, refetch]
};

export default useCamps;
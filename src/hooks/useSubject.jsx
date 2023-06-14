import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSubject = () =>{
 const {user, loading} = useAuth();

 const [axiosSecure] = useAxiosSecure();
 
 const {refetch, data: subject = []} = useQuery({
    queryKey: ["selectedSubjects", user?.email],
    enabled: !loading,
    queryFn: async () =>{
        const response = await axiosSecure(`/selectedSubjects?email=${user?.email}`)
        return response.data;
    }
 })
 return [subject, refetch];
}

export default useSubject;
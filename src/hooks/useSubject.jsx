import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useSubject = () =>{
 const {user} = useContext(AuthContext);
 
 const {refetch, data: subject = []} = useQuery({
    queryKey: ["selectedSubjects", user?.email],
    queryFn: async () =>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/selectedSubjects?email=${user?.email}`)
        return response.json();
    }
 })
 return [subject, refetch];
}

export default useSubject;
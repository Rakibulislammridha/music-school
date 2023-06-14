import { useQuery } from "@tanstack/react-query";

const useAllInstructors = () =>{
    const {data: instructors = [], isLoading: loading} = useQuery({
        queryKey: ["instructors"],
        queryFn: async () =>{
            const res = await fetch("https://learn-music-server-rakibulislammridha.vercel.app")
            return res.json();
        }
    })
    return [instructors, loading]
}

export default useAllInstructors;
import { useQuery } from "@tanstack/react-query";

const useAllInstructors = () =>{
    const {data: instructors = [], isLoading: loading} = useQuery({
        queryKey: ["instructors"],
        queryFn: async () =>{
            const res = await fetch("http://localhost:3000/instructors")
            return res.json();
        }
    })
    return [instructors, loading]
}

export default useAllInstructors;
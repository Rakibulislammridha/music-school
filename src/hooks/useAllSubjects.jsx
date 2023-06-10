import { useQuery } from "@tanstack/react-query";

const useAllSubjects = () =>{

    const { refetch , data: subjects = []} = useQuery({
        queryKey: ["subjects"], 
        queryFn: async () =>{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/subjects`)
            return response.json();
        }
    })
    return [subjects, refetch]
}

export default useAllSubjects;
// add subject
export const addSubject = async (SubjectData)=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/subjects`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(SubjectData)
    })
    const data = await response.json();
    return data;
}

// Get Subjects
export const getAllClasses = async () =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/subjects`);
    const data = response.json();
    return data;
}
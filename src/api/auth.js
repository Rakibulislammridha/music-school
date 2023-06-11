// Save the User on db
export const saveUser = (user) =>{
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
    .then(res =>res.json())
    .then(data => console.log(data))
}

// Get role
export const getRole = async (email) =>{
    console.log(email);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json();
    console.log(response);
    return user?.role;
}


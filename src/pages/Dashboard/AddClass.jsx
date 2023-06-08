import React, { useContext, useState } from 'react';
import AddClassForm from '../../components/Form/AddClassForm';
import { AuthContext } from '../../providers/AuthProviders';

const AddClass = () => {

    const {user, loading, setLoading} = useContext(AuthContext)

    const [uploadImageName, setUploadImageName] = useState("Upload Image")

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const subject = form.subject.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
        const price = form.price.value;
        const availableSits = form.availableSits.value;
        const description = form.description.value;

        const image = event.target.image.files[0];

        console.log(subject, instructor, email, price, availableSits, description, image);
    }

    const handleImageChange = (image) =>{
        setUploadImageName(image.name)
    }

    return (
        <div>
            <AddClassForm
              user={user}
              loading={loading}
              handleSubmit={handleSubmit}
              uploadImageName={uploadImageName}
              handleImageChange={handleImageChange}
            ></AddClassForm>
        </div>
    );
};

export default AddClass;
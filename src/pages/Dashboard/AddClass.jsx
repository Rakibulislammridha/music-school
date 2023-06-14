import React, { useContext, useState } from 'react';
import AddClassForm from '../../components/Form/AddClassForm';
import { AuthContext } from '../../providers/AuthProviders';
import { uploadImage } from '../../api/uploadImage';
import { addSubject } from '../../api/subjects';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const [uploadImageName, setUploadImageName] = useState("Upload Image");

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const subject = form.subject.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
        const price = form.price.value;
        const availableSits = form.availableSits.value;
        const enrolledStudents = form.enrolledStudents.value;
        const description = form.description.value;

        const image = event.target.image.files[0];

        // upload image
        uploadImage(image)
        .then(data => {
            const classData = {
                image: data.data.display_url,
                subject,
                instructor:{
                    instructor,
                    email,
                },
                price,
                availableSits,
                description,
                enrolledStudents,
            }

            addSubject(classData)
            .then(data =>{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Class Added successfully !",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/dashboard/myClasses")
            })
            .catch(err => {
                console.log(err);
            })

            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
        })

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
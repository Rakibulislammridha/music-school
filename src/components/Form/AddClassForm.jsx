import React, { useContext } from "react";
import { ImSpinner10 } from "react-icons/im";
import { subjects } from "../Categories/categoriesData";

const AddClassForm = ({
  handleSubmit,
  user,
  loading = false,
  handleImageChange,
  uploadImageName,
}) => {


  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="subject" className="block text-gray-600">
              Subjects
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-orange-300 focus:outline-orange-500 rounded-md"
              name="subject"
            >
              {subjects.map((subject) => (
                <option value={subject.label} key={subject.label}>
                  {subject.label}
                </option>
              ))}
            </select>
          </div>
          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-orange-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(event)=>handleImageChange(event.target.files[0])}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-orange-500 text-white border border-orange-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-orange-500">
                    {uploadImageName}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="instructor" className="block text-gray-600">
              Instructor Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md "
              name="instructor"
              id="instructor"
              type="text"
              defaultValue={user?.displayName}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
                Instructor Email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md "
              name="email"
              id="email"
              type="email"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block text-gray-600">
              Price
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md "
              name="price"
              id="price"
              type="number"
              placeholder="Price"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="availableSits" className="block text-gray-600">
              Available Sits
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md "
              name="availableSits"
              id="availableSits"
              type="number"
              placeholder="Available Sits"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="availableSits" className="block text-gray-600">
              Enrolled Students
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md "
              name="enrolledStudents"
              id="enrolledStudents"
              type="number"
              placeholder="Enrolled Students"
              required
            />
          </div>
        </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                className="block rounded-md focus:orange-300 w-full h-32 px-4 py-3 text-gray-800  border border-orange-300 focus:outline-orange-500 "
                name="description"
              ></textarea>
            </div>
          </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-orange-500"
        >
          {loading ? (
            <ImSpinner10 className="m-auto animate-spin" size={24} />
          ) : (
            "Add Class"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;

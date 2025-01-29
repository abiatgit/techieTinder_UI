import  { useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";
import { BaseURL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";
const EditProfile = (user) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BaseURL + "/edit/profile",
        {
          firstName,
          lastName,
          about,
          photoUrl,
          gender,
          age,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(addUser(res.data));
      navigate("/profile");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const [firstName, setFirstName] = useState(user?.pro?.data?.firstName);
  const [lastName, setLastName] = useState(user?.pro?.data?.lastName);
  const [about, setAbout] = useState(user?.pro?.data?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.pro?.data?.photoUrl);
  const [gender, setGender] = useState(user?.pro?.data?.gender);
  const [age, setAge] = useState(user?.pro?.data?.age);
  const [showToasts, setShowToast] = useState(false);

  return (
    <div className="flex justify-center items-start my-5 space-x-6">
      {/* Profile Edit Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
  
        {/* First Name */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">First Name</span>
          <input
            type="text"
            value={firstName}
            onChange={(v) => setFirstName(v.target.value)}
            placeholder="Enter your first name"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
  
        {/* Last Name */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">Last Name</span>
          <input
            type="text"
            value={lastName}
            onChange={(v) => setLastName(v.target.value)}
            placeholder="Enter your last name"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
  
        {/* Gender */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">Gender</span>
          <select
            value={gender}
            onChange={(v) => setGender(v.target.value)}
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
  
        {/* Age */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">Age</span>
          <input
            type="number"
            value={age}
            onChange={(v) => setAge(Number(v.target.value))}
            placeholder="Enter your age"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
  
        {/* Photo URL */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">Photo URL</span>
          <input
            type="url"
            value={photoUrl}
            onChange={(v) => setPhotoUrl(v.target.value)}
            placeholder="Enter a valid photo URL"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
  
        {/* About Me */}
        <label className="block mb-4">
          <span className="label-text text-gray-700">About Me</span>
          <textarea
            value={about}
            onChange={(v) => setAbout(v.target.value)}
            placeholder="Tell us about yourself"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
  
        {/* Save Button */}
        <button
          className="btn btn-success w-full py-2 mt-4 rounded hover:bg-green-600 transition duration-200"
          onClick={saveProfile}
        >
          Save Profile
        </button>
  
        {/* Toast Message */}
        {/* showToasts && */}
        { showToasts &&(
          <div className="toast toast-top toast-center mt-4 fixed z-50">
            <div className="alert alert-success">
              <span>Profile successfully updated.</span>
            </div>
          </div>
        )}
      </div>
  
      {/* Preview Card */}
      <div className="mx-6">
        <FeedCard user={{ firstName, lastName, photoUrl, about }} />
      </div>
    </div>
  );
  
};
export default EditProfile;

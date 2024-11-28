import React, { useState } from "react";
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
    <div className="flex justify-center items-center my-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs mx-5">
        <h2 className="text-xl font-semibold text-center mb-4">Edit Profle</h2>

        <label className="block mb-4">
          <span className="label-text text-gray-700">First Name</span>
          <input
            type="email"
            value={firstName}
            onChange={(v) => setFirstName(v.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-4">
          <span className="label-text text-gray-700">Last Name</span>
          <input
            type="email"
            value={lastName}
            onChange={(v) => setLastName(v.target.value)}
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-4">
          <span className="label-text text-gray-700">Gender</span>
          <select
            
            onChange={(v) => setGender(v.target.value)}
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >

            <option value="">Select Gender</option>
            <option value={gender}>Male</option>
            <option value={gender}>Female</option>
            <option value={gender}>Other</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="label-text text-gray-700">Age</span>
          <input
            type="number"
            value={age}
            onChange={(v) => setAge(Number(v.target.value))}
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-4">
          <span className="label-text text-gray-700">PhotoUrl</span>
          <input
            type="email"
            value={photoUrl}
            onChange={(v) => setPhotoUrl(v.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-4">
          <span className="label-text text-gray-700">About me</span>
          <textarea
            type="text"
            value={about}
            onChange={(v) => setAbout(v.target.value)}
            placeholder="Type here"
            className="iput input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none input-lg focus:ring focus:ring-blue-300"
          />
        </label>

        <p className="text-red-500"></p>
        <button
          className="btn btn-success w-full py-2 mt-4 rounded hover:bg-green-600 transition duration-200"
          onClick={saveProfile}
        >
          Save Profile
        </button>
      </div>

      {showToasts && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile successfully updated.</span>
          </div>
        </div>
      )}

      <div className="mx-6">
        <FeedCard user={{ firstName, lastName, photoUrl, about }} />
      </div>
    </div>
  );
};
export default EditProfile;

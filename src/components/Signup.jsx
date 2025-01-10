import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate()
  const [firstName, setfirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signup = async () => {

    const response = await axios.post(
      `${BaseURL}/signup`,
      {
        firstName,
        lastName,
        email,
        password,
      },
      { withCredentials: true }
    );
    navigate("/profile")
  };
  return (
    <div className="flex justify-center items-center my-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
        <h2 className="text-xl font-semibold text-center mb-4">Sign UP</h2>
        <label className="block mb-4">
          <span className="label-text text-gray-700">First Name</span>
          <input
            type="text"
            value={firstName}
            onChange={(v) => setfirstName(v.target.value)}
            placeholder="Enter Your First  Name"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <label className="block mb-4">
          <span className="label-text text-gray-700">Last Name</span>
          <input
            type="text"
            value={lastName}
            onChange={(v) => setLastName(v.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <label className="block mb-4">
          <span className="label-text text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <label className="block mb-4">
          <span className="label-text text-gray-700">Password</span>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(v) => setPassword(v.target.value)}
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <p className="text-red-500"></p>
        <button className="btn btn-success w-full py-2 mt-4 rounded hover:bg-green-600 transition duration-200" onClick={signup}>
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("ancyrevi@gmail.com");
  const [password, setPassword] = useState("Blessing_123");
 const dispatch=useDispatch()
 const navigate=useNavigate()
  const handleClick = async () => {
    try {
      const res =await  axios.post(BaseURL+"/login",{
        email: email,
        password: password,
      },{withCredentials:true});
      dispatch(addUser(res.data))
      return navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center my-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
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
            onChange={(v) => setPassword(v.target.value)}
            placeholder="Enter your password"
            className="input input-bordered w-full my-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <button className="btn btn-success w-full py-2 mt-4 rounded hover:bg-green-600 transition duration-200" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

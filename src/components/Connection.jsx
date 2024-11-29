import React, { useEffect } from "react";
import ConnectionCard from "./ConnectionCard";
import axios from "axios";
import { BaseURL } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../../utils/connectionSlice";

const Connection = () => {
  const connection = useSelector((store) => store.connection || []);
  const dispatch = useDispatch();
  const getConnections = async () => {
    try {
      const response = await axios.get(BaseURL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  return (
    <div className="">
      <div className="flex justify-center  items-center m-auto">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <h1 className="text-center text-yellow-500 text-3xl my-8 shadow-lg rounded-lg">
          connections
        </h1>
      </div>
      <div className="p-5 m-9">
   
        {
          (connection.length===0? <div className="text-center text-gray-500 py-8">
          <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No connections</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding new connections.</p>
        </div> :
        
        connection.map((user) => (
          <ConnectionCard prop={user} />)
        ))}
      </div>
    </div>
  );
};

export default Connection;

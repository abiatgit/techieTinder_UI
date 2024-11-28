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
    const response = await axios.get(BaseURL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(response.data.data));
    console.log(connection);
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
        {connection.map((user) => (
          <ConnectionCard prop={user } />
        ))}
      </div>
    </div>
  );
};

export default Connection;

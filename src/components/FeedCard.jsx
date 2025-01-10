import axios from "axios";
import React, { useState } from "react";
import { BaseURL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import {removeUserFromFeed}from "../../utils/feedSlice"
const FeedCard = ({ user }) => {
  const dispatch= useDispatch()
    const [isRemoved,setIsRemoved]=useState(false)
  const { firstName, lastName, photoUrl, about, _id } = user;

  const sentRequest = async (status, id) => {
    const res = await axios.post(
      `${BaseURL}/user/request/${status}/${id}`,
      {},
      { withCredentials:true }
    );
    dispatch(removeUserFromFeed(id))
    setIsRemoved(true)
  };
 
  return (
    <div className="card bg-base-100 w-96 h-auto shadow-xl mx-auto mt-7">
      {/* Image Section */}
      <figure className="w-full aspect-w-16 aspect-h-9">
        <img
          src={photoUrl}
          alt="photo"
          className="object-contain w-full h-full rounded-t-lg"
        />
      </figure>
  
      {/* Card Body */}
      <div className="card-body flex flex-col justify-between">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold">
          {firstName} {lastName}
        </h2>
  
        {/* About Section */}
        <p className="text-sm text-gray-600">{about}</p>
  
        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-warning"
            onClick={() => sentRequest("ignore", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-success"
            onClick={() => sentRequest("interest", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
  
  
};

export default FeedCard;

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
    <div className="card bg-base-100 w-96 shadow-xl mx-auto mt-7">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        <p>{about}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-warning"
            onClick={() => sentRequest("ignore", _id)}
          >
            ignore
          </button>
          <button
            className="btn btn-success"
            onClick={() => sentRequest("interest", _id)}
          >
            interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

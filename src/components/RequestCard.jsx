import axios from "axios";
import React from "react";
import { BaseURL } from "../../utils/constant";


const RequestCard = (user) => {

  // I need to check what sort of user format coming here because i'm using diffent approch on my requet slice

 if( user.pro.fromUser===null )return <>no Request found</>
  const { firstName, lastName, photoUrl, about} = user.pro.fromUser;
  const {_id}=user.pro

  const handelRequest=(status,reqId)=>{
   const response= axios.post(BaseURL+`/request/review/${status}/${reqId}`,{},{withCredentials:true})

  }

  return (
    <div className="relative max-w-xl mx-auto mt-16 p-4">
      <div className="absolute -top-12 left-8 z-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl p-6 pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {firstName} {lastName}
          </h2>
          <p className="text-purple-200 text-sm">{about}</p>
        </div>
        <div className="my-4 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={() => handelRequest("accept", _id)}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => handelRequest("reject", _id)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
  
};
export default RequestCard;

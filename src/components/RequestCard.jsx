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

 return  (
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
      <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-6 pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {firstName} {lastName}
          </h2>
          <p className="text-green-100 text-sm">{about}</p>
        </div>
        <div className="my-3">
        <button className="mx-2 cursor-pointer bg-slate-500 rounded-md p-2 shadow-orange-950 text-white" onClick={()=>{handelRequest("accept",_id)}}>accept </button>
        <button className="mx-2 cursor-pointer bg-slate-500 rounded-md p-2 shadow-orange-950 text-white"onClick={()=>{handelRequest("reject",_id)}}>reject </button>
        </div>
      </div>

    </div>
  );
};
export default RequestCard;

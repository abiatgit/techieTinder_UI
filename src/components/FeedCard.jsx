import React from "react";
const FeedCard = ({user}) => {
  // console.log(user)
const{firstName,lastName,photoUrl,about}=user

  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto mt-7">
      <figure>
        <img
          src={photoUrl}
         alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}  {lastName}</h2>
     
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">ignore</button>
          <button className="btn btn-success">interested</button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

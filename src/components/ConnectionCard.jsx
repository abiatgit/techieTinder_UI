import React from "react";

const ConnectionCard = (user) => {
  console.log(user);
  const { firstName, lastName, photoUrl,about } = user.prop;
  return (
    <div className="relative w-2/3 m-auto p-9">
      <div className="avatar absolute -top-12 left-4 z-10 p-9 m-2 ">
        <div className="w-24 rounded-full ">
          <img src={photoUrl} className="rounded-full" />
        </div>
      </div>
  
      <div role="alert" className="alert alert-success flex items-center justify-center min-h-[100px]">
        <p className="text-white text-xl">{firstName + " " + lastName}</p>
      </div>
    </div>
  );
};

export default ConnectionCard;

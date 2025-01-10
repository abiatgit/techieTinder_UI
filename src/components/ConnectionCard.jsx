import React from "react";

const ConnectionCard = (user) => {

  const { firstName, lastName, photoUrl,about } = user.prop;
  return (
    <div className="relative max-w-xl mx-auto mt-16 p-4">
      {/* Profile Image */}
      <div className="absolute -top-12 left-8 z-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Card Content */}
      <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 rounded-xl shadow-lg p-6 pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {firstName} {lastName}
          </h2>
          <p className="text-sky-200 text-sm italic">{about}</p>
        </div>
      </div>
    </div>
  );
  
};

export default ConnectionCard;

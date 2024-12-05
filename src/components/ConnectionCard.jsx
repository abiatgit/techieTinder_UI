import React from "react";

const ConnectionCard = (user) => {

  const { firstName, lastName, photoUrl,about } = user.prop;
  return (
    <div className="relative max-w-xl mx-auto mt-16 p-4">
      <div className="absolute -top-12 left-8 z-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={photoUrl} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-6 pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">{firstName} {lastName}</h2>
          <p className="text-green-100 text-sm">{about}</p>
        </div>
      </div>

    </div>
  );
};

export default ConnectionCard;

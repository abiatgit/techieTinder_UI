import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../utils/requestSlice";
import RequestCard from "./RequestCard";

const Request = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const requestData = useSelector((store) => store.request);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BaseURL + "/user/request/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      setError("Failed to load requests. Please try again later.");
      console.error(err); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a spinner or animated component
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    /// not working properly i have to re-check agin after complete the site
    <div>
      {requestData.currentRequest.length === 0 ? (
        <p>No requests found</p> // Handle case when there are no requests
      ) : (
        requestData.currentRequest.map((user) => (
          <RequestCard key={user._id} pro={user} />
        ))
      )}
    </div>
  );
};

export default Request;

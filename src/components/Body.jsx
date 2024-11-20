import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BaseURL } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Body = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
 
    try {
      const res = await axios.get(BaseURL + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className="flex flex-col min-h-screen ">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

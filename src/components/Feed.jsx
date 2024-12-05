import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      const res = await axios.get(BaseURL +"/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, [feed]);

  return <div>{feed && <FeedCard user={feed.data[0]} />}</div>;
};

export default Feed;

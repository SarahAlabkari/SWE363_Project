import React, { useEffect, useState } from "react";
import TouristMenuBar from "../components/TouristMenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
import axios from "../api/axiosInstance";

const MyWishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const touristId = localStorage.getItem('touristId');

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`/tourists/${touristId}/wishlist`);
        setWishlist(res.data);
      } catch (err) {
        console.error("❌ Error fetching wishlist:", err);
      }
    };

    if (touristId) {
      fetchWishlist();
    }
  }, [touristId]);

  return (
    <div>
      <TouristMenuBar />
      <div className="container mt-5 text-center">
        <h2>My WishList</h2>
        {wishlist.length === 0 ? (
          <p>No activities in your wishlist.</p>
        ) : (
          <CardSlider>
            {wishlist.map((entry) => (
              <Activity
                key={entry._id}
                activity={entry.activity}
                customLink={`/ViewActivity/${entry.activity._id}`}
              />
            ))}
          </CardSlider>
        )}
      </div>
    </div>
  );
};

export default MyWishList;

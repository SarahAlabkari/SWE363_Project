import React from "react";
import MenuBar from "../components/MenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "WhereTo" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/Login" },
  ];

  const MyWishList = () => {
    return(
    <div>
    <MenuBar links = {navLinks}/>
    <div className="container mt-5 text-center">
          <h2>My WishList</h2>
          <CardSlider>
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          <Activity customLink="/ViewActivity" />
          </CardSlider>
    </div>
    </div>
    )
  }

  export default MyWishList;


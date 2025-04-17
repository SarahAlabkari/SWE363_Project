import React from "react";
import MenuBar from "../components/MenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Where To?", path: "" },
    { label: "Find a Local", path: "/TourGuides" },
    { label: "My Plan", path: "/MyPlan" },
    { label: "Wishlist", path: "/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  const MyWishList = () => {
    return(
    <div>
    <MenuBar links = {navLinks}/>
    <div className="container mt-5 text-center">
          <h2>My WishList</h2>
          <CardSlider>
            <Activity />
            <Activity />
            <Activity />
          </CardSlider>
    </div>
    </div>
    )
  }

  export default MyWishList;


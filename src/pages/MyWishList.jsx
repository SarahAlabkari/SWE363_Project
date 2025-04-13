import React from "react";
import MenuBar from "../components/MenuBar";
import ActivitiesCarousel from "../components/ActivitiesCarousel";

const navLinks = [
    { label: "Home", path: "/pages/Home" },
    { label: "About", path: "/pages/About" },
    { label: "Where To?", path: "" },
    { label: "Find a Local", path: "/pages/TourGuides" },
    { label: "My Plan", path: "/pages/MyPlan" },
    { label: "Wishlist", path: "/pages/MyWishlist" },
    { label: "Login", path: "/" },
  ];

  const MyWishList = () => {
    return(
    <div>
    <MenuBar links = {navLinks}/>
    <div className="container mt-5 text-center">
    <h2>My WishList</h2>
    <ActivitiesCarousel/>
    </div>
    </div>
    )
  }

  export default MyWishList;


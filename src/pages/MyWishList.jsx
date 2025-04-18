import React from "react";
import MenuBar from "../components/MenuBar";
import CardSlider from "../components/CardSlider";
import Activity from "../components/Activity";
import TouristMenuBar from "../components/TouristMenuBar";


  const MyWishList = () => {
    return(
    <div>
      <TouristMenuBar/>
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


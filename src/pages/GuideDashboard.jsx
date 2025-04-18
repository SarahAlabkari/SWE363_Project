// // Path: src/pages/GuideDashboard.jsx

// import React from "react";
// // Import custom components used in the dashboard
// import CalendarComponent from "../components/CalendarComponent";
// import GuideReviews from "../components/GuideReviews";
// import TourStatistics from "../components/TourStatistics";
// import GuideTopTours from "../components/GuideTopTours";
// import MenuBar from "../components/MenuBar";
// import Activity from "../components/Activity";
// import Tour from "../components/Tour";
// import CardSlider from "../components/CardSlider";
// import EarningPerMonth from "../components/EarningPerMonth"; // Earning / Month component
// import "./GuideDashboard.css"; // Optional: where you put your scrollbar styling

// const GuideDashboard = () => {
//   // Navigation bar links
//   const navLinks = [
//     { label: "Home", path: "/Home" },
//     { label: "About", path: "/About" },
//     { label: "Profile", path: "/GuideProfile" },
//     { label: "Dashboard", path: "/GuideDashboard" },
//     { label: "Tour Center", path: "/TourCenter" },
//   ];

//   return (
//     <div>
//       {/* Top MenuBar with navigation links */}
//       <MenuBar links={navLinks} />

//       {/* Main content container */}
//       <div className="min-vh-100">
//         <main
//           className="d-flex flex-column"
//           style={{
//             padding: '3rem 2rem',
//             gap: '5rem',
//           }}
//         >
//           {/* First row: Calendar + Activities of the day and month */}
//           <div
//             className="d-flex flex-wrap"
//             id="dashboardRow1"
//             style={{
//               justifyContent: 'space-between',
//               alignItems: 'flex-start',
//               gap: '3rem',
//               width: '100%',
//             }}
//           >
//             {/* Calendar Section */}
//             <div style={{ flex: '1', minWidth: '300px' }}>
//               <CalendarComponent />
//             </div>

//             {/* Activities Section with sliders */}
//             <div style={{ flex: '2', minWidth: 0 }}>
//               <p className="section-title">Happining on this day</p>
//               <CardSlider>
//                 <Activity />
//                 <Activity />
//                 <Activity />
//               </CardSlider>

//               <p className="section-title mt-5">Happining on this month</p>
//               <CardSlider>
//                 <Tour />
//                 <Tour />
//                 <Tour />
//               </CardSlider>
//             </div>
//           </div>

//           {/* Second row: Statistics and Reviews */}
//           <div
//             className="d-flex flex-wrap"
//             id="dashboardRow2"
//             style={{
//               justifyContent: 'space-between',
//               gap: '3rem',
//             }}
//           >
//             {/* How Many Tours Section */}
//             <div style={{ flex: '1', minWidth: '300px' }}>
//               <p className="section-title">How many?</p>
//               <TourStatistics />
//             </div>

//             {/* Reviews Section */}
//             <div style={{ flex: '1', minWidth: '300px' }}>
//               <p className="section-title">Reviews</p>
//               <GuideReviews />
//             </div>
//           </div>

//           {/* Third row: Earnings and Top Tours */}
//           <div
//             className="d-flex flex-wrap"
//             id="dashboardRow3"
//             style={{
//               justifyContent: 'space-between',
//               gap: '3rem',
//             }}
//           >
//             {/* Earnings Section */}
//             <div style={{ flex: '1', minWidth: '300px' }}>
//               <p className="section-title">Earning / Month</p>
//               <EarningPerMonth />
//             </div>

//             {/* Top 3 Attended Tours Section */}
//             <div style={{ flex: '1', minWidth: '300px' }}>
//               <p className="section-title">Top 3 Attended Tours</p>
//               <GuideTopTours />
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default GuideDashboard;

// Path: src/pages/GuideDashboard.jsx

import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";
import GuideTopTours from "../components/GuideTopTours";
import MenuBar from "../components/MenuBar";
import Activity from "../components/Activity";
import Tour from "../components/Tour";
import CardSlider from "../components/CardSlider";
import EarningPerMonth from "../components/EarningPerMonth";
import "./GuideDashboard.css"; // Optional custom styles (like scrollbar)

const GuideDashboard = () => {
  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "About", path: "/About" },
    { label: "Profile", path: "/GuideProfile" },
    { label: "Dashboard", path: "/GuideDashboard" },
    { label: "Tour Center", path: "/TourCenter" },
  ];

  return (
    <div>
      {/* Top Navigation */}
      <MenuBar links={navLinks} />

      {/* Main Dashboard */}
      <div className="min-vh-100">
        <main
          className="d-flex flex-column"
          style={{
            padding: "3rem 2rem",
            gap: "5rem",
          }}
        >
          {/* Row 1: Calendar + Sliders */}
        <div
          className="flex flex-col lg:flex-row flex-wrap gap-12 w-full"
          id="dashboardRow1"
        >
          {/* Calendar Section */}
          <div className="w-full lg:w-1/3 min-w-[300px]">
            <CalendarComponent />
          </div>

          {/* Sliders Section */}
          <div className="w-full lg:w-2/3 min-w-[300px]">
            <p className="section-title">Happining on this day</p>
            <CardSlider>
              <Activity />
              <Activity />
              <Activity />
            </CardSlider>

            <p className="section-title mt-5">Happining on this month</p>
            <CardSlider>
              <Tour />
              <Tour />
              <Tour />
            </CardSlider>
          </div>
        </div>


          {/* Row 2: Stats + Reviews */}
          <div
            className="d-flex flex-wrap"
            id="dashboardRow2"
            style={{
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
              <p className="section-title">How many?</p>
              <TourStatistics />
            </div>

            <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
              <p className="section-title">Reviews</p>
              <GuideReviews />
            </div>
          </div>

          {/* Row 3: Earnings + Top Tours */}
          <div
            className="d-flex flex-wrap"
            id="dashboardRow3"
            style={{
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
              <p className="section-title">Earning / Month</p>
              <EarningPerMonth />
            </div>

            <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
              <p className="section-title">Top 3 Attended Tours</p>
              <GuideTopTours />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuideDashboard;

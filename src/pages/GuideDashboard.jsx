// Path: src/pages/GuideDashboard.jsx

import React from "react";
import GuideTopBar from "../components/GuideTopBar";
import CalendarComponent from "../components/CalendarComponent";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";

const GuideDashboard = () => {
    return (
        <div>
            <GuideTopBar />
            <div>
                <main style={{ margin: '15px' }}>
                    {/* First Row: Calendar & Activities */}
                    <div className="d-flex" style={{ justifyContent: 'space-around' }}>
                        <div>
                            <p>Happining on this month</p>
                            <div style={{ width: '2rem' }}>
                                <CalendarComponent />
                            </div>
                        </div>
                        <div>
                            <p>Happining on this day</p>
                            <ActivitiesCarousel />
                        </div>
                    </div>

                    {/* Second Row: Stats & Reviews */}
                    <div className="d-flex" style={{ justifyContent: 'space-around' }}>
                        <div>
                            <div>
                                <TourStatistics />
                            </div>
                        </div>
                        <div>
                            <p>Reviews</p>
                            <div>
                                <GuideReviews />
                            </div>
                        </div>
                    </div>

                    {/* Third Row: Placeholder for future components */}
                    <div className="d-flex" style={{ justifyContent: 'space-around' }}>
                        {/* <GuideEarningPMonth />
                        <GuideTopAttendees /> */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GuideDashboard;

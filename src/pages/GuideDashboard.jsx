// Path: src/pages/GuideDashboard.jsx

import React from "react";
import GuideTopBar from "../components/GuideTopBar";
import CalendarComponent from "../components/CalendarComponent";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
import GuideReviews from "../components/GuideReviews";
import TourStatistics from "../components/TourStatistics";
import GuideTopTours from "../components/GuideTopTours";
import "./GuideDashboard.css"

const GuideDashboard = () => {
    return (<div>
        <GuideTopBar />
        <div>
            <main style={{margin: '15px'}}>
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
                    <div>
                        <p className="section-title">Happining on this month</p>
                        <div style={{ width: '2rem' }}>
                            <CalendarComponent />
                        </div>
                    </div>
                    <div>
                        <p className="section-title">Happining on this day</p>
                        <ActivitiesCarousel />
                    </div>
                </div>
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
                    <div>
                        <p className="section-title">How many?</p>
                        <div>
                            <TourStatistics />
                        </div>
                    </div>
                    <div>
                        <p className="section-title">Reviews</p>
                        <div>
                            <GuideReviews />
                        </div>
                    </div>
                </div>
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
                    <div>
                        {/* <GuideEarningPMonth /> */}
                    </div>
                    <div>
                        <p className="section-title">Top 3 Attendded Tours</p>
                        <div>
                            <GuideTopTours />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>);
}

export default GuideDashboard;

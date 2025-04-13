import React from "react";
import GuideTopBar from "../components/GuideTopBar";
import CalendarComponent from "../components/CalendarComponent";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
import GuideReviews from "../components/GuideReviews";
import GuideTopTours from "../components/GuideTopTours";

const GuideDashboard = () => {
    return (<div>
        <GuideTopBar />
        <div >
            <main
                className="d-flex flex-column gap-5"
                style={{ margin: '15px' }}>
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
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
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
                    <div>
                        <p>How many?</p>
                        <div>
                            {/* <GuideStatistics /> */}
                        </div>
                    </div>
                    <div>
                        <p>Reviews</p>
                        <div>
                            <GuideReviews />
                        </div>
                    </div>
                </div>
                <div className="d-flex" style={{ justifyContent: 'space-around' }}>
                    <div>
                        {/* <GuideEarningPMonth /> */}
                    </div>
                    <div>
                        <p>Top 3 Attendded Tours</p>
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
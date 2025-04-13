import React from "react";
import GuideTopBar from "../components/GuideTopBar";
import CalendarComponent from "../components/CalendarComponent";
import ActivitiesCarousel from "../components/ActivitiesCarousel";
import GuideReviews from "../components/GuideReviews";

const GuideDashboard = () => {
    return (<div>
        <GuideTopBar />
        <div>
            <main style={{margin: '15px'}}>
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
                <div className="d-flex" style={{justifyContent: 'space-around'}}>
                    {/* <GuideEarningPMonth />
                    <GuideTopAttendees /> */}
                </div>
            </main>
        </div>
    </div>);
}

export default GuideDashboard;
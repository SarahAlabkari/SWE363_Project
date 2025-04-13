import React from "react";
import GuideTopBar from "../components/GuideTopBar";
import GuideSideBar from "../components/GuideSideBar";

const GuideDashboard = () => {
    return (<div>
        <GuideTopBar />
        <div className="d-flex">
            <main className="container">
                <div className="row">
                    {/* <GuideCalendar />
                    <GuideTour />  */}
                </div>
                <div className="row">
                    {/* <GuideStatistics />
                    <GuideReviews /> */}
                </div>
                <div className="row">
                    {/* <GuideEarningPMonth />
                    <GuideTopAttendees /> */}
                </div>
            </main>
        </div>
    </div>);
}

export default GuideDashboard;
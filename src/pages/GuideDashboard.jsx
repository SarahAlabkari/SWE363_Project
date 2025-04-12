import React from "react";
import GuideTopBar from "../components/GuideTopBar";

const GuideDashboard = () => {
    return (<div>
        <GuideTopBar />
        <div className="d-flex">
            {/* <GuideSideBar /> */}
            <main className="container">
                <div className="row">
                    {/* <GuideCalendar />
                    <GuideTour /> */}
                </div>
            </main>
        </div>
    </div>);
}

export default GuideDashboard;
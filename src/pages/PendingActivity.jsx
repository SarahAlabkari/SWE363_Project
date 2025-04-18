import React, { useState, useEffect, useRef } from "react";
import AdminMenuBar from "../components/AdminMenuBar";
import { Alert, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const PendingActivity = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showError, setShowError] = useState(false);
  const dropdownRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const data = [
      {
        name: 'Event Masters',
        username: "Event-Masters@12",
        activityDescription: "Reported behavior",
        place: "Not Determined",
        time: "2025-04-17 14:22",
        attachments: "/maroof.jpg",
        action: "Approve Activity",
      },
      {
        name: 'Explore & Engage',
        username: "Explore&Engage@Khobar",
        activityDescription: "Late submission of report",
        place: "Park",
        time: "2025-04-16 10:12",
        attachments: "/maroof.jpg",
        action: "Reject Activity",
      },
      {
        name: 'Dynamic Experiences',
        username: "DynExperiences",
        activityDescription: "For dynamic experience",
        place: "Khobar",
        time: "2025-04-15 09:30",
        attachments: "/maroof.jpg",
        action: "",
      }
    ];
    setActivities(data);
    setFilteredActivities(data);
  }, []);

  const handleActionSelect = (index, action) => {
    const updated = [...filteredActivities];
    updated[index].action = action;
    setFilteredActivities(updated);
    setShowError(false);
  };

  const handleSearchAndFilter = (term, status) => {
    const filtered = activities.filter((activity) => {
      const matchesSearch =
        activity.username.toLowerCase().includes(term) ||
        activity.activityDescription.toLowerCase().includes(term);
      const matchesStatus =
        status === "All" ||
        (status === "Approved" && activity.action === "Approve Activity") ||
        (status === "Rejected" && activity.action === "Reject Activity") ||
        (status === "Pending" && !activity.action);
      return matchesSearch && matchesStatus;
    });
    setFilteredActivities(filtered);
    setShowError(filtered.length === 0);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilterStatus("All");
    setFilteredActivities(activities);
    setShowError(false);
  };

  useEffect(() => {
    handleSearchAndFilter(searchTerm.trim().toLowerCase(), filterStatus);
  }, [searchTerm, filterStatus, activities]);

  return (
    <div style={{ position: "relative" }}>
      <AdminMenuBar />

      {showError && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            variant="danger"
            className="text-center"
            style={{ width: "400px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
          >
            <div className="fw-bold mb-3">No matching results found.</div>
            <Button variant="outline-danger" onClick={clearSearch}>
              OK
            </Button>
          </Alert>
        </div>
      )}

      <div className="container mt-4">
        <h2 className="fw-bold mb-3 text-center">Pending Activities</h2>

        {/* Filter Left + Search Right */}
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-3 gap-2">
          <div style={{ width: "250px" }}>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="position-relative" style={{ width: "250px" }}>
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search By Username"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <X
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={clearSearch}
              />
            )}
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead style={{ backgroundColor: "#6c63ac", color: "white" }}>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Activity Description</th>
                <th>Place</th>
                <th>Time</th>
                <th>Attachments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredActivities.map((activity, i) => (
                <tr key={i}>
                  <td>{activity.name}</td>
                  <td>{activity.username}</td>
                  <td>{activity.activityDescription}</td>
                  <td>{activity.place}</td>
                  <td>{activity.time}</td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => {
                        setModalImage(activity.attachments);
                        setShowModal(true);
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <div className="dropdown" style={{ position: "relative" }}>
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ref={(el) => (dropdownRefs.current[i] = el)}
                      >
                        {activity.action || "Select Action"}
                      </button>
                      <ul className="dropdown-menu text-start">
                        {["Approve Activity", "Reject Activity"].map((action, aIndex) => (
                          <li key={aIndex}>
                            <button
                              className="dropdown-item"
                              onClick={() => handleActionSelect(i, action)}
                            >
                              {action}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Attachment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                {modalImage && (
                  <img
                    src={modalImage}
                    alt="Attachment"
                    onError={(e) => (e.target.style.display = "none")}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingActivity;

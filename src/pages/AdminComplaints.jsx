import React, { useState, useEffect, useRef } from "react";
import AdminMenuBar from "../components/AdminMenuBar";
import { Alert, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showError, setShowError] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [actionFilter, setActionFilter] = useState("All");
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const data = [
      {
        username: "Amal-Alshihri",
        reportedUsername: "SultanAhmed23",
        description: "Inappropriate behavior",
        time: "2025-04-17 14:22",
        status: "Pending",
        selectedAction: "Warn reported user"
      },
      {
        username: "Ibrahim12",
        reportedUsername: "Suliman-Alghamdi",
        description: "Arrived more than an hour late without notice",
        time: "2025-04-16 10:12",
        status: "Confirmed",
        selectedAction: "Suspend reported user"
      }
    ];
    setComplaints(data);
    setFilteredComplaints(data);
  }, []);

  const handleActionSelect = (index, action) => {
    const updated = [...filteredComplaints];
    updated[index].selectedAction = action;
    setFilteredComplaints(updated);
    const dropdownToggle = dropdownRefs.current[index];
    if (dropdownToggle) dropdownToggle.click();
  };

  const handleSearchAndFilter = () => {
    const term = searchTerm.trim().toLowerCase();
    let filtered = [...complaints];

    if (term) {
      filtered = filtered.filter(
        (c) =>
          c.username.toLowerCase().includes(term) ||
          c.reportedUsername.toLowerCase().includes(term)
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter(
        (c) => c.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (actionFilter !== "All") {
      filtered = filtered.filter(
        (c) =>
          c.selectedAction &&
          c.selectedAction.toLowerCase() === actionFilter.toLowerCase()
      );
    }

    if (filtered.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    setFilteredComplaints(filtered);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleActionFilter = (e) => {
    setActionFilter(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearchAndFilter();
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    handleSearchAndFilter();
  }, [statusFilter, actionFilter, complaints]);

  const getStatusStyle = (status) => {
    const base = {
      padding: "5px 15px",
      borderRadius: "20px",
      fontWeight: "500",
      display: "inline-block"
    };

    switch (status.toLowerCase()) {
      case "confirmed":
        return { ...base, backgroundColor: "#28a745", color: "white" };
      case "pending":
        return { ...base, backgroundColor: "#ffc107", color: "black" };
      case "reviewed":
        return { ...base, backgroundColor: "#007bff", color: "white" };
      case "dismissed":
        return { ...base, backgroundColor: "#dc3545", color: "white" };
      default:
        return { ...base, backgroundColor: "#6c757d", color: "white" };
    }
  };

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
            alignItems: "center"
          }}
        >
          <Alert
            variant="danger"
            className="text-center"
            style={{
              width: "400px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            <div className="fw-bold mb-3">No matching results found.</div>
            <Button
              variant="outline-danger"
              onClick={() => {
                setShowError(false);
                setSearchTerm("");
                setStatusFilter("All");
                setActionFilter("All");
                setFilteredComplaints(complaints);
              }}
            >
              OK
            </Button>
          </Alert>
        </div>
      )}

      <div className="container mt-4">
        <h2 className="fw-bold mb-3 text-center">Complaints</h2>

        <div className="d-flex flex-wrap justify-content-between mb-3 align-items-center gap-2">
          <div className="d-flex gap-2">
            <select
              className="form-select"
              value={statusFilter}
              onChange={handleStatusFilter}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Dismissed">Dismissed</option>
            </select>

            <select
              className="form-select"
              value={actionFilter}
              onChange={handleActionFilter}
            >
              <option value="All">All Actions</option>
              <option value="Warn reported user">Warn reported user</option>
              <option value="Suspend reported user">Suspend reported user</option>
              <option value="Ban reported user">Ban reported user</option>
              <option value="Dismiss">Dismiss</option>
            </select>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <div className="position-relative">
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
                    right: "35px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                  onClick={clearSearch}
                />
              )}
            </div>
            <button
              className="btn"
              style={{ backgroundColor: "#9abf80", color: "white" }}
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>

        <div className="table-responsive" style={{ overflow: "visible" }}>
          <table className="table table-striped table-bordered text-center">
            <thead style={{ backgroundColor: "#6c63ac", color: "white" }}>
              <tr>
                <th>Username</th>
                <th>Reported username</th>
                <th>Description</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.length === 0 ? (
                <tr>
                  <td colSpan="6">Loading complaints...</td>
                </tr>
              ) : (
                filteredComplaints.map((c, i) => (
                  <tr key={i}>
                    <td>{c.username}</td>
                    <td>{c.reportedUsername}</td>
                    <td>{c.description}</td>
                    <td>{c.time}</td>
                    <td>
                      <span style={getStatusStyle(c.status)}>{c.status}</span>
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
                          {c.selectedAction || "Select Action"}
                        </button>
                        <ul
                          className="dropdown-menu text-start"
                          style={{
                            maxHeight: "none",
                            overflow: "visible",
                            zIndex: 9999
                          }}
                        >
                          {[
                            "Warn reported user",
                            "Suspend reported user",
                            "Ban reported user"
                          ].map((action, aIndex) => (
                            <li key={aIndex}>
                              <button
                                className="dropdown-item"
                                onClick={() => handleActionSelect(i, action)}
                              >
                                {action}
                              </button>
                            </li>
                          ))}
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <button
                              className="dropdown-item text-danger"
                              onClick={() => handleActionSelect(i, "Dismiss")}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminComplaints;

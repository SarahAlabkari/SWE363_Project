import React, { useState } from 'react';
import MenuBar from '../components/MenuBar'; // Adjust the path based on your project structure
import UserManagementList from '../components/UserManagementList'; // Adjust the path
import '../App.css';
import AdminMenuBar from '../components/AdminMenuBar';


const UserManagementPage = () => {
  const [users, setUsers] = useState([
    {
      name: 'Lamees Alikhwan',
      email: 'lamees@example.com',
      username: 'lamees01',
      level: 'Admin',
      status: 'active',
      notifications: true,
    },
    {
      name: 'Aisha Salem',
      email: 'aisha@example.com',
      username: 'aisha_s',
      level: 'User',
      status: 'inactive',
      notifications: false,
    },
    {
      name: 'Noura AlZahrani',
      email: 'noura@example.com',
      username: 'noura22',
      level: 'User',
      status: 'active',
      notifications: true,
    },
  ]);

  const handleActivate = (user) => {
    setUsers((prev) =>
      prev.map((u) => (u.username === user.username ? { ...u, status: 'active' } : u))
    );
  };

  const handleDeactivate = (user) => {
    setUsers((prev) =>
      prev.map((u) => (u.username === user.username ? { ...u, status: 'inactive' } : u))
    );
  };

  const handleDelete = (user) => {
    setUsers((prev) => prev.filter((u) => u.username !== user.username));
  };

  return (
    <>
     <AdminMenuBar />
      <div className="container mt-5">
        <h2 className="mb-4">User Management</h2>
        <div className="d-flex justify-content-between mb-3">
          <select className="form-select w-25">
            <option>Filter By</option>
            <option>Tourist</option>
            <option>Activity Provider</option>
            <option>Tour Guide</option>
          </select>
          <input type="text" className="form-control w-25" placeholder="Search By Username" />
        </div>
        <UserManagementList
          users={users}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default UserManagementPage;

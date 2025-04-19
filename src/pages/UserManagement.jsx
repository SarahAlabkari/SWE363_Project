import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import UserManagementList from '../components/UserManagementList';
import '../App.css';
import AdminMenuBar from '../components/AdminMenuBar';

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'Lamees Alikhwan',
      email: 'lamees@example.com',
      username: 'lamees01',
      level: 'Activity Provider',
      status: 'active',
      notifications: true,
    },
    {
      name: 'Aisha Salem',
      email: 'aisha@example.com',
      username: 'aisha_s',
      level: 'Tourist',
      status: 'inactive',
      notifications: false,
    },
    {
      name: 'Noura AlZahrani',
      email: 'noura@example.com',
      username: 'noura22',
      level: 'Tour Guide',
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

  const filteredUsers = users.filter((user) => {
    const matchesUsername = user.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter ? user.level === levelFilter : true;
    return matchesUsername && matchesLevel;
  });

  return (
    <>
      <AdminMenuBar />
      <div className="container mt-5">
        <h2 className="mb-4">User Management</h2>
        <div className="d-flex justify-content-between mb-3">
          <select
            className="form-select w-25"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="">Filter By</option>
            <option value="Tourist">Tourist</option>
            <option value="Activity Provider">Activity Provider</option>
            <option value="Tour Guide">Tour Guide</option>
          </select>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search By Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <UserManagementList
          users={filteredUsers}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default UserManagementPage;

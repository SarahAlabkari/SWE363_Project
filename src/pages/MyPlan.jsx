import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axiosInstance';
import MyPlanTable from '../components/MyPlanTable';
import TouristMenuBar from '../components/TouristMenuBar';

const MyPlan = () => {
  const { id } = useParams(); // Get tourist ID from URL
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await axios.get(`/tourists/${id}/plan`);
        setActivities(res.data);
      } catch (err) {
        console.error('Failed to fetch plan:', err);
        setError('Something went wrong while fetching your plan.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

  return (
    <div>
      <TouristMenuBar />
      <div className="container mt-5 text-center">
        <h2>My Plan</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && <MyPlanTable activities={activities} />}
      </div>
    </div>
  );
};

export default MyPlan;

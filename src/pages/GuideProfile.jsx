import React from 'react';
import { useParams } from 'react-router-dom';

const GuideProfile = () => {
  const { guideName } = useParams();

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to {guideName.replace(/-/g, ' ’s ')} Profile!</h1>
      <p>This page can show full details about this tour guide.</p>
    </div>
  );
};

export default GuideProfile;
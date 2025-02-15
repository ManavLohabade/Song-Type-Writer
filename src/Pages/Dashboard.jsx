import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  ) : (
    <p>You need to log in first.</p>
  );
};

export default Dashboard;

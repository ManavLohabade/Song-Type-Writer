import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <h1>Song Type Writer</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
};

export default App;

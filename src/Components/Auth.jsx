import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const Auth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <Button variant="contained" color="error" onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Auth;

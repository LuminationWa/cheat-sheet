import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ setToken }) => {
  const [storedUser, setStoredUser] = useState(null);
  const [storedToken, setStoredToken] = useState(null);
  const location = useLocation(); //Set so component re-renders everytime the url changes. Logout bugs happened before this

  useEffect(() => {
    //Gets the token and user from local storage and assigns it to state
    const tempStoredToken = localStorage.getItem("token");
    const tempStoredUser = JSON.parse(localStorage.getItem("userInfo")); //Cause user is stored as a string in local storage
    //it needs to be converted back
    if (tempStoredToken) {
      setStoredToken(tempStoredToken);
      setStoredUser(tempStoredUser);
    }
  }, [location, setToken]);

  const handleLogout = () => {
    //Clears local storage and resets state
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setStoredUser(null);
    setStoredToken(null);
  };

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="navR-container">
        {storedToken ? (
          <>
            <h2>Welcome {storedUser.username}</h2>
            <Link to="/manage">Manage</Link>
            <a href="/" onClick={handleLogout}>
              Log out
            </a>
          </>
        ) : (
          <>
            <Link to="/sign-up">Sign up</Link>
            <Link to="/log-in">Log in</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

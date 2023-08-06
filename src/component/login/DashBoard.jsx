import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    setAuthenticated(loggedInUser === "true");

    if (authenticated) {
      // Delay the navigation to the home page after 1 second
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 1000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [authenticated, navigate]);

  if (!authenticated) {
    return <p>You are not authenticated. Please log in.</p>;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};

export default DashBoard;
import React, { useEffect, useState } from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (isAuth === "token") setIsAuth(true);
  });
  const handleLogin = () => {
    console.log("logging in...");
    localStorage.setItem("auth", "token");
    setIsAuth(true);
  };

  const handleLogOut = () => {
    console.log("logging out...");
    localStorage.removeItem("auth");
    setIsAuth(false);
  };

  return (
    <Card>
      <Component isAuth={isAuth} onLogin={handleLogin} onLogOut={handleLogOut} />
    </Card>
  );
};

export default withFunctions;

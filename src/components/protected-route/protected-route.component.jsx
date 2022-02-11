import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const currentUser = useSelector(selectCurrentUser);

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forget-password" ||
    location.pathname === "/reset-password"
  ) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? "/"} />
    ) : (
      children
    );
  }
  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
  // return currentUser ? children : <Navigate replace to="/login" />;
};

export default ProtectedRoute;

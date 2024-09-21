import React, { Children } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Analytics from "../pages/privatePages/Analytics";
import Home from "../pages/privatePages/Dashboard";
import LoginForm from "../pages/publicPages/Login";
import StartBoarding from "../pages/privatePages/Onboarding/startBoard";
import Campaign from "../pages/privatePages/Campaign";
import UserProfileForm from "../pages/privatePages/Onboarding/boardTwo";
import { useSelector } from "react-redux";

const MyRoutes = () => {
  const user = useSelector((state) => state?.currentUserSlice?.userInfo);

  const ProtectedRoutes = ({ children }) => {
    if (!user) {
      return <LoginForm />;
    }
    return children;
  };

  return (
    <Routes>
      <Route index path="/login" element={<LoginForm />} />
      <Route
        path="/"
        element={
          // <ProtectedRoutes>
            <Layout />
          // </ProtectedRoutes>
        }
      >
        {/* <Route path="/trips" element={<CreateTrip />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/boarding" element={<UserProfileForm />} />
        <Route path="/campaign" element={<Campaign />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;

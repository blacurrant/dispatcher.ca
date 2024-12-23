import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import Analytics from "../pages/privatePages/Analytics";
import Home from "../pages/privatePages/Dashboard";
import LoginForm from "../pages/publicPages/Login";
import StartBoarding from "../pages/privatePages/Onboarding/startBoard";
import Campaign from "../pages/privatePages/Campaign";
import UserProfileForm from "../pages/privatePages/Onboarding/boardTwo";
import { useSelector } from "react-redux";
import MyEvents from "../pages/privatePages/MyEvents";
import AddEvent from "../pages/privatePages/AddNewEvent";
import EventPage from "../pages/privatePages/MyEvents/EventDescription";
import AttendeeList from "../pages/privatePages/Analytics/DetailedAnalytics";
import MyProfile from "../pages/privatePages/Settings/MyProfile";

const MyRoutes = () => {
  const user = useSelector((state) => state?.currentUserSlice?.userInfo);

  // Route protection for private routes
  const ProtectedRoutes = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginForm />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/boarding" element={<UserProfileForm />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/events" element={<MyEvents />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/events/:eventName" element={<AddEvent />} />
        <Route path="/attendees" element={<AttendeeList />} />
        <Route path="/settings" element={<MyProfile />} />
      </Route>

      {/* Redirect to login if no matching route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default MyRoutes;

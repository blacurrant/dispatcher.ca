import React, { useEffect, useState } from "react";
import Timeline from "../../../components/Timeline";
import WelcomeBanner from "../../../components/WelcomeBanner";
import SponsoredEvents from "../../../components/SponsoredEvents";
import EventCard from "../../../components/EventCard";
import DrawerComponent from "../Onboarding";
import { useSelector } from "react-redux";
import OnboardingCompletionModal from "../Onboarding/BoardingModal";
import { createEventApi, getUserApi } from "../../../api/Api_collection";

const Home = () => {
  const [formDrawer, setFormDrawer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const completedOnboarding = useSelector(
    (state) => state?.currentUserSlice?.completedOnboarding
  );
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);
  console.log("userInfo====", userInfo);

  const handleClose = () => {
    setFormDrawer(false);
  };

  const fetchUserData = async () => {
    try {
      const res = await getUserApi();
      const user = Array.isArray(res)
        ? res.find((user) => user.email === userInfo?.email)
        : res.email === userInfo?.email
        ? res
        : null;
      if (user) {
        // setFormData(user);
        console.log(user, "formData");
        if (!user?.is_active) {
          setFormDrawer(true);
        }
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const createEvent = async () => {
    const user = {
      event_name: "Web Summit 2024",
      event_city: "Lisbon",
      event_country: "Portugal",
      event_website: "https://websummit.com/",
      event_desc:
        "Web Summit will bring together 70,000+ people, and the companies redefining the tech industry.",
      event_attendee_count_projection: 70000,
      event_attendee_count_data: 74599,
      event_start_date: "2024-11-11",
      event_end_date: "2024-11-14",
      is_active: true,
    };
    const response = await createEventApi(user);
    console.log(response, "response");
  };

  useEffect(() => {
    fetchUserData();
    createEvent();
  }, []);

  return (
    <div className="w-full max-h-[90vh] overflow-hidden flex bg-white">
      {/* {formDrawer && (
        <DrawerComponent
          handleClose={handleClose}
          open={formDrawer}
          setFormDrawer={setFormDrawer}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      )} */}
      {isModalVisible && (
        <OnboardingCompletionModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <div className="flex flex-col w-full h-full shadow-lg  p-2  ">
        <div className="flex w-full">
          <WelcomeBanner />
          <EventCard />
        </div>
        <div className="flex h-full">
          <SponsoredEvents />
        </div>
      </div>
      {/* <div className="w-1/3">
      </div> */}
    </div>
  );
};

export default Home;

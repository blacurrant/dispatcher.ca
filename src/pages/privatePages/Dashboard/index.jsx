import React, { useEffect, useState } from "react";
import Timeline from "../../../components/Timeline";
import WelcomeBanner from "../../../components/WelcomeBanner";
import SponsoredEvents from "../../../components/SponsoredEvents";
import EventCard from "../../../components/EventCard";
import DrawerComponent from "../Onboarding";
import { useSelector } from "react-redux";
import OnboardingCompletionModal from "../Onboarding/BoardingModal";
import { getUserApi } from "../../../api/Api_collection";

const Home = () => {
  const [formDrawer, setFormDrawer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const completedOnboarding = useSelector(
    (state) => state?.currentUserSlice?.completedOnboarding
  );
  const userInfo = useSelector(
    (state) => state?.currentUserSlice?.userInfo
  );
  console.log("userInfo====", userInfo);

  const handleClose = () => {
    setFormDrawer(false);
  };

  const fetchUserData = async() => {
    try {
      const response = await getUserApi();
      console.log("response", response);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    if (!completedOnboarding) {
      setFormDrawer(true);
      fetchUserData();
    }
  }, []);

  return (
    <div className="w-full max-h-[90vh] overflow-hidden flex bg-white">
      {formDrawer && (
        <DrawerComponent
          handleClose={handleClose}
          open={formDrawer}
          setFormDrawer={setFormDrawer}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />
      )}
      {isModalVisible && (
        <OnboardingCompletionModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <div className="flex flex-col w-full h-full shadow-lg  p-2  ">
        <div className="flex w-full gap-6">
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

import React, { useEffect, useState } from "react";
import Timeline from "../../../components/Timeline";
import WelcomeBanner from "../../../components/WelcomeBanner";
import SponsoredEvents from "../../../components/SponsoredEvents";
import EventCard from "../../../components/EventCard";
import DrawerComponent from "../Onboarding";
import { useSelector } from "react-redux";
import OnboardingCompletionModal from "../Onboarding/BoardingModal";

const Home = () => {
  const [formDrawer, setFormDrawer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const completedOnboarding = useSelector(
    (state) => state?.currentUserSlice?.completedOnboarding
  );
  console.log("completedOnboarding", completedOnboarding);

  const handleClose = () => {
    setFormDrawer(false);
  };

  useEffect(() => {
    if (!completedOnboarding) {
      setFormDrawer(true);
    }
  }, []);

  return (
    <div className="w-full max-h-[90vh] overflow-hidden flex">
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
      <div className="flex flex-col w-2/3 h-full shadow-lg bg-white p-2 gap-6 ">
        <WelcomeBanner />
        <div className="flex">
          <SponsoredEvents />
        </div>
      </div>
      <div className="w-1/3">
        <EventCard />
      </div>
    </div>
  );
};

export default Home;

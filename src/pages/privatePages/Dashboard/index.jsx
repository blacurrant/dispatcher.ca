import React from "react";
import Timeline from "../../../components/Timeline";
import WelcomeBanner from "../../../components/WelcomeBanner";
import SponsoredEvents from "../../../components/SponsoredEvents";
import EventCard from "../../../components/EventCard";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col w-2/3 h-full shadow-lg bg-white p-2 ">
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

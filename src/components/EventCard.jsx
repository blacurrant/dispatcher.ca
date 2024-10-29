import React from "react";
import { Button, Divider, Progress } from "antd";
import {
  PlusOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import web_summit from "../assets/web-summit.png";
import slush from "../assets/event/slush.webp";
const events = [
  {
    name: "Web Summit",
    logo: web_summit,
    location: "Lisbon, Portugal",
    date: "11th Nov 24",
    attendees: "70.2k",
    propScore: 60,
    divider: true,
  },
  {
    name: "Slush 24",
    logo: slush,
    location: "Helsinki, Finland",
    date: "20th Nov 24",
    attendees: "13.1k",
    propScore: 65,
  },
];

export default function EventCard() {

  const navigate = useNavigate();

  return (
    <div className="w-1/3 h-full mx-auto overflow-hidden ">
      <div className="p-6 space-y-6">
        <div className="bg-primary_light rounded-3xl p-4 space-y-4">

        <h2 className=" text-3xl font-light text-primary border-b border-primary">
          Popular Events
        </h2>

        <div className="space-y-4">
          {events.map((event, index) => (
            <>
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={event.logo}
                  alt={`${event.name} logo`}
                  className="w-10 h-10 rounded-full object-contain bg-white"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center">
                      <EnvironmentOutlined className="mr-1" />
                      {event.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CalendarOutlined className="mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <TeamOutlined className="mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                  <Progress
                    type="circle"
                    percent={event.propScore}
                    width={50}
                    strokeColor={"#723D9E"}

                  />
                  <span className="text-xs mt-1">Prop Score</span>
                </div> */}
              </div>
              {event?.divider && <Divider solid />}
            </>
          ))}
        </div>
        </div>



        {/* <div className="shadow-md space-y-2 flex flex-col items-center justify-center border border-primary border-opacity-25 rounded-3xl p-4">
          <p className="text-sm text-gray-600"># Events Sponsored in 2024</p>
          <p className="text-3xl font-bold text-primary">4</p>
        </div>

        <div className="shadow-md space-y-2 flex flex-col items-center justify-center border border-primary border-opacity-25 rounded-3xl p-4">
          <p className="text-sm text-gray-600">
            $$ Spent on Sponsorship in 2024
          </p>
          <p className="text-3xl font-bold text-primary">$48,000</p>
        </div> */}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Card, Typography, Progress, Divider } from "antd";
import {
  EnvironmentOutlined,
  TeamOutlined,
  TagOutlined,
  RightOutlined,
} from "@ant-design/icons";
import devsparks from "../assets/event/devsparks.png";
import eth from "../assets/event/eth.png";
import NasSummit from "../assets/event/NasSummit.jpg";

const { Title, Text } = Typography;

const events = [
  {
    id: 1,
    month: "Dec",
    day: "07",
    name: "DevCon 2024",
    duration: "3 Months",
    location: "San Francisco, USA",
    description:
      "DevCon brings together developers from around the world to explore the latest in software development.",
    attendees: "50,000+ Attendees",
    type: "Developer Conference",
    image: devsparks,
    propScore: 85,
  },
  {
    id: 2,
    month: "Nov",
    day: "11",
    name: "Web Summit 2024",
    duration: "2 Months",
    location: "Lisbon, Portugal",
    description:
      "Web Summit will bring together 70,000+ people, and the companies redefining the tech industry.",
    attendees: "70,000+ Attendees",
    type: "Tech Conference",
    image: eth,
    propScore: 92,
  },
  {
    id: 3,
    month: "Aug",
    day: "24",
    name: "SaasCon 2024",
    duration: "3 Days ago",
    location: "New York City, USA",
    description:
      "SaasCon is the premier event for SaaS founders, executives, and investors.",
    attendees: "30,000+ Attendees",
    type: "SaaS Conference",
    image: NasSummit,
    propScore: 78,
  },
];

export default function SponsoredEvents() {
  const [activeEvent, setActiveEvent] = useState(events[1]);

  return (
    <div className="w-full h-full mx-auto px-6">
      <div className="h-full flex gap-6">
        <div className="h-full w-2/5 flex flex-col items-start">
          <p className="mb-6 text-3xl font-light">Sponsored Events</p>
          <div className="w-full space-y-4">
            {events.map((event) => (
              <div
                onClick={() => setActiveEvent(event)}
                key={event.id}
                className={`relative w-full rounded-l-lg cursor-pointer ${
                  activeEvent.id === event.id
                    ? "bg-secondary relative shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                <div
                  className={`flex items-center rounded-l-lg p-4 pr-8 ${
                    activeEvent.id === event.id
                      ? "bg-secondary relative"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex-shrink-0 w-fit text-left">
                    <div className="text-primary text-sm font-medium">
                      {" "}
                      {event.month}
                    </div>
                    <div className="text-purple-800 text-3xl font-bold">
                      {event.day}
                    </div>
                  </div>
                  <div className="ml-4 w-full flex-grow">
                    <div className="text-gray-800 text-lg font-semibold">
                      {event.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {event.duration}
                    </div>
                  </div>
                </div>
                {activeEvent.id === event.id && (
                  <div className="absolute right-0 top-0 h-full w-6">
                    <div className="h-full w-full bg-secondary rounded-r-lg"></div>
                    <div
                      className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 
                        border-t-[12px] border-t-transparent 
                        border-b-[12px] border-b-transparent 
                        border-l-[16px] border-l-secondary"
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Card
          className="relative w-3/5 h-full shadow-sm shadow-primary"
          cover={
            <img
              alt={activeEvent.name}
              src={activeEvent.image}
              className="h-48 object-cover "
            />
          }
        >
          {/* <div
            className="absolute top-[20vh] left-0 bg-gradient-to-b from-transparent  to-white h-[5vh] z-10 w-full "
          ></div> */}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Title level={4}>{activeEvent.name}</Title>
              <div className="flex items-center text-gray-500 mb-2">
                <EnvironmentOutlined className="mr-1" />
                <Text>{activeEvent.location}</Text>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Text strong>Prop Score</Text>
              <Progress
                type="circle"
                percent={activeEvent.propScore}
                width={40}
                strokeColor={{
                  "0%": "#ECE6F0",
                  "100%": "#723D9E",
                }}
              />
            </div>
          </div>
          {/* <Divider /> */}
          <Text className="mb-4">{activeEvent.description}</Text>
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <TeamOutlined className="mr-1 text-primary" />
              <Text className="text-primary">{activeEvent.attendees}</Text>
            </div>
            <div className="flex items-center">
              <TagOutlined className="mr-1 text-primary" />
              <Text className="text-primary">{activeEvent.type}</Text>
            </div>
            <div className=" text-right">
              <Text className="text-primary cursor-pointer">
                View Details <RightOutlined />
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

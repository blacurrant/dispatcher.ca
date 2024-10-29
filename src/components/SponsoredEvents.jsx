import React, { useState } from "react";
import { Card, Typography, Progress, Divider, Button } from "antd";
import {
  EnvironmentOutlined,
  TeamOutlined,
  TagOutlined,
  RightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import eth from "../assets/event/eth.png";
import web_summit from "../assets/web-summit.png";
import { Nodata } from "../utils/Illustrations";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

// const events = [];

const events = [

  {
    id: 1,
    month: "Nov",
    day: "11",
    name: "Web Summit 2024",
    duration: "11 - 14 November 2024",
    location: "Lisbon, Portugal",
    description:
      "Web Summit will bring together 70,000+ people, and the companies redefining the tech industry.",
    attendees: "70,000+ Attendees",
    type: "Tech Conference",
    image: web_summit,
    propScore: 92,
  },

];

export default function SponsoredEvents() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  const navigate = useNavigate();

  return (
    <div className="w-full h-full mx-auto px-6 ">
      {events.length > 0 ? (
        <div className="h-full flex flex-col gap-4">
          {/* <div className="flex justify-between"> */}
          {/* <Button
              size="large"
              type="primary"
              icon={<PlusOutlined />}
              className="w-fit bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl"
              onClick={() => navigate("/addEvent")}
              >
              Add New Event
              </Button> */}
          {/* </div> */}
          <div className="flex h-full gap-4 ">
            <div className="h-full w-2/6 flex flex-col gap-6   p-2 rounded-2xl">
            <p className=" text-3xl font-light text-primary border-b border-primary">
              Sponsored Events
            </p>
              <div className="w-full space-y-2">
                {events.map((event) => (
                  <div
                    onClick={() => setActiveEvent(event)}
                    key={event.id}
                    className={`relative w-full rounded-l-lg cursor-pointer ${
                      activeEvent.id === event.id
                        ? "bg-secondary  relative shadow-md"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`flex items-center rounded-l-lg px-4 py-2 pr-8 ${
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
            <div className="relative w-4/6 h-full pb-8">

            <div className="relative h-full border p-2 border-primary bg-primary_light shadow-md  rounded-2xl flex ">
              <img
                alt={activeEvent.name}
                src={activeEvent.image}
                className="w-1/2 object-contain rounded-2xl bg-white"
              />
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-4">
                    <div className="flex flex-col">
                      <Title level={4}>{activeEvent.name}</Title>
                      <div className="flex items-center text-gray-500">
                        <EnvironmentOutlined className="mr-1" />
                        <Text>{activeEvent.location}</Text>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-center">
                      <Text strong>Prep Score</Text>
                      <Progress
                        type="circle"
                        percent={activeEvent.propScore}
                        width={40}
                        strokeColor={{ "0%": "#ECE6F0", "100%": "#723D9E" }}
                      />
                    </div> */}
                  </div>
                  <p className="mb-4">{activeEvent.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <TeamOutlined className="mr-1 text-primary" />
                    <Text className="text-sm text-primary">
                      {activeEvent.attendees}
                    </Text>
                  </div>
                  <div onClick={() => navigate("/analytics")} className="text-right">
                    <Text className="text-primary cursor-pointer">
                      View Analytics <RightOutlined />
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col gap-4  bg-hover rounded-3xl p-4">
          <p className="w-full mb-6 text-3xl font-light text-primary border-b border-primary">
            Sponsored Events
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Nodata />
            {/* <p className="text-lg font-light">No events Sponsored yet.</p> */}
            <p className="text-4xl   font-light  text-primary  flex items-center gap-8">
              Add your First Event!
            </p>
          </div>
          <div className="w-full h-full absolute top-0 right-0 bg-transparent flex items-center justify-center">
            <Button
              onClick={() => navigate("addEvent")}
              className="mt-8 ml-8  text-3xl p-2 hover:!border-primary hover:!text-primary font-light border bg-primary text-hover border-primary rounded-full hover:!bg-transparent"
            >
              +
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

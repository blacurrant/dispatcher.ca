import React from "react";
import { Button, Divider, Progress } from "antd";
import {
  PlusOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const events = [
  {
    name: "Web Summit",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Lisbon, Portugal",
    date: "11th Nov 24",
    attendees: "25.5k",
    propScore: 60,
    divider: true,
  },
  {
    name: "DevCon 24",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Bangkok, Thailand",
    date: "9th Nov 24",
    attendees: "33.5k",
    propScore: 65,
  },
];

export default function EventCard() {
  return (
    <div className="w-full h-full mx-auto bg-white overflow-hidden">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-normal font-lora text-gray-800">
          Prepare for Events
        </h2>

        <div className="space-y-4">
          {events.map((event, index) => (
            <>
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={event.logo}
                  alt={`${event.name} logo`}
                  className="w-10 h-10 rounded"
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
                <div className="flex flex-col items-center">
                  <Progress
                    type="circle"
                    percent={event.propScore}
                    width={50}
                  />
                  <span className="text-xs mt-1">Prop Score</span>
                </div>
              </div>
              {event?.divider && <Divider solid />}
            </>
          ))}
        </div>

        <Button
          size="large"
          type="primary"
          icon={<PlusOutlined />}
          className="w-full bg-primary hover:bg-purple-700 border-none rounded-2xl"
        >
          Add New Event
        </Button>

        <div className="space-y-2 flex flex-col items-center justify-center border border-primary border-opacity-25 rounded-3xl p-4">
          <p className="text-sm text-gray-600"># Events Sponsored in 2024</p>
          <p className="text-3xl font-bold text-gray-800">4</p>
        </div>

        <div className="space-y-2 flex flex-col items-center justify-center border border-primary border-opacity-25 rounded-3xl p-4">
          <p className="text-sm text-gray-600">
            $$ Spent on Sponsorship in 2024
          </p>
          <p className="text-3xl font-bold text-primary">$48,000</p>
        </div>
      </div>
    </div>
  );
}

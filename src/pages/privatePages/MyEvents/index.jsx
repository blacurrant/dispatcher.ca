import React, { useState } from "react";
import { Tabs, Select, Card, Button, Divider } from "antd";
import {
  RightOutlined,
  CalendarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EmptyEvents } from "../../../utils/Illustrations";
import { setNewEventSlice } from "../../../store/slices/newEventSlice";
import moment from "moment";

const { TabPane } = Tabs;
const { Option } = Select;

export default function MyEvents() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const navigate = useNavigate();
  const events = useSelector((state) => state?.newEventSlice?.data);
  const dispatch = useDispatch();

  console.log(events, "events");

  const renderTrip = (event, index) => (
    <div key={event.id} className="w-full p-4 h-[200px]">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="md:w-1/4 flex items-center justify-evenly md:mb-0">
          <div className="text-center flex gap-4 items-center justify-center">
            <div>
              <div className="text-4xl font-bold text-gray-700">
                {moment(event?.eventDate).format("DD")}
              </div>
              <div className="text-xl text-gray-500">
                {moment(event?.eventDate).format("MMMM").slice(0, 3)}
              </div>
            </div>
            {/* <p className="text-gray-500 text-sm text-left w-1/2 ">
              <CalendarOutlined className="mr-2" />
              {event.dateRange}
            </p> */}
          </div>
          <Divider
            type="vertical"
            solid
            className="border-2 h-16 text-center border-primary border-opacity-25 rounded-full"
          />
        </div>
        <div className="md:w-3/4 flex flex-col md:flex-row gap-4">
          <img
            src="/"
            alt="event name"
            className="w-1/3 h-full object-cover rounded-lg border border-primary"
          />
          <div className="md:w-2/3 pr-4 flex flex-col gap-2 justify-center">
            <h3 className="text-xl font-semibold ">{event.eventName}</h3>
            <p className="text-gray-500 ">
              <CalendarOutlined className="mr-2" />
              Fri, 11 Jan 2024 - Sat, 15 Jan 2024
            </p>
            {/* <h4 className="text-lg font-semibold ">{event.hotelName}</h4> */}
            <p className="text-gray-600 ">
              Web Summit will bring together 70,000+ people, and the companies
              redefining the tech industry.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3 md:mt-0 items-center justify-center">
            <Button
              type="default"
              className=" w-full flex items-center justify-center rounded-xl bg-primary text-white hover:!bg-hover hover:!text-primary hover:!border-primary border"
              icon={<RightOutlined />}
              onClick={() => navigate("/analytics")}
            >
              Analytics
            </Button>
            <Button
              type="default"
              className=" w-full flex items-center justify-center rounded-xl bg-primary text-white hover:!bg-hover hover:!text-primary hover:!border-primary border"
              icon={<RightOutlined />}
              onClick={() =>
                navigate(`/events/${event.eventName}`, { state: event })
              }
            >
              Edit Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-h-[90vh] mx-auto p-6 bg-purple-50 overflow-auto">
      <div className="w-full flex justify-between items-center pb-6">
        <h1 className="text-3xl font-light">My Events</h1>
        <Button
          size="large"
          type="primary"
          icon={<PlusOutlined />}
          className="w-fit bg-primary hover:!bg-hover hover:!text-primary hover:!border-primary border rounded-2xl px-12"
          onClick={() => navigate("/addEvent")}
        >
          Add New Event
        </Button>{" "}
      </div>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className="custom-tabs h-full"
      >
        <TabPane
          className="h-full bg-white rounded-xl flex flex-col gap-5"
          tab="Upcoming Events"
          key="upcoming"
        >
          {Object.values(events).length > 0 ? (
            Object.values(events)?.map(renderTrip)
          ) : (
            <div className="flex w-full h-full items-center justify-center flex-col">
              <EmptyEvents />
              <p className="text-lg font-light ">No Sponsored Events found!</p>
            </div>
          )}
        </TabPane>
        <TabPane className="flex flex-col gap-5" tab="Past Events" key="past">
          {Object.values(events)?.map(renderTrip)}
        </TabPane>
      </Tabs>
    </div>
  );
}

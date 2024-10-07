import React from "react";
import { Form, Input, DatePicker, InputNumber, Image } from "antd";
import { EventIllustration } from "../../../utils/Illustrations";

export default function EventOverviewForm({ formData, onInputChange }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-xl flex">
      <div className="w-1/2 flex flex-col ">
        <h2 className="text-2xl font-light font-lora my-6 border-b border-purple-90">
          Event Overview
        </h2>
        {/* <Form
          form={form}
          name="eventOverview"
          onFinish={onFinish}
          layout="vertical"
        > */}
          <div className="grid grid-cols-1 w-full ">
            <div className="w-full  px-2 ">
              <Form.Item
                name="eventName"
                label="Event Name"
                rules={[
                  { required: true, message: "Please input the event name!" },
                ]}
              >
                <Input
                  placeholder="Event Name"
                  className="w-full !rounded-2xl h-[48px]"
                  value={formData.eventName}
                  onChange={(e) => onInputChange("eventName", e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="w-full  px-2 ">
              <Form.Item
                name="eventDate"
                label="Event Date"
                rules={[
                  { required: true, message: "Please select the event date!" },
                ]}
              >
                <DatePicker
                  value={formData.eventDate}
                  onChange={(date, dateString) => onInputChange("eventDate", dateString)}
                  className="w-full !rounded-2xl h-[48px]"
                />
              </Form.Item>
            </div>
            <div className="w-full  px-2 ">
              <Form.Item
                name="eventPageUrl"
                label="Event Page URL"
                rules={[
                  {
                    required: true,
                    message: "Please input the event page URL!",
                  },
                ]}
              >
                <Input
                  placeholder="Event URL"
                  className="w-full !rounded-2xl h-[48px]"
                  value={formData.eventUrl}
                  onChange={(e) => onInputChange("eventUrl", e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="w-full  px-2 ">
              <Form.Item
                name="employeesAttending"
                label="Total Employees Attending"
                rules={[
                  {
                    required: true,
                    message: "Please input the number of employees attending!",
                  },
                ]}
              >
                <Input
                type="number"
                  placeholder="Attending employees"
                  className="w-full !rounded-2xl h-[48px]"
                  value={formData.attendingEmployees}
                  onChange={(e) =>
                    onInputChange("attendingEmployees", e.target.value)
                  } 
                />
              </Form.Item>
            </div>
          </div>
        {/* </Form> */}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <EventIllustration />
      </div>
    </div>
  );
}

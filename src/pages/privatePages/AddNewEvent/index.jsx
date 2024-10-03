import React, { useState } from "react";
import EventOverviewForm from "./EventOverview";
import TargetAudienceForm from "./TargetAudience";
import BudgetSponsorshipForm from "./BudgetSponsorship";
import EventDetailsForm from "./UploadContent";
import CompanyGoals from "./CompanyGoals";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";

const AddEvent = () => {
  const [eventFormData, setEventFormData] = useState({
    attendeeRoles: "",
    demographicSpecs: "",
    engagementTactics: "",
    targetSegments: "",
    eventName: "",
    eventUrl: "",
    eventDate: "",
    attendingEmployees: "",

    // Add fields for other sections like EventOverviewForm, CompanyGoals, etc.
  });

  const handleInputChange = (key, value) => {
    setEventFormData((prevData) => ({
      ...prevData,
      [key]: value, // Dynamically update the field
    }));
  };

  const handleCreate = () => {
    console.log("Form data:", eventFormData);
    setEventFormData({
      attendeeRoles: "",
      demographicSpecs: "",
      engagementTactics: "",
      targetSegments: "",
      eventName: "",
      eventUrl: "",
      eventDate: "",
      attendingEmployees: "",
    });    
  }

  const { TextArea } = Input;

  const purpleTheme = {
    token: {
      colorPrimary: "#800080",
      colorLink: "#800080",
      colorLinkHover: "#a020f0",
      borderRadius: 16,
    },
  };

  const textAreaStyle = {
    borderRadius: "16px",
  };

  return (
    <div className="w-full max-h-[90vh] flex flex-col p-2 overflow-auto bg-purple-50  ">
      <p className="text-3xl font-light p-6">Add New Event</p>
      <div className="rounded-xl bg-white shadow-lg flex flex-col gap-12 p-6">
        <ConfigProvider theme={purpleTheme}>
          <EventOverviewForm
            formData={eventFormData}
            onInputChange={handleInputChange}
          />
          <div className=" flex flex-col gap-6 ">
            <div>
              <p className="w-full text-2xl font-light font-lora border-b border-primary border-opacity-20">
                Target Audience at the Event
              </p>
              <p className="text-gray-500 text-sm font-light">
                (Please provide as many details as possible to help us assist
                you more effectively.)
              </p>
            </div>

            <Form layout="vertical grid grid-cols-2 gap-6">
              <Form.Item
                label="List all attendees roles you want to target at the event"
                extra="e.g., developers, startups, investors, marketing professionals"
              >
                <TextArea
                  value={eventFormData.attendeeRoles}
                  onChange={(e) =>
                    handleInputChange("attendeeRoles", e.target.value)
                  }
                  rows={2}
                  style={textAreaStyle}
                />
              </Form.Item>

              <Form.Item
                label="List all demographic specifications of your target attendees"
                extra="e.g., age, profession, location, company size"
              >
                <TextArea
                  value={eventFormData.demographicSpecs}
                  onChange={(e) =>
                    handleInputChange("demographicSpecs", e.target.value)
                  }
                  rows={2}
                  style={textAreaStyle}
                />
              </Form.Item>

              <Form.Item
                label="List all engagement tactics you plan to use at the event"
                extra="e.g., networking sessions, one-on-one meetings, workshops"
              >
                <TextArea
                  value={eventFormData.engagementTactics}
                  onChange={(e) =>
                    handleInputChange("engagementTactics", e.target.value)
                  }
                  rows={2}
                  style={textAreaStyle}
                />
              </Form.Item>

              <Form.Item
                label="List all segments you want to target at the event"
                extra="e.g., top leads, potential partners, decision-makers, fundraising connections"
              >
                <TextArea
                  value={eventFormData.targetSegments}
                  onChange={(e) =>
                    handleInputChange("targetSegments", e.target.value)
                  }
                  rows={2}
                  style={textAreaStyle}
                />
              </Form.Item>
            </Form>
          </div>
          <CompanyGoals
            formData={eventFormData}
            onInputChange={handleInputChange}
          />
          <BudgetSponsorshipForm
            formData={eventFormData}
            onInputChange={handleInputChange}
          />
          <EventDetailsForm
            formData={eventFormData}
            onInputChange={handleInputChange}
          />
          <Button className="w-full h-[48px] bg-primary text-white hover:!bg-hover hover:border hover:!border-primary hover:!text-primary" onClick={handleCreate}>
            Create
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default AddEvent;

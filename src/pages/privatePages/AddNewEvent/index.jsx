import React, { useState, useEffect } from "react";
import BudgetSponsorshipForm from "./BudgetSponsorship";
import EventDetailsForm from "./UploadContent";
import CompanyGoals from "./CompanyGoals";
import moment from "moment";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNewEventSlice } from "../../../store/slices/newEventSlice";
import { useLocation } from "react-router-dom";
import { EventIllustration } from "../../../utils/Illustrations";

const AddEvent = () => {
  const [form] = Form.useForm(); // Use Ant Design form instance
  const location = useLocation();
  const eventDetails = useSelector((state) => state?.newEventSlice?.data);

  console.log(eventDetails, "ddasdas");
  console.log(location?.state?.eventName, "location");

  const initialValues = {
    attendeeRoles: "",
    demographicSpecs: "",
    engagementTactics: "",
    targetSegments: "",
    eventName: location?.state?.eventName || "",
    eventUrl: "",
    eventDate: "",
    attendingEmployees: "",
    selectedBusiness: [],
    kpi: "",
    brandStrategies: "",
    eventBudget: "",
    sponsorLevel: "",
    budgetAllocations: [],
  };

  const dispatch = useDispatch();
  const [eventFormData, setEventFormData] = useState(initialValues);

  // Sync the form with the state (eventFormData) when the component mounts or state changes
  useEffect(() => {
    form.setFieldsValue(eventFormData); // Set form fields when eventFormData changes
  }, [eventFormData, form]);

  const handleInputChange = (key, value) => {
    setEventFormData((prevData) => ({
      ...prevData,
      [key]: value, // Dynamically update the field
    }));
  };

  const handleCreate = () => {
    const eventDataToSend = {
      [eventFormData?.eventName]: {
        ...eventFormData, // Send all form data
      },
    };

    console.log("Form data to send:", eventDataToSend);
    dispatch(setNewEventSlice(eventDataToSend));

    // Reset the form data
    setEventFormData(initialValues); // Reset with initial values
    form.resetFields(); // Reset the form fields
  };

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
      <p className="text-3xl font-light p-6">
        {location?.state ? `Edit Event ` : "Add New Event"}
      </p>
      <div className="rounded-xl bg-white shadow-lg flex flex-col gap-12 p-6">
        <ConfigProvider theme={purpleTheme}>
          <Form
            form={form} // Associate the form instance
            initialValues={initialValues} // Use initialValues in Ant Design form
            layout="vertical"
          >
            {/* <EventOverviewForm
              formData={eventFormData}
              onInputChange={handleInputChange}
            /> */}
            <div className="w-full mx-auto bg-white rounded-xl flex">
              <div className="w-1/2 flex flex-col ">
                <h2 className="text-2xl font-light font-lora my-6 border-b border-purple-90">
                  Event Overview
                </h2>

                <div className="grid grid-cols-1 w-full ">
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="eventName"
                      label="Event Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input the event name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Event Name"
                        className="w-full !rounded-2xl h-[48px]"
                        value={eventFormData.eventName}
                        onChange={(e) =>
                          handleInputChange("eventName", e.target.value)
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="eventDate"
                      label="Event Date"
                      rules={[
                        {
                          required: true,
                          message: "Please select the event date!",
                        },
                      ]}
                    >
                      <DatePicker
                        value={eventFormData.eventDate}
                        onChange={(date, dateString) =>
                          handleInputChange("eventDate", dateString)
                        }
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
                        value={eventFormData.eventUrl}
                        onChange={(e) =>
                          handleInputChange("eventUrl", e.target.value)
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="employeesAttending"
                      label="# Employees Attending"
                      rules={[
                        {
                          required: true,
                          message:
                            "Please input the number of employees attending!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Attending employees"
                        className="w-full !rounded-2xl h-[48px]"
                        value={eventFormData.attendingEmployees}
                        onChange={(e) =>
                          handleInputChange(
                            "attendingEmployees",
                            e.target.value
                          )
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <EventIllustration />
              </div>
            </div>
            <div className="flex flex-col gap-6">
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
              setEventFormData={setEventFormData}
            />
            <BudgetSponsorshipForm
              formData={eventFormData}
              onInputChange={handleInputChange}
            />
            <EventDetailsForm
              formData={eventFormData}
              onInputChange={handleInputChange}
            />
            <Button
              className="w-full h-[48px] bg-primary text-white hover:!bg-hover hover:border hover:!border-primary hover:!text-primary"
              onClick={handleCreate}
            >
              {location?.state ? "Save" : "Create"}
            </Button>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default AddEvent;

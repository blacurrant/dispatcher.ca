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
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNewEventSlice } from "../../../store/slices/newEventSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { EventIllustration } from "../../../utils/Illustrations";
import { FaArrowLeft } from "react-icons/fa";

const AddEvent = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const eventDetails = useSelector((state) => state?.newEventSlice?.data);
  const navigate = useNavigate();

  console.log(eventDetails, "ddasdas");
  console.log(location?.state?.event_name, "location");

  const initialValues = {
    target_roles: location?.state?.target_roles ?? "",
    target_demographics: location?.state?.target_demographics ?? "",
    target_engagement_tactics: location?.state?.target_engagement_tactics ?? "",
    target_segment_type: location?.state?.target_segment_type ?? "",
    event_name: location?.state?.event_name ?? "",
    event_url: location?.state?.event_url ?? "",
    event_date: location?.state?.event_date ? moment(location.state.event_date) : null,
    event_employee_count: location?.state?.event_employee_count ?? "",
    company_goals: location?.state?.company_goals ?? [],
    list_of_KPIs: location?.state?.list_of_KPIs ?? "",
    list_of_branding_strategies: location?.state?.list_of_branding_strategies ?? "",
    event_budget: location?.state?.event_budget ?? "",
    event_sponsership_level: location?.state?.event_sponsership_level ?? "",
    budgetAllocations: location?.state?.budgetAllocations ?? [],
  };

  const dispatch = useDispatch();
  const [eventFormData, setEventFormData] = useState(initialValues);

  useEffect(() => {
    form.setFieldsValue(eventFormData);
  }, [eventFormData, form]);

  const handleInputChange = (key, value) => {
    setEventFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCreate = () => {
    const eventDataToSend = {
      [eventFormData?.event_name]: {
        ...eventFormData,
      },
    };

    console.log("Form data to send:", eventDataToSend);
    dispatch(setNewEventSlice(eventDataToSend));
    navigate("/events");

    setEventFormData(initialValues);
    form.resetFields();
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
      <div onClick={() => navigate("/events")} className="w-fit flex gap-2 p-2 items-center cursor-pointer  hover:underline">
        <FaArrowLeft />
        <p className="font-normal text-xl">back to events</p>
      </div>
      <p className="text-3xl font-light p-6">
        {location?.state ? `Edit Event ` : "Add New Event"}
      </p>
      <div className="rounded-xl bg-white shadow-lg flex flex-col gap-12 p-6">
        <ConfigProvider theme={purpleTheme}>
          <Form
            form={form}
            initialValues={initialValues}
            layout="vertical"
          >
            <div className="w-full mx-auto bg-white rounded-xl flex">
              <div className="w-1/2 flex flex-col ">
                <h2 className="text-2xl font-light font-lora my-6 border-b border-purple-90">
                  Event Overview
                </h2>

                <div className="grid grid-cols-1 w-full ">
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="event_name"
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
                        value={eventFormData.event_name}
                        onChange={(e) =>
                          handleInputChange("event_name", e.target.value)
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="event_date"
                      label="Event Date"
                      rules={[
                        {
                          required: true,
                          message: "Please select the event date!",
                        },
                      ]}
                    >
                      <DatePicker
                        value={eventFormData.event_date}
                        onChange={(date, dateString) => {
                          console.log(moment(dateString).locale("es"), "sdsds");
                          console.log(moment(dateString), "without sdsds");

                          handleInputChange(
                            "event_date",
                            moment(dateString)
                          );
                        }}
                        className="w-full !rounded-2xl h-[48px]"
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="event_url"
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
                        value={eventFormData.event_url}
                        onChange={(e) =>
                          handleInputChange("event_url", e.target.value)
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full  px-2 ">
                    <Form.Item
                      name="event_employee_count"
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
                        value={eventFormData.event_employee_count}
                        onChange={(e) =>
                          handleInputChange(
                            "event_employee_count",
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
                    value={eventFormData.target_roles}
                    onChange={(e) =>
                      handleInputChange("target_roles", e.target.value)
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
                    value={eventFormData.target_demographics}
                    onChange={(e) =>
                      handleInputChange("target_demographics", e.target.value)
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
                    value={eventFormData.target_engagement_tactics}
                    onChange={(e) =>
                      handleInputChange("target_engagement_tactics", e.target.value)
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
                    value={eventFormData.target_segment_type}
                    onChange={(e) =>
                      handleInputChange("target_segment_type", e.target.value)
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

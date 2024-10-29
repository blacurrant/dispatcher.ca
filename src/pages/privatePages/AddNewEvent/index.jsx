import React, { useState, useEffect } from "react";
import BudgetSponsorshipForm from "./BudgetSponsorship";
import EventDetailsForm from "./UploadContent";
import CompanyGoals from "./CompanyGoals";
import { Breadcrumb, Button, ConfigProvider, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNewEventSlice } from "../../../store/slices/newEventSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { EventIllustration } from "../../../utils/Illustrations";
import { FaArrowLeft } from "react-icons/fa";
import { createCampaignApi, updateCampaignApi } from "../../../api/Api_collection";

const initialValues = {
  target_roles: location?.state?.target_roles ?? "",
  target_demographics: location?.state?.target_demographics ?? "",
  target_engagement_tactics: location?.state?.target_engagement_tactics ?? "",
  target_segment_type: location?.state?.target_segment_type ?? "",
  company_goals: location?.state?.company_goals ?? "",
  list_of_KPIs: location?.state?.list_of_KPIs ?? "",
  list_of_branding_strategies:
    location?.state?.list_of_branding_strategies ?? "",
  event_budget: location?.state?.event_budget ?? "",
  event_sponsership_level: location?.state?.event_sponsership_level ?? "",
  average_customer_value: location?.state?.average_customer_value ?? "",
  average_ticket_size: location?.state?.average_ticket_size ?? "",
  booth_setup_budget: location?.state?.booth_setup_budget ?? "",
  travel_budget: location?.state?.travel_budget ?? "",
  sponsership_budget: location?.state?.sponsership_budget ?? "",
  promotional_budget: location?.state?.promotional_budget ?? "",
  misc_budget: location?.state?.misc_budget ?? "",
  post_event_metrics_expectation:
    location?.state?.post_event_metrics_expectation ?? "",
  post_event_followup_plan: location?.state?.post_event_followup_plan ?? "",
  unique_event_factors: location?.state?.unique_event_factors ?? "",
  event_attendee_list_url: location?.state?.event_attendee_list_url ?? "",
  event_look_like_audience_url:
    location?.state?.event_look_like_audience_url ?? "",
  additional_info: location?.state?.additional_info ?? "",
};

const AddEvent = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eventFormData, setEventFormData] = useState(initialValues);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isGoalPresent = useSelector((state) => state.newEventSlice);

  console.log(isGoalPresent, "location");

  const createCampaign = async (data) => {
    try {
      const response = await createCampaignApi(data);
      console.log(response, "response");
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  const updateCampaign = async (data) => {
    try {
      const response = await updateCampaignApi(data);
      console.log(response, "response");
    } catch (error) {
      console.error("Error updating campaign:", error);
    }
  };

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
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    const eventDataToSend = {
      ...eventFormData,
      event_name: "Web Summit 2024",
      event_date: "2024-11-11",
      event_url: "https://websummit.com/",
      event_employee_count: 70000,
      is_active: true,
      user_id: 1,
      event_id: 1,
    };

    createCampaign(eventDataToSend);
    console.log("Form data to send:", eventDataToSend);
    dispatch(setNewEventSlice(eventDataToSend));
    navigate("/events");
    setEventFormData(initialValues);
    form.resetFields();
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
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
      <Breadcrumb
        className="!text-black px-6 cursor-pointer"
        items={[
          {
            title: "My Events",
            href: "/events",
          },
          {
            title: location?.state?.eventName,
          },
        ]}
      />
      <p className="text-3xl font-light p-6">
        {location?.state ? `Edit Event ` : "Add New Event"}
      </p>
      <div className="rounded-xl bg-white shadow-lg flex flex-col gap-12 p-6">
        <ConfigProvider theme={purpleTheme}>
          <Form form={form} initialValues={initialValues} layout="vertical">
            <div className="w-full mx-auto bg-white rounded-xl flex">
              <div className="w-1/2 flex flex-col gap-6">
                <div>
                  <p className="w-full text-2xl font-light font-lora border-b border-primary border-opacity-20">
                    Target Audience at the Event
                  </p>
                  <p className="text-gray-500 text-sm font-light">
                    (Please provide as many details as possible to help us
                    assist you more effectively.)
                  </p>
                </div>

                <Form layout="vertical grid grid-cols-1 gap-6">
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
                        handleInputChange(
                          "target_engagement_tactics",
                          e.target.value
                        )
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
              <div className="w-1/2 flex items-center justify-center">
                <EventIllustration />
              </div>
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
      <Modal
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        footer={null}
        centered
        width={400}
        className="custom-modal"
      >
        <div className="flex flex-col items-center p-6">
          <div className="text-4xl mb-4">{location?.state ? "🎯" : "🎉"}</div>
          <h2 className="text-2xl font-semibold mb-4">
            {location?.state ? "Update Goals" : "Create Event"}
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            {location?.state
              ? "Are you sure you want to update the goals? It will reset the time back to 24 hours."
              : "We'll take 24 hours to process your event creation request. We'll get back to you soon."}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleModalCancel}
              className="w-32 h-10 !rounded-full border-gray-300 !bg-primary_light hover:!border-primary hover:!text-primary"
            >
              Cancel
            </Button>
            <Button
              onClick={handleModalOk}
              type="primary"
              className="w-32 h-10 !rounded-full !bg-primary hover:!bg-hover"
            >
              {location?.state ? "Update" : "Create"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddEvent;

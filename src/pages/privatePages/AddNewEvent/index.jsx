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
  user_id: 1,
  event_id: 1,
  event_name: "Web Summit 2024",
  event_date: "2024-11-11",
  event_url: "https://websummit.com/",
  event_employee_count: 5,
  target_roles: "Vendor manager, Head of Operations, Head of CX",
  target_demographics: "Ideally based in Europe or LATAM, responsible for making decisions about Customer Service implementation and design. Companies that have a multi lingual requirement and that have a high volume of customer requests. For example: Tech companies, online retailers, wearable med tech devices, insurance companies, banks.",
  target_engagement_tactics: "We have a master class, we have a booth, we have a surprise activation in the booth, we have a cocktail party aimed at digital customer service professionals and we also have a micro-retreat (personal development) event for female leaders. We will also aim to have as many one on one meetings as we can",
  target_segment_type: "Tech manufacturers, Retailers, consumer baking and well established embedded finance, travel and hospitality (hotels, tour operators, airlines, airports), consumer services (streaming services, car rentals, major food delivery services)",
  company_goals: "Lead Generation, Brand Awareness",
  list_of_KPIs: "ROI, but given the size of our business deals, 1 single client signed could make the entire operation worth it, Pipeline Creation",
  list_of_branding_strategies: "Digital give away, master class, cocktail party, demos",
  event_budget: 600000,
  event_sponsership_level: "Partner",
  average_customer_value: 5000000,
  average_ticket_size: 100000,
  booth_setup_budget: 100000,
  travel_budget: 100000,
  sponsership_budget: 200000,
  promotional_budget: 100000,
  misc_budget: 100000,
  post_event_metrics_expectation: "Pipeline Creation, Lead generation, engagement, follow up open rate, number of meetings.",
  post_event_followup_plan: "Email follow-ups, Newsletters",
  unique_event_factors: "Attending Web Summit by Head of CX, Head of Customer Service, Head of Customer Operations, head of vendor management, Procurement",
  event_attendee_list_url: null,
  event_look_like_audience_url: null,
  additional_info: null,
  is_active: true
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

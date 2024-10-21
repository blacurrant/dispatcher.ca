import React, { useState } from "react";
import { UploadIcon } from "lucide-react";
import { Form, Input } from 'antd';

const { TextArea } = Input;

export default function EventDetailsForm({ formData, onInputChange }) {
  const [fileStatus, setFileStatus] = useState({
    event_attendee_list_url: null,
    event_look_like_audience_url: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    onInputChange(name, value);
  };

  const handleFileChange = (name, event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Only PDF, JPEG, and PNG files are allowed!",
        }));
        setFileStatus((prevStatus) => ({
          ...prevStatus,
          [name]: null,
        }));
        return;
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));

      onInputChange(name, file);
      setFileStatus((prevStatus) => ({
        ...prevStatus,
        [name]: file.name,
      }));
    }
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg">
      <h1 className="text-2xl font-light font-lora border-b border-primary border-opacity-20 mb-6">
        Attendee Data and Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post-Event Metrics */}
        <Form.Item
          name="post_event_metrics_expectation"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                List all post-event metrics you expect to collect during the event
              </span>
              <span className="text-xs text-gray-500 mb-2">
                (e.g., lead conversion, booth traffic, social media engagement)
              </span>
            </div>
          }
        >
          <TextArea
            className="w-full px-3 text-gray-700 border !rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.post_event_metrics_expectation || ""}
            onChange={(e) => handleInputChange("post_event_metrics_expectation", e.target.value)}
          />
        </Form.Item>

        {/* Event Attendee List */}
        <Form.Item
          name="event_attendee_list_url"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Event Attendee list / previous data (if any)
              </span>
              <span className="text-xs text-gray-500 mb-2">
                Share an attendee list, pre-event attendee data, and/or data from previous years.
              </span>
            </div>
          }
        >
          <div className="relative h-12 flex items-center justify-center border border-gray-300 border-dashed !rounded-2xl">
            <input
              type="file"
              id="event-attendee-list"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("event_attendee_list_url", e)}
            />
            <div className="flex h-full gap-4 items-center text-center ">
              <UploadIcon className="mx-auto h-6 w-12 text-gray-400" />
              {/* <p className="mt-1 text-sm text-gray-600">Upload</p> */}
            </div>
          </div>
          {fileStatus.event_attendee_list_url && (
            <p className="text-xs text-green-500 mt-1">
              Uploaded: {fileStatus.event_attendee_list_url}
            </p>
          )}
          {errors.event_attendee_list_url && (
            <p className="text-xs text-red-500 mt-1">{errors.event_attendee_list_url}</p>
          )}
        </Form.Item>

        {/* Post-Event Follow-Up Plans */}
        <Form.Item
          name="post_event_followup_plan"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                List all post-event follow-up plans
              </span>
              <span className="text-xs text-gray-500 mb-2">
                (e.g., email campaigns, lead nurturing, sales outreach)
              </span>
            </div>
          }
        >
          <TextArea
            className="w-full px-3 text-gray-700 border !rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.post_event_followup_plan || ""}
            onChange={(e) => handleInputChange("post_event_followup_plan", e.target.value)}
          />
        </Form.Item>

        {/* Look-a-like Audience */}
        <Form.Item
          name="event_look_like_audience_url"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Look-a-like Audience (if any)
              </span>
              <span className="text-xs text-gray-500 mb-2">
                Share any data (e.g., potential leads, convertible leads, target leads)
              </span>
            </div>
          }
        >
          <div className="relative h-12 flems-center justify-center border border-gray-300 border-dashed !rounded-2xl">
            <input
              type="file"
              id="look-alike-audience"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("event_look_like_audience_url", e)}
            />
            <div className="flex h-full gap-4 items-center">
              <UploadIcon className="mx-auto h-6 w-6 text-gray-400" />
              {/* <p className="mt-1 text-sm text-gray-600">Upload</p> */}
            </div>
          </div>
          {fileStatus.event_look_like_audience_url && (
            <p className="text-xs text-green-500 mt-1">
              Uploaded: {fileStatus.event_look_like_audience_url}
            </p>
          )}
          {errors.event_look_like_audience_url && (
            <p className="text-xs text-red-500 mt-1">{errors.event_look_like_audience_url}</p>
          )}
        </Form.Item>

        {/* Unique Event Factors */}
        <Form.Item
          name="unique_event_factors"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Unique Event Factors
              </span>
              <span className="text-xs text-gray-500 mb-2">
                Any special elements about this event we should know about? (e.g., event theme, external factors)
              </span>
            </div>
          }
        >
          <TextArea
            className="w-full px-3 text-gray-700 border !rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.unique_event_factors || ""}
            onChange={(e) => handleInputChange("unique_event_factors", e.target.value)}
          />
        </Form.Item>

        {/* Additional Resources */}
        <Form.Item
          name="additional_info"
          label={
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Additional Resources Needed?
              </span>
              <span className="text-xs text-gray-500 mb-2">
                Do you require any additional tools or support to help you track and analyze the event&apos;s impact?
              </span>
            </div>
          }
        >
          <TextArea
            className="w-full px-3 text-gray-700 border !rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.additional_info || ""}
            onChange={(e) => handleInputChange("additional_info", e.target.value)}
          />
        </Form.Item>
      </div>
    </div>
  );
}

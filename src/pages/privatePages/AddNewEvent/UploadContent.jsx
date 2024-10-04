import React, { useState } from "react";
import { UploadIcon } from "lucide-react";

export default function EventDetailsForm({ formData, onInputChange }) {
  const [fileStatus, setFileStatus] = useState({
    attendeeList: null,
    lookAlikeAudience: null,
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
        <div>
          <label
            htmlFor="post-event-metrics"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            List all post-event metrics you expect to collect during the event
          </label>
          <p className="text-xs text-gray-500 mb-2">
            (e.g., lead conversion, booth traffic, social media engagement)
          </p>
          <textarea
            id="post-event-metrics"
            className="w-full h-12 px-3 py-2 text-gray-700 border rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.postEventMetrics || ""}
            onChange={(e) => handleInputChange("postEventMetrics", e.target.value)}
          />
        </div>

        {/* Event Attendee List */}
        <div>
          <label
            htmlFor="event-attendee-list"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Event Attendee list / previous data (if any)
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Share an attendee list, pre-event attendee data, and/or data from previous years.
          </p>
          <div className="relative h-12 flex items-center justify-center border border-gray-300 border-dashed rounded-2xl">
            <input
              type="file"
              id="event-attendee-list"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("attendeeList", e)}
            />
            <div className="flex gap-4 text-center">
              <UploadIcon className="mx-auto h-6 w-12 text-gray-400" />
              <p className="mt-1 text-sm text-gray-600">Upload</p>
            </div>
          </div>
          {fileStatus.attendeeList && (
            <p className="text-xs text-green-500 mt-1">
              Uploaded: {fileStatus.attendeeList}
            </p>
          )}
          {errors.attendeeList && (
            <p className="text-xs text-red-500 mt-1">{errors.attendeeList}</p>
          )}
        </div>

        {/* Post-Event Follow-Up Plans */}
        <div>
          <label
            htmlFor="post-event-followup"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            List all post-event follow-up plans
          </label>
          <p className="text-xs text-gray-500 mb-2">
            (e.g., email campaigns, lead nurturing, sales outreach)
          </p>
          <textarea
            id="post-event-followup"
            className="w-full h-12 px-3 py-2 text-gray-700 border rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.postEventFollowup || ""}
            onChange={(e) => handleInputChange("postEventFollowup", e.target.value)}
          />
        </div>

        {/* Look-a-like Audience */}
        <div>
          <label
            htmlFor="look-alike-audience"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Look-a-like Audience (if any)
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Share any data (e.g., potential leads, convertible leads, target leads)
          </p>
          <div className="relative h-12 flex items-center justify-center border border-gray-300 border-dashed rounded-2xl">
            <input
              type="file"
              id="look-alike-audience"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("lookAlikeAudience", e)}
            />
            <div className="flex gap-4 text-center">
              <UploadIcon className="mx-auto h-6 w-6 text-gray-400" />
              <p className="mt-1 text-sm text-gray-600">Upload</p>
            </div>
          </div>
          {fileStatus.lookAlikeAudience && (
            <p className="text-xs text-green-500 mt-1">
              Uploaded: {fileStatus.lookAlikeAudience}
            </p>
          )}
          {errors.lookAlikeAudience && (
            <p className="text-xs text-red-500 mt-1">{errors.lookAlikeAudience}</p>
          )}
        </div>

        {/* Unique Event Factors */}
        <div>
          <label
            htmlFor="unique-event-factors"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Unique Event Factors
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Any special elements about this event we should know about? (e.g., event theme, external factors)
          </p>
          <textarea
            id="unique-event-factors"
            className="w-full h-12 px-3 py-2 text-gray-700 border rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.uniqueEventFactors || ""}
            onChange={(e) => handleInputChange("uniqueEventFactors", e.target.value)}
          />
        </div>

        {/* Additional Resources */}
        <div>
          <label
            htmlFor="additional-resources"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Resources Needed?
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Do you require any additional tools or support to help you track and analyze the event's impact?
          </p>
          <textarea
            id="additional-resources"
            className="w-full h-12 px-3 py-2 text-gray-700 border rounded-2xl focus:outline-none focus:border-blue-500"
            style={{ minHeight: "48px" }}
            value={formData?.additionalResources || ""}
            onChange={(e) => handleInputChange("additionalResources", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

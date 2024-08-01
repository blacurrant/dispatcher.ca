import React, { useState } from "react";
import { Button, DatePicker, Form, Input, TimePicker } from "antd";

const DropoffDetails = ({ setDetailTab }) => {
  const [advanceSettings, setAdvanceSettings] = useState(false);

  return (
    <div className="w-[100%] flex flex-col border border-gray-400">
      <div className=" text-xl font-semibold flex justify-between p-5 border-b border-gray-400">
        <p>Drop-off Details</p>
        <p>Clear</p>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5 pt-5">
        <Form.Item name="dropoffDate" label="Appointment Date*">
          <DatePicker size="large" className="w-full" />
        </Form.Item>
        <Form.Item name="dropoffTime" label="Appointment Time*">
          <TimePicker size="large" className="w-full" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="receiverName" label="Receiver Name*">
          <Input size="large" placeholder="Receiver name" />
        </Form.Item>
        <Form.Item name="Phone" label="Phone*">
          <Input
            size="large"
            placeholder="Enter phone number"
            addonBefore={
              <select>
                <option>+91</option>
                <option>+1</option>
              </select>
            }
          />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-x-10 px-5">
        <Form.Item name="dropoffAddress" label="Address*">
          <Input size="large" placeholder="Enter address" />
        </Form.Item>
        <Form.Item name="dropoffStreet" label="Street 2*">
          <Input size="large" placeholder="Enter street 2" />
        </Form.Item>
        <Form.Item name="dropoffState" label="State*">
          <Input size="large" placeholder="Enter state" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="dropoffCity" label="city*">
          <Input size="large" placeholder="Enter city" />
        </Form.Item>
        <Form.Item name="dropoffPostalCode   " label="Postal Code*">
          <Input size="large" placeholder="Enter postal code" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="dropoffNumber" label="Dropoff Number*">
          <Input size="large" placeholder="Enter city" />
        </Form.Item>
        <Form.Item name="contactPerson" label="Contact Person*">
          <Input size="large" placeholder="Enter postal code" />
        </Form.Item>
      </div>
      <p
        onClick={() => setAdvanceSettings(!advanceSettings)}
        className="text-md font-semibold w-[100%] text-end px-5 underline cursor-pointer"
      >
        {advanceSettings ? "Hide Advance Settings" : "Show Advance Settings"}
      </p>
      {advanceSettings && (
        <>
          <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
            <Form.Item name="dropoffCommodity" label="Commodity*">
              <Input size="large" placeholder="Enter city" />
            </Form.Item>
            <Form.Item name="dropoffTemperature" label="Temperature*">
              <Input size="large" placeholder="Enter postal code" />
            </Form.Item>
          </div>
          <div className="w-[100%] grid grid-cols-3 gap-x-10 px-5">
            <Form.Item name="dropoffSkids" label="Skids*">
              <Input size="large" placeholder="Enter address" />
            </Form.Item>
            <Form.Item name="dropoffCases" label="Cases*">
              <Input size="large" placeholder="Enter street 2" />
            </Form.Item>
            <Form.Item name="dropoffWeight" label="Weight*">
              <Input size="large" placeholder="Enter state" />
            </Form.Item>
          </div>
        </>
      )}
      <div className="flex justify-between p-5 items-center">
        <Button type="primary" onClick={() => setDetailTab(1)}>
          Previous
        </Button>
        <div className="flex gap-10 font-semibold underline">
          <button onClick={() => setDetailTab(1)}>1</button>
          <button onClick={() => setDetailTab(2)}>2</button>
          <button onClick={() => setDetailTab(3)}>3</button>
        </div>
        <Button type="primary" onClick={() => setDetailTab(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default DropoffDetails;

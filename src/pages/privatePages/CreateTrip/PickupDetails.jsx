import React, { useState } from "react";
import { Button, DatePicker, Form, Input, TimePicker } from "antd";
import { useDispatch } from "react-redux";
import { setPickupSlice } from "../../../store/slices/pickupSlice";

const PickupDetails = ({ setDetailTab }) => {
  const [advanceSettings, setAdvanceSettings] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="w-[100%] flex flex-col border border-gray-400">
      <div className=" text-xl font-semibold flex justify-between p-5 border-b border-gray-400">
        <p>Pickup Details</p>
        <p>Clear</p>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5 pt-5">
        <Form.Item name="date" label="Appointment Date*">
          <DatePicker size="large" className="w-full" />
        </Form.Item>
        <Form.Item name="date" label="Appointment Time*">
          <TimePicker size="large" className="w-full" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="shipperName" label="Name*">
          <Input size="large" placeholder="Shipper name" />
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
        <Form.Item name="pickupAddress" label="Address*">
          <Input size="large" placeholder="Enter address" />
        </Form.Item>
        <Form.Item name="pickupStreet" label="Street 2*">
          <Input size="large" placeholder="Enter street 2" />
        </Form.Item>
        <Form.Item name="pickupState" label="State*">
          <Input size="large" placeholder="Enter state" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="pickupCity" label="city*">
          <Input size="large" placeholder="Enter city" />
        </Form.Item>
        <Form.Item name="pickupPostalCode   " label="Postal Code*">
          <Input size="large" placeholder="Enter postal code" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="pickupNumber" label="Pickup Number*">
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
            <Form.Item name="pickupCommodity" label="Commodity*">
              <Input size="large" placeholder="Enter city" />
            </Form.Item>
            <Form.Item name="pickupTemperature" label="Temperature*">
              <Input size="large" placeholder="Enter postal code" />
            </Form.Item>
          </div>
          <div className="w-[100%] grid grid-cols-3 gap-x-10 px-5">
            <Form.Item name="pickupSkids" label="Skids*">
              <Input size="large" placeholder="Enter address" />
            </Form.Item>
            <Form.Item name="pickupCases" label="Cases*">
              <Input size="large" placeholder="Enter street 2" />
            </Form.Item>
            <Form.Item name="pickupWeight" label="Weight*">
              <Input size="large" placeholder="Enter state" />
            </Form.Item>
          </div>
        </>
      )}
      <div className="flex justify-between p-5 items-center">
        <Button disabled type="primary" onClick={() => setDetailTab(1)}>
          Previous
        </Button>
        <div className="flex gap-10 font-semibold underline">
          <button onClick={() => setDetailTab(1)}>1</button>
          <button onClick={() => setDetailTab(2)}>2</button>
          <button onClick={() => setDetailTab(3)}>3</button>
        </div>
        <Button type="primary" onClick={() => {setDetailTab(2); dispatch(setPickupSlice({pickup: form.getFieldsValue()}))}}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default PickupDetails;

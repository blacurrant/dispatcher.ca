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
        <p>Highway Dispatch</p>
        <p>Clear</p>
      </div>
      <div className="w-[100%] flex gap-10 p-5 items-center text-xl font-bold">
        <h1>O</h1>
        <div className="w-full h-0 flex border-b-4 border-black border-dotted"></div>
        <h1>O</h1>
        <div className="w-full h-0 flex border-b-4 border-black border-dotted"></div>
        <h1>O</h1>
      </div>
      <div className="flex justify-between p-5">
        <div className="text-left flex flex-col gap-2">
          <p className="font-semibold text-xl">Pickup Overview</p>
          <p>Pickup Overview</p>
          <p>Pickup Overview</p>
          <p>Pickup Overview</p>
        </div>
        <div className="text-right flex flex-col gap-2">
          <p className="font-semibold text-xl">Drop-off Overview</p>
          <p>Drop-off Overview</p>
          <p>Drop-off Overview</p>
          <p>Drop-off Overview</p>
        </div>
      </div>
      <p className="font-semibold text-lg px-5">Dispatch Details</p>

      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="dispatchDriver" label="Driver*">
          <Input size="large" placeholder="Driver Name" />
        </Form.Item>
        <Form.Item name="dispatchCoDriver" label="Co-Driver*">
          <Input size="large" placeholder="Co-Driver Name" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-10 px-5">
        <Form.Item name="truckId" label="Truck ID*">
          <Input size="large" placeholder="Truck ID" />
        </Form.Item>
        <Form.Item name="trailerId" label="Trailer ID*">
          <Input size="large" placeholder="Trailer ID" />
        </Form.Item>
      </div>
      <div className="w-[100%] grid grid-cols-3 gap-x-10 px-5">
        <Form.Item name="carrier" label="Carrier*">
          <Input size="large" placeholder="Enter Carrier" />
        </Form.Item>
        <Form.Item name="trailerType" label="Trailer Type*">
          <Input size="large" placeholder="Enter Trailer Type" />
        </Form.Item>
        <Form.Item name="rate" label="Rate*">
          <Input size="large" placeholder="Enter Rate" />
        </Form.Item>
      </div>
      <div className="flex justify-between p-5 items-center">
        <Button disabled type="primary" onClick={() => setDetailTab(2)}>
          Previous
        </Button>
        <div className="flex gap-10 font-semibold underline">
          <button onClick={() => setDetailTab(1)}>1</button>
          <button onClick={() => setDetailTab(2)}>2</button>
          <button onClick={() => setDetailTab(3)}>3</button>
        </div>
        <Form.Item
        >
          <Button type="primary" htmlType="submit">
            Finish
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default PickupDetails;

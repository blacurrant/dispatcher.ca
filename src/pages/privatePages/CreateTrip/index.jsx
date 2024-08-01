import React from "react";
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TimePicker,
  TreeSelect,
} from "antd";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const CreateTrip = () => {
  return (
    <div className="flex flex-col gap-10 w-[100%] h-[90vh] p-[20px] overflow-auto">
      <h1 className=" text-3xl font-semibold tracking-wide">Create a trip</h1>
      <div className="w-[100%] flex flex-col gap-10">
        {/* <div className="flex justify-between">
          <p>Trip Details</p>
          <p>Clear</p>
        </div> */}
        <Form
          layout="vertical"
          className=" w-[100%] mx-auto flex flex-col gap-10"
        >
          <div className="w-[100%] bg-orange-200 bg-opacity-20 flex flex-col gap-x-5">
            <div className=" text-xl font-semibold flex justify-between p-5">
              <p>Trip Details</p>
              <p>Clear</p>
            </div>
            <div className="w-[100%] grid grid-cols-3 gap-10 p-5">
              <Form.Item name="date" label="Date*">
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item name="customerName" label="OrderNumber*">
                <Input
                  size="large"
                  placeholder="Enter order number"
                  className="w-full"
                />
              </Form.Item>
              <Form.Item name="customerName" label="Rate*">
                <Input
                  size="large"
                  placeholder="Enter rate"
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="px-5 pb-5">
              <Checkbox>Is this load already delivered?</Checkbox>
            </div>
          </div>

          <div className="w-[100%] flex flex-col gap-5">
            <div className=" text-xl font-semibold flex justify-between p-5">
              <p>Customer Details</p>
              <p>Clear</p>
            </div>
            <div className="w-[100%] grid grid-cols-2 gap-10 px-5">
              <Form.Item name="customerName" label="Name*">
                <Input size="large" placeholder="Enter name" />
              </Form.Item>
              <Form.Item name="customerName" label="Phone No.*">
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
              <Form.Item name="customerName" label="Address*">
                <Input size="large" placeholder="Enter address" />
              </Form.Item>
              <Form.Item name="customerName" label="Street 2*">
                <Input size="large" placeholder="Enter street 2" />
              </Form.Item>
              <Form.Item name="customerName" label="State*">
                <Input size="large" placeholder="Enter state" />
              </Form.Item>
            </div>
            <div className="w-[100%] grid grid-cols-2 gap-10 px-5">
              <Form.Item name="customerName" label="city*">
                <Input size="large" placeholder="Enter city" />
              </Form.Item>
              <Form.Item name="customerName" label="Postal Code*">
                <Input size="large" placeholder="Enter postal code" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>

      <div>
        <div className="flex justify-between">
          <p>Customer Details</p>
          <p>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;

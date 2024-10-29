import React from 'react';
import { Form, Input, InputNumber } from 'antd';

export default function BudgetSponsorshipForm({ formData, onInputChange }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="w-full mx-auto bg-white flex flex-col ">
      <h2 className="text-2xl font-light font-lora border-b border-primary border-opacity-20">Budget and Sponsorship Details</h2>
      <Form
        form={form}
        name="budgetSponsorship"
        onFinish={onFinish}
        layout="vertical"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Form.Item
            name="average_customer_value"
            label="Average Customer Value"
            rules={[{ required: true, message: 'Please input the average customer value!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.average_customer_value}
              onChange={(value) => onInputChange('average_customer_value', value)}
            />
          </Form.Item>
          <Form.Item
            name="average_ticket_size"
            label="Average Ticket Size"
            rules={[{ required: true, message: 'Please input the average ticket size!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.average_ticket_size}
              onChange={(value) => onInputChange('average_ticket_size', value)}
            />
          </Form.Item>
          <Form.Item
            name="event_budget"
            label="Event Budget"
            rules={[{ required: true, message: 'Please input the event budget!' }]}
          >
            <InputNumber
              value={formData?.event_budget}
              onChange={(value) => onInputChange("event_budget", value)}
              className="w-full h-12 !rounded-2xl"
              placeholder="Enter budget in dollars"
              min={0}
              formatter={(value) => `$${value}`}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>

          <Form.Item
            name="event_sponsership_level"
            label="Sponsorship Level"
            rules={[{ required: true, message: 'Please input the sponsorship level!' }]}
          >
            <Input
              value={formData?.event_sponsership_level}
              onChange={(e) => onInputChange("event_sponsership_level", e.target.value)}
              className="w-full h-12 !rounded-2xl"
            />
          </Form.Item>
        </div>

        <h3 className="text-sm font-normal">Allocation of Event Budget</h3>
        <div className="grid grid-cols-5 gap-6">
          
          <Form.Item
            name="booth_setup_budget"
            label="Booth Setup Budget"
            rules={[{ required: true, message: 'Please input the booth setup budget!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.booth_setup_budget}
              onChange={(value) => onInputChange('booth_setup_budget', value)}
            />
          </Form.Item>
          <Form.Item
            name="travel_budget"
            label="Travel Budget"
            rules={[{ required: true, message: 'Please input the travel budget!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.travel_budget}
              onChange={(value) => onInputChange('travel_budget', value)}
            />
          </Form.Item>
          <Form.Item
            name="sponsership_budget"
            label="Sponsorship Budget"
            rules={[{ required: true, message: 'Please input the sponsorship budget!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.sponsership_budget}
              onChange={(value) => onInputChange('sponsership_budget', value)}
            />
          </Form.Item>
          <Form.Item
            name="promotional_budget"
            label="Promotional Budget"
            rules={[{ required: true, message: 'Please input the promotional budget!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.promotional_budget}
              onChange={(value) => onInputChange('promotional_budget', value)}
            />
          </Form.Item>
          <Form.Item
            name="misc_budget"
            label="Miscellaneous Budget"
            rules={[{ required: true, message: 'Please input the miscellaneous budget!' }]}
          >
            <InputNumber
              className="w-full h-12 !rounded-2xl"
              min={0}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              value={formData?.misc_budget}
              onChange={(value) => onInputChange('misc_budget', value)}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

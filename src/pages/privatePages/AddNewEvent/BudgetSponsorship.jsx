import React from 'react';
import { Form, Input, Select, InputNumber } from 'antd';

const { Option } = Select;

const budgetCategories = [
  'Booth Setup',
  'Swag',
  'Marketing',
  'Travel',
  'Promotional Materials',
  'Other'
];

export default function BudgetSponsorshipForm({ formData, onInputChange }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const handleBudgetChange = (category, value) => {
    // Create or update the budget allocation for the given category
    const updatedBudget = formData?.budgetAllocations || [];
    const index = updatedBudget.findIndex(item => item.category === category);
    
    if (index > -1) {
      // Update existing category
      updatedBudget[index].amount = value;
    } else {
      // Add new category
      updatedBudget.push({ category, amount: value });
    }

    // Update formData using onInputChange
    onInputChange("budgetAllocations", updatedBudget);
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
            name="eventBudget"
            label="Event Budget"
            rules={[{ required: true, message: 'Please input the event budget!' }]}
          >
            <Select
              value={formData?.eventBudget}
              onChange={(value) => onInputChange("eventBudget", value)}
              className="w-full h-12 !rounded-2xl"
            >
              <Option value="5000">$5,000</Option>
              <Option value="10000">$10,000</Option>
              <Option value="15000">$15,000</Option>
              <Option value="20000">$20,000+</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="sponsorshipLevel"
            label="Sponsorship Level"
            rules={[{ required: true, message: 'Please input the sponsorship level!' }]}
          >
            <Input
              value={formData?.sponsorLevel}
              onChange={(e) => onInputChange("sponsorLevel", e.target.value)}
              className="w-full h-12 !rounded-2xl"
            />
          </Form.Item>
        </div>

        <h3 className="text-sm font-normal">Allocation of Event Budget</h3>
        <div className="grid grid-cols-6 gap-6">
          {budgetCategories.map((category, index) => (
            <Form.Item
              key={index}
              name={`budget_${category.toLowerCase().replace(' ', '_')}`}
              label={category}
              rules={[{ required: true, message: `Please input ${category} budget!` }]}
            >
              <InputNumber
                className="w-full h-12 !rounded-2xl"
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace('%', '')}
                value={formData?.budgetAllocations?.find(item => item.category === category)?.amount}
                onChange={(value) => handleBudgetChange(category, value)}
              />
            </Form.Item>
          ))}
        </div>
      </Form>
    </div>
  );
}

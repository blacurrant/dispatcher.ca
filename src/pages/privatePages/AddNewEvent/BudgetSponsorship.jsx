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
            <InputNumber
              value={formData?.eventBudget}
              onChange={(value) => onInputChange("eventBudget", value)}
              className="w-full h-12 !rounded-2xl"
              placeholder="Enter budget in dollars"
              min={0}
              formatter={(value) => `$${value}`}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
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
        <div className="grid grid-cols-4 gap-6">
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
              onChange={(value) => handleBudgetChange('average_customer_value', value)}
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
              onChange={(value) => handleBudgetChange('average_ticket_size', value)}
            />
          </Form.Item>
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
              onChange={(value) => handleBudgetChange('booth_setup_budget', value)}
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
              onChange={(value) => handleBudgetChange('travel_budget', value)}
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
              onChange={(value) => handleBudgetChange('sponsership_budget', value)}
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
              onChange={(value) => handleBudgetChange('promotional_budget', value)}
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
              onChange={(value) => handleBudgetChange('misc_budget', value)}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

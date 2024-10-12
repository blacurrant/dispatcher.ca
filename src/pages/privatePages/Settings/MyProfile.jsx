import React, { useState } from 'react';
import { Input, Select, Button, Upload, Tabs, Radio } from 'antd';
import { UserOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('my-profile');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    linkedin: '',
    companyName: '',
    companySize: '',
    websiteLink: '',
    companyLocation: '',
    companyType: '',
    businessDescription: '',
    sponsoredBefore: '',
  });

  const jobTitles = [
    "CEO or Owner", "Event Organizer", "Event Marketer", "Designer",
    "Human Resources", "Sales/Account Management", "Operations/Administration", "Other"
  ];

  const companyTypes = [
    "AI/ SaaS", "FinTech", "Tech", "Consumer Tech / E- Commerce", "Marketing Agency", "Other"
  ];

  const businessDescriptions = [
    { label: "Pre-event Analysis", icon: "🔍" },
    { label: "Take notes on leads during the event", icon: "📝" },
    { label: "Find leads at the upcoming event", icon: "🎯" },
    { label: "Post-event ROI calculation", icon: "📊" },
    { label: "Set goals for the upcoming event", icon: "🏆" },
    { label: "Other", icon: "..." },
  ];

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="w-full mx-auto h-[90vh] p-6 bg-white rounded-lg shadow overflow-auto">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
        <TabPane 
          tab={<span className="flex items-center"><UserOutlined className="mr-2" />My Profile</span>}
          key="my-profile"
        />
        {/* <TabPane 
          tab={<span className="flex items-center"><SettingOutlined className="mr-2" />Settings</span>}
          key="settings"
        /> */}
      </Tabs>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Basic Details</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <Input 
              id="firstName" 
              placeholder="Enter your first name" 
              className="!rounded-2xl h-12" 
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <Input 
              id="lastName" 
              placeholder="Enter your last name" 
              className="!rounded-2xl h-12" 
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">What Describes you the best?</label>
          <Radio.Group 
            value={formData.jobTitle} 
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className="grid grid-cols-2 gap-2"
          >
            {jobTitles.map((title) => (
              <Radio.Button 
                key={title} 
                value={title}
                className="text-center h-12 !rounded-2xl flex items-center justify-center"
              >
                {title}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              className="!rounded-2xl h-12" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <Input 
              id="linkedin" 
              placeholder="Enter your LinkedIn profile" 
              className="!rounded-2xl h-12" 
              value={formData.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold">Company Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name (optional)</label>
            <Input 
              id="companyName" 
              placeholder="Enter your company name" 
              className="!rounded-2xl h-12" 
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">Company Size (optional)</label>
            <Select
              id="companySize"
              placeholder="Select company size"
              className="w-full !rounded-2xl h-12"
              value={formData.companySize}
              onChange={(value) => handleInputChange('companySize', value)}
            >
              <Option value="1-10">1-10 employees</Option>
              <Option value="11-50">11-50 employees</Option>
              <Option value="51-200">51-200 employees</Option>
              <Option value="201-500">201-500 employees</Option>
              <Option value="501+">501+ employees</Option>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="websiteLink" className="block text-sm font-medium text-gray-700 mb-1">Website Link (optional)</label>
            <Input 
              id="websiteLink" 
              placeholder="Enter your website URL" 
              className="!rounded-2xl h-12" 
              value={formData.websiteLink}
              onChange={(e) => handleInputChange('websiteLink', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700 mb-1">Company Location (optional)</label>
            <Select
              id="companyLocation"
              placeholder="Select company location"
              className="w-full !rounded-2xl h-12"
              value={formData.companyLocation}
              onChange={(value) => handleInputChange('companyLocation', value)}
            >
              <Option value="us">United States</Option>
              <Option value="uk">United Kingdom</Option>
              <Option value="ca">Canada</Option>
              <Option value="au">Australia</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type of Company (optional)</label>
          <Radio.Group 
            value={formData.companyType} 
            onChange={(e) => handleInputChange('companyType', e.target.value)}
            className="grid grid-cols-2 gap-2"
          >
            {companyTypes.map((type) => (
              <Radio.Button 
                key={type} 
                value={type}
                className="text-center h-12 !rounded-2xl flex items-center justify-center"
              >
                {type}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pick one that describes your business</label>
          <Radio.Group 
            value={formData.businessDescription} 
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            className="grid grid-cols-2 gap-2"
          >
            {businessDescriptions.map((desc) => (
              <Radio.Button 
                key={desc.label} 
                value={desc.label}
                className="text-center h-12 !rounded-2xl flex items-center justify-center"
              >
                <span className="mr-2">{desc.icon}</span>
                {desc.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sponsored an event Before?</label>
          <Radio.Group 
            value={formData.sponsoredBefore} 
            onChange={(e) => handleInputChange('sponsoredBefore', e.target.value)}
            className="flex gap-2"
          >
            <Radio.Button value="Yes" className="w-24 h-12 !rounded-2xl flex items-center justify-center">Yes</Radio.Button>
            <Radio.Button value="No" className="w-24 h-12 !rounded-2xl flex items-center justify-center">No</Radio.Button>
          </Radio.Group>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload lead list (if any)</label>
          <Upload>
            <Button icon={<UploadOutlined />} className="w-full h-12 !rounded-2xl">Upload</Button>
          </Upload>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
          <div className="flex space-x-2 mb-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <Upload>
            <Button icon={<UploadOutlined />} className="h-12 !rounded-2xl">Upload New Picture</Button>
          </Upload>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="primary" className="h-12 !rounded-2xl" onClick={handleUpdate}>Update</Button>
      </div>
    </div>
  );
}
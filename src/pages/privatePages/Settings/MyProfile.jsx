import { useEffect, useState } from "react";
import { Input, Select, Button, Tabs, ConfigProvider } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { getUserApi, updateUserApi } from "../../../api/Api_collection";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;
const { Option } = Select;

const purpleTheme = {
  token: {
    colorPrimary: "#723D9E",
    colorLink: "#723D9E",
    colorLinkHover: "#723D9E",
    borderRadius: 16,
  },
};

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    email: "",
    company_name: "",
    company_size: "",
    company_website: "",
    company_location: "",
    company_type: "",
    platform_usage_type: "",
    is_sponser: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  const designations = [
    "CEO or Owner",
    "Event Organizer",
    "Event Marketer",
    "Designer",
    "Human Resources",
    "Sales/Account Management",
    "Operations/Administration",
    "Other",
  ];

  const companyTypes = [
    "AI/ SaaS",
    "FinTech",
    "Tech",
    "Consumer Tech / E- Commerce",
    "Marketing Agency",
    "Other",
  ];

  const platformUsageTypes = [
    "Pre-event Analysis",
    "Take notes on leads during the event",
    "Find leads at the upcoming event",
    "Post-event ROI calculation",
    "Set goals for the upcoming event",
    "Other",
  ];

  const fetchUserInfo = async () => {
    try {
      const res = await getUserApi();
      console.log(res, "userInfo");
      const user = Array.isArray(res)
        ? res.find((user) => user.email === userInfo?.email)
        : res.email === userInfo?.email
        ? res
        : null;
      if (user) {
        setFormData(user);
        console.log(user, "formData");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const updateUserInfo = async () => {
    try {
      const res = await updateUserApi(formData?.user_id, formData);
      console.log(res, "userInfo");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    console.log("Form data submitted:", formData);
    updateUserInfo();
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full mx-auto h-[90vh] p-6 bg-white rounded-lg shadow overflow-auto">
      <ConfigProvider theme={purpleTheme}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
            {/* <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={toggleEdit}
              className="h-10 !rounded-2xl bg-primary text-white"
            >
              {isEditing ? "Cancel Edit" : "Edit"}
            </Button> */}
        </div>

        <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
          <TabPane
            tab={
              <span className="flex items-center">
                <UserOutlined className="mr-2" />
                My Profile
              </span>
            }
            key="my-profile"
          />
        </Tabs>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Basic Details</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <Input
                id="first_name"
                placeholder="Enter your first name"
                className="!rounded-2xl h-12"
                value={formData.first_name}
                onChange={(e) =>
                  handleInputChange("first_name", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <Input
                id="last_name"
                placeholder="Enter your last name"
                className="!rounded-2xl h-12"
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What Describes you the best?
            </label>
            <Select
              value={formData.designation}
              onChange={(value) => handleInputChange("designation", value)}
              className="w-full !rounded-2xl h-12"
              placeholder="Select designation"
              disabled={!isEditing}
            >
              {designations.map((title) => (
                <Select.Option key={title} value={title}>
                  {title}
                </Select.Option>
              ))}
            </Select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="!rounded-2xl h-12"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <h2 className="text-xl font-semibold">Company Information</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>
              <Input
                id="company_name"
                placeholder="Enter your company name"
                className="!rounded-2xl h-12"
                value={formData.company_name}
                onChange={(e) =>
                  handleInputChange("company_name", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div>
              <label
                htmlFor="company_size"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Size
              </label>
              <Select
                id="company_size"
                placeholder="Select company size"
                className="w-full !rounded-2xl h-12"
                value={formData.company_size}
                onChange={(value) => handleInputChange("company_size", value)}
                disabled={!isEditing}
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
              <label
                htmlFor="company_website"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Website Link
              </label>
              <Input
                id="company_website"
                placeholder="Enter your website URL"
                className="!rounded-2xl h-12"
                value={formData.company_website}
                onChange={(e) =>
                  handleInputChange("company_website", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
            <div>
              <label
                htmlFor="company_location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Location
              </label>
              <Input
                id="company_location"
                placeholder="Enter company location"
                className="!rounded-2xl h-12"
                value={formData.company_location}
                onChange={(e) =>
                  handleInputChange("company_location", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company_type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Type of Company
            </label>
            <Select
              id="company_type"
              value={formData.company_type}
              onChange={(value) => handleInputChange("company_type", value)}
              className="w-full !rounded-2xl h-12"
              placeholder="Select company type"
              disabled={!isEditing}
            >
              {companyTypes.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </div>

          <div>
            <label
              htmlFor="platform_usage_type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Describes your platform usage
            </label>
            <Select
              mode="multiple"
              id="platform_usage_type"
              value={formData.platform_usage_type}
              onChange={(value) =>
                handleInputChange("platform_usage_type", value)
              }
              className="w-full !rounded-2xl h-12"
              placeholder="Select platform usage type"
              disabled={!isEditing}
            >
              {platformUsageTypes.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sponsored an event Before?
            </label>
            <div className="flex gap-2">
              <button
                className={`w-24 h-12 rounded-2xl flex items-center justify-center ${
                  formData.is_sponser ? "bg-primary text-white" : "bg-gray-200"
                }`}
                onClick={() =>
                  isEditing && handleInputChange("is_sponser", true)
                }
                disabled={!isEditing}
              >
                Yes
              </button>
              <button
                className={`w-24 h-12 rounded-2xl flex items-center justify-center ${
                  !formData.is_sponser ? "bg-primary text-white" : "bg-gray-200"
                }`}
                onClick={() =>
                  isEditing && handleInputChange("is_sponser", false)
                }
                disabled={!isEditing}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            type="primary"
            className="h-12 !rounded-2xl bg-primary text-white"
            onClick={handleUpdate}
            disabled={!isEditing}
          >
            Update
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}

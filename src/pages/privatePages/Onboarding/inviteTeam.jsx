import React, { useState } from "react";
import { Form, Input, Button, Progress } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import OnboardingCompletionModal from "./BoardingModal";
import { useDispatch } from "react-redux";
import { completedOnboarding } from "../../../store/slices/currentUserSlice";

export default function InviteTeamForm({
  setFormTab,
  setFormDrawer,
  setIsModalVisible,
  isModalVisible,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    // Start loading to indicate submission
    setLoading(true);

    // Log the form values (optional)
    console.log("Received values of form:", values);

    // Dispatch the action to complete onboarding
    dispatch(completedOnboarding(true));

    // Close the drawer after the form is submitted
    setFormDrawer(false);

    // Use a timeout to open the modal after the drawer is closed
    setIsModalVisible(true); // Open the modal
    setLoading(false); // Stop loading once everything is done
  };

  return (
    <div className="w-[600px] mx-auto p-6 bg-white rounded-3xl">
      <Progress
        percent={100}
        showInfo={false}
        strokeColor="#8B5CF6"
        trailColor="#E5E7EB"
      />
      <div className="py-8 space-y-2">
        <h1 className="text-xl font-bold ">
          Congratulations! you are just one step away.
        </h1>
        <p className="text-sm text-gray-400 font-lora">
          Your choice here won&apos;t limit what you can do in Melloup. You can
          adjust these settings now or change them later from your profile.
        </p>
      </div>

      <Form
        form={form}
        name="invite_team"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="your_email" initialValue="krishna@gmail.com">
          <Input
            placeholder="Your email"
            className="h-[48px] !rounded-2xl"
            suffix={
              <MinusCircleOutlined
                className="text-gray-400 cursor-pointer"
                onClick={() => form.setFieldsValue({ your_email: "" })}
              />
            }
          />
        </Form.Item>

        <Form.List name="team_members" initialValue={[""]}>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input team member's email or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder={`Teammate ${index + 1}'s email`}
                      className="h-[48px] !rounded-2xl w-full"
                      suffix={
                        fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="text-gray-400 cursor-pointer"
                            onClick={() => remove(field.name)}
                          />
                        ) : null
                      }
                    />
                  </Form.Item>
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  className="h-[48px] !rounded-2xl w-full text-purple-600 border-purple-600 hover:border-purple-700 hover:text-purple-700"
                >
                  Invite more people
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <div className="w-full gap-5 flex justify-between items-center">
            <Button
              type="primary"
              onClick={() => setFormTab(4)}
              className="w-full bg-primary hover:bg-purple-700 border-primary hover:border-purple-700 rounded-2xl h-12 text-lg mt-4"
            >
              <ArrowLeftOutlined />
              Back
            </Button>

            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-primary hover:bg-purple-700 border-primary hover:border-purple-700 rounded-2xl h-12 text-lg mt-4"
            >
              Submit <ArrowRightOutlined />
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

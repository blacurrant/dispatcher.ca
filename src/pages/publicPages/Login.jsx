import React, { useState } from "react";
import { Button, Input, Card, Form, Divider, Image } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import logoIcon from "../../assets/LogoIcon.png";
import loginIllus from "../../assets/login.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserSlice } from "../../store/slices/currentUserSlice";
import { openNotification } from "../../components/notifications";
import { createUserApi } from "../../api/Api_collection";
import { LoginIllustration } from "../../utils/Illustrations";

export default function LoginForm() {


  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onboardingCompleted = useSelector((state) => state?.currentUserSlice);
  console.log(onboardingCompleted, "Asda");
  


  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      console.log("User Info:", user);
      // const userData = {
      //   email: user.email,
      //   user_id: user.uid,
      //   auth_token: user.accessToken,
      // };

      // console.log("Sending user data:", userData);
      // const res = await createUserApi(userData);
      // console.log("API response:", res);
      
      // if (res && res.data) {
        dispatch(setCurrentUserSlice(user));
        navigate("/");
        openNotification("Success", "Logged in successfully", "success");
      // } else {
      //   throw new Error("Invalid response from server");
      // }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      }
      openNotification("Error", "Failed to sign in with Google", "error");
    }
  };


  return (
    <div className="h-screen flex items-center justify-center  p-2">

      <div className="w-full h-full flex flex-col justify-between bg-primary_light rounded-3xl p-[80px]">
        {/* <img src="/logo.png" alt="logo" className="w-full" /> */}
        <div className=" text-[48px] text-primary font-semibold w-[90%] h-fit">
          <p>Embark on a Journey </p>
          <p>of Growth with <span className="font-extrabold ">MelloUp!</span></p>{" "}
        </div>
        {/* <Image src={loginIllus} preview={false} className="w-full rounded-3xl" /> */}
        <LoginIllustration />
      </div>
      <div className="w-full h-screen">
        <div className="w-full h-[10%] flex justify-end items-center">
          <Image
            src={logoIcon}
            preview={false}
            className="!w-[200px] h-fit object-contain"
          />
        </div>
        <div className="w-full h-[90%] flex flex-col justify-center items-center rounded-lg">
          <Card className="w-full max-w-md border-none">
            <div className="flex justify-center text-center pb-8">
              {/* <h1 className="text-2xl font-bold"> </h1> */}
              <h2 className="text-xl font-bold">
                Welcome to MelloUp
              </h2>
            </div>
            <Button
              icon={<GoogleOutlined />}
              block
              size="large"
              className="mb-4 bg-primary  text-white hover:!bg-hover hover:!border-primary hover:!text-primary"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
            <Divider solid style={{ borderColor: "gray" }} >OR</Divider>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              disabled={true}
            >
              <Form.Item
                name="email"
                label="Email Address"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input
                  size="large"
                  className="!rounded-md"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <div className="flex justify-between w-full">
                    <span>Password</span>
                  </div>
                }
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
                <div className="w-full flex justify-end items-end">
                  <a className="w-fit text-sm text-gray-500 hover:text-gray-700">
                    Forgot Password?
                  </a>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-primary !hover:bg-secondary"
                  disabled
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a className="font-medium text-primary hover:underline">
                Signup for free
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

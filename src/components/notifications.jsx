import { notification } from "antd";

export const openNotification = (
  heading = "Heading",
  message = "Oops Time Out",
  type = "success"
) => {
  notification?.[type]({
    message: heading,
    description: message,
    duration: 2,
  });
};

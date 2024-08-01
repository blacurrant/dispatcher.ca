import { Button, Form } from "antd";
import React from "react";

const HighwayDispatch = () => {
  return (
    <div>
      <h1>HighwayDispatch</h1>
      <div>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default HighwayDispatch;

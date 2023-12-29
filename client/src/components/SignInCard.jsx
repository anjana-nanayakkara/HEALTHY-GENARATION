import React from "react";
import { Card, Form, Input, Button, Divider, Typography } from "antd";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import { GoogleOutlined } from "@ant-design/icons";
const SignInCard = () => {
  // Your form logic goes here

  return (
    <Card
      style={{
        width: 600,
        height: "85vh",
        borderBottom: 0,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography.Title
        level={4}
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        Log in to{" "}
        <span style={{ color: "#ffc72c", borderColor: "#000000" }}>
          BAKE N TAKE
        </span>
      </Typography.Title>
      <Form>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: false,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: false, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              backgroundColor: "#000000",
              borderColor: "#ffc72c",
              color: "#ffc72c",
            }}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>

      <Divider style={{ margin: "12px 0" }}>-OR-</Divider>

      <Button
        type="primary"
        block
        style={{
          backgroundColor: "#ff4040",
          borderColor: "#ff4040",
          margin: "24px 0",
        }}
      >
        <GoogleOutlined /> Sign In with Google
      </Button>

      <div style={{ textAlign: "center" }}>
        <span>Don't have an account? </span>
        <Link to="/sign-up">Register</Link>
      </div>
    </Card>
  );
};

export default SignInCard;

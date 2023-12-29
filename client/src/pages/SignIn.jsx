import React from "react";
import { Row, Col } from "antd";
import backgroundImage from "../assets/background.png";

import SignInCard from "../components/SignInCard";

const SignIn = () => {
  document.body.style.overflow = "hidden";

  return (
    <Row style={{}}>
      {/* 1/3 width */}
      <Col
        span={12}
        style={{
          backgroundColor: "#ffc72c",
          padding: "20px",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "750px 770px",
          //   backgroundSize: "auto",
          backgroundRepeat: "repeat",
        }}
      ></Col>

      {/* 2/3 width */}
      <Col
        span={12}
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SignInCard></SignInCard>
      </Col>
    </Row>
  );
};

export default SignIn;

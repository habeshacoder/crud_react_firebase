import React from "react";
import { Text } from "rebass";
import { css } from "@emotion/react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        {/* <p className="lead">
          This is React Contact Management System application with Routing using
          FireBase
        </p> */}
        <Text fontWeight="bold">
          This is React Contact Management System application with Routing using
          FireBase
        </Text>
      </div>
    </div>
  );
};

export default About;

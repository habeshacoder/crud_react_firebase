import React from "react";
import { Text } from "rebass";
import { css } from "@emotion/react";

const Error = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            <Text>No Such Page Exist</Text>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;

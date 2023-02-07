import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "rebass";
import { css } from "@emotion/react";

const View = () => {
  const currentId = useParams();
  const { id } = currentId;
  const { contacts: data } = useSelector((state) => state.data);

  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div class="card">
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p
                  class="card-text"
                  css={css`
                    font-size: 30px;
                  `}
                >
                  <Text>Name: {data[id].fullName}</Text>
                </p>
                <p
                  class="card-text"
                  css={css`
                    font-size: 30px;
                  `}
                >
                  <Text>height: {data[id].height}</Text>
                </p>
                <p
                  class="card-text"
                  css={css`
                    font-size: 30px;
                  `}
                >
                  <Text>Email: {data[id].email}</Text>
                </p>
                <p
                  class="card-text"
                  css={css`
                    font-size: 30px;
                  `}
                >
                  <Text>gender: {data[id].gender}</Text>
                </p>
                <Link to="/">
                  <a
                    className="btn btn-info"
                    css={css`
                      font-size: 30px;
                    `}
                  >
                    <Text>Go Back</Text>
                  </a>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;

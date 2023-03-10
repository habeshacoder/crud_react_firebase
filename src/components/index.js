import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContactsStart, deleteContactStart } from "../redux/actions";
import { css } from "@emotion/react";
import { Text } from "rebass";

const ListRecord = () => {
  // const [data, setData] = useState({});
  const { contacts: data } = useSelector((state) => state.data);
  const color = "white";
  // console.log("data", data);
  // console.log("state", state);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsStart());
  }, []);

  // useEffect(() => {
  //   firebaseDb.child("contacts").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteContactStart(id));
      dispatch(getContactsStart());
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1
                className="display-2"
                css={css`
                  font-size: 20px;
                  &:hover {
                    color: ${color};
                  }
                `}
              >
                <Text> Contact Management System</Text>
              </h1>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <Text>No.</Text>
                  </th>
                  <th scope="col">
                    <Text>Name</Text>
                  </th>
                  <th scope="col">
                    <Text>height</Text>
                  </th>
                  <th scope="col">
                    <Text>Email</Text>
                  </th>
                  <th scope="col">
                    <Text>gender</Text>
                  </th>
                  <th scope="col">
                    <Text>Action</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].height}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].gender}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`/view/${id}`}>
                          <p className="btn text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;

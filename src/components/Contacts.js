import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import { Text } from "rebass";

const Contacts = () => {
  const [data, setData] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "") {
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    } else {
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">
            <Text>Contact Register</Text>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            addOrEdit={addOrEdit}
            data={data}
            currentId={currentId}
          />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thread-light">
              <tr>
                <th>
                  <Text>Full Name</Text>
                </th>
                <th>
                  <Text>height</Text>
                </th>
                <th>
                  <Text>Email</Text>
                </th>
                <th>
                  <Text>gender</Text>
                </th>
                <th>
                  <Text>Action</Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id) => {
                return (
                  <tr key={id}>
                    <td>{data[id].fullName}</td>
                    <td>{data[id].height}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].gender}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-pencil-alt" />
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;

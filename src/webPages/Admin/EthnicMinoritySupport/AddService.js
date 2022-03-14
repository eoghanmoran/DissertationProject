import { setNestedObjectValues } from "formik";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ServiceDataService from "./crud.services";


const AddService = ({ id, setServiceID }) => {
  const [Service, setService] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Desc, setDesc] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (Service === "" || ContactNumber === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newService = {
      Service,
      ContactNumber,
      Desc,
    };
    console.log(newService);

    try {
      if (id !== undefined && id !== "") {
        await ServiceDataService.updateService(id, newService);
        setServiceID("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ServiceDataService.addService(newService);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setService("");
    setContactNumber("");
    setDesc("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ServiceDataService.getService(id);
      console.log("the record is :", docSnap.data());
      setService(docSnap.data().Service);
      setContactNumber(docSnap.data().ContactNumber);
      setDesc(docSnap.data().Desc);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Service Name"
                value={Service}
                onChange={(e) => setService(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                value={ContactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Description"
                value={Desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
     
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddService;
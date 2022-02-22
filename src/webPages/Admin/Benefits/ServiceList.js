import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ServiceDataService from "./crud.services";
import "./CRUD.css";

const ServiceList = ({ getServiceId }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const data = await ServiceDataService.getAllService();
    console.log(data.docs);
    setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ServiceDataService.deleteService(id);
    getServices();
  };

  return (
    <div className="app-container">
      <div className="mb-2">
        <Button variant="dark edit" onClick={getServices}>
          Refresh List
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th cosplan = "2" >Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {services.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.Service}</td>
                <td>{doc.ContactNumber}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getServiceId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>


              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;

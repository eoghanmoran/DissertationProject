import { useState } from "react";
import "../../../App.css";
import "./CRUD.css";
import AddService from "./AddService"
import ServiceList from "./ServiceList"
import { Container, Table } from "react-bootstrap";


function App() {

    const [serviceID, setServiceID] = useState("");

    const getServiceIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setServiceID(id);
    };

    return (
        <div className="background">
          <div class="container-fluid">
            <div class="row jumbotron">
              <div class="col-12">
                <h1 class=" text-center display-4">Updates Counselling Support</h1>
              </div>
            </div>
          </div>
            
            <Table responsive bordered className="noWrap">
                <tbody>
                    <tr>
                        <td><ServiceList getServiceId={getServiceIdHandler} /></td>
                    </tr>
                    <tr>
                        <td><AddService id={serviceID} setServiceID={setServiceID}/></td>
                    </tr>
                </tbody>
                </Table>
   
        </div>
);


}

export default App;
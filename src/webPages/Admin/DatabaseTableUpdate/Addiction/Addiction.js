import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import "../../../../App.css";
import AddService from "./AddService"
import ServiceList from "./ServiceList"
import "./CRUD.css";

function App() {

    const [serviceID, setServiceID] = useState("");

    const getServiceIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setServiceID(id);
    };

    return (
        <div className="background">
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td><ServiceList getServiceId={getServiceIdHandler} /></td>
                        </tr>
                        <tr>
                            <td><AddService id={serviceID} setServiceID={setServiceID}/></td>
                        </tr>
                    </tbody>
                </table>
       
            </div>
        </div>
    );


}

export default App;

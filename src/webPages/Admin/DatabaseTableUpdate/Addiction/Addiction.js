import { useState } from "react";
import "../../../../App.css";
import "./CRUD.css";
import AddService from "./AddService"
import ServiceList from "./ServiceList"
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"


function App() {

    const [serviceID, setServiceID] = useState("");

    const getServiceIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setServiceID(id);
    };


    // return (
    //     <div className="background">
    //       <div class="container-fluid">
    //         <div class="row jumbotron">
    //           <div class="col-12">
    //             <h1 class=" text-center display-4">Addiction Support</h1>
    //             {/* <hr class="my-4" />
    //             <h1 class=" text-center lead">Forward South Partnership</h1> */}
    
    //           </div>
    //         </div>
    //       </div>



    return (
        <div className="background">
            <div class="container-fluid">
                <h1 class =" text center display-4">Addiction Support</h1>
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

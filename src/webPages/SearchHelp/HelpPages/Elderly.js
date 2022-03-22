import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"
import { collection, getDocs } from "firebase/firestore";
import "../Help.css";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Footer from "../../../components/Footer";
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"

function CrisishelpDetails() {

  const [Helplines, setHelplines] = useState([]);
  const helplineCollectionRef = collection(db, "OldPersonSupport");

  useEffect(() => {
    const getHelplines = async () => {
      const data = await getDocs(helplineCollectionRef);
      setHelplines(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHelplines();

  }, []);

  return (
    <div className="background">
      <div class="container-fluid">
        <div class="row jumbotron">
          <div class="col-12">
            <h1 class=" text-center display-4">Older Person Support</h1>


          </div>
        </div>
      </div>


      <Table responsive bordered className="noWrap">

        <thead>
          <tr>
            <th class="text-center h2">Service</th>
            <th class="text-center h2">Contact Number</th>
            <th class="text-center h2">Description</th>
          </tr>
        </thead>
        <tbody>
          {Helplines.map((helpline) => {
            return (
              <tr>
                <td class="h4">{helpline.Service}</td>
                <td class="h4">{helpline.ContactNumber}</td>
                <td class="h4">{helpline.Desc}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

export default CrisishelpDetails;

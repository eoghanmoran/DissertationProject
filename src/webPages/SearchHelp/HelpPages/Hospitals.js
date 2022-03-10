import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"
import { collection, getDocs } from "firebase/firestore";
import "../Help.css";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Footer from "../../../components/Footer";
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"

function CrisishelpDetails() {

  const [Helplines, setHelplines] = useState([]);
  const helplineCollectionRef = collection(db, "Hospitals");

  useEffect(() => {
    const getHelplines = async () => {
      const data = await getDocs(helplineCollectionRef);
      setHelplines(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHelplines();

  }, []);

  return (
    <div className="background">


      <Table responsive bordered className="noWrap">

        <thead>
          <tr>
            <th>Service</th>
            <th>Contact Number</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Helplines.map((helpline) => {
            return (
              <tr>
                <td>{helpline.Service}</td>
                <td>{helpline.ContactNumber}</td>
                <td>{helpline.Desc}</td>
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

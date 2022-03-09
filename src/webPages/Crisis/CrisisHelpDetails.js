import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './Crisis.css';
import Table from 'react-bootstrap/Table'
import Footer from "../../components./Footer";

function CrisishelpDetails() {

  const [Helplines, setHelplines] = useState([]);
  const helplineCollectionRef = collection(db, "Helplines");

  useEffect(() => {
    const getHelplines = async () => {
      const data = await getDocs(helplineCollectionRef);
      setHelplines(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHelplines();

  }, []);

  return (
    <div className="background">
      <div className="app-container">
        <Table striped bordered>
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
    </div>
  );
}

export default CrisishelpDetails;


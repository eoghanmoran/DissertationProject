import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './Crisis.css';
import Table from 'react-bootstrap/Table'



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
      <div className="container">
        <Table striped bordered responsive="sm">
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
      </div>
    </div>
  );
}

export default CrisishelpDetails;

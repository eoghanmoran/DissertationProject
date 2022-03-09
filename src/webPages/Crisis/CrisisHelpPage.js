import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './Crisis.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Footer from "../../components/Footer";
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"

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
      <div className="">
        <div className="">
          <Container fluid background-color="white">
            <div className="">
              <h1 className="text-center mb-1" >Urgent Support</h1>
              <h1 class="display-4, text-center"color="white">Forward South Partnership</h1>
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
            </div>

          </Container>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CrisishelpDetails;

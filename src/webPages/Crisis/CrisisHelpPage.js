import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './Crisis.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Container from 'react-bootstrap/Container'
import Footer from "../../components/Footer";


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
        <Table>
          <Thead>
            <Tr>
              <Th>Service</Th>
              <Th>Contact Number</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Helplines.map((helpline) => {
              return (
                <Tr>
                  <Td>{helpline.Service}</Td>
                  <Td>{helpline.ContactNumber}</Td>
                  <Td>{helpline.Desc}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}

export default CrisishelpDetails;

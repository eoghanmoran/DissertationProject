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
            <div class="container-sm">
            <div class= "col-sm">
            <div class = "card-header">
            
            </div>
            
            
                     
              <Table responsive bordered className="noWrap  table table-sm  table-striped table-responsive-stack">
              
              
                <thead>
                  <tr class = "table-borderless">
                    <th class ="font-weight-bold h4">Urgent Services</th>
                    <th class =" font-weight-bold h4">Contact Number</th>
                    <th class =" font-weight-bold h4 text-center">Description</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {Helplines.map((helpline) => {
                    return (
                      <tr >
                        <td class = "font-weight-bold h5">{helpline.Service}</td>
                        <td class = "h5">{helpline.ContactNumber}</td>
                        <td class = "lead">{helpline.Desc}</td>
                        
                      </tr>
                    
                    )
                  })}
                </tbody>
              </Table>
              </div>
             </div>      
      <Footer />
    </div>
  );
}

export default CrisishelpDetails;

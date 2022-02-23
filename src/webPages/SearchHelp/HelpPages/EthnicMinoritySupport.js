import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"
import { collection, getDocs } from "firebase/firestore";
import "../Help.css";
import Footer from "../../../components/Footer";
function CrisishelpDetails() {

  const [Helplines, setHelplines] = useState([]);
  const helplineCollectionRef = collection(db, "EthnicMinoritySupport");

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
        <table align="center"> 
          <thead>
            <tr>
              <th>Service</th>
              <th colspan = "2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {Helplines.map((helpline) => {
              return (
                <tr>
                  <td>{helpline.Service}</td>
                  <td>{helpline.ContactNumber}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default CrisishelpDetails;

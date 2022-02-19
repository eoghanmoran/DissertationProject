import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import './Crisis.css';

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
    <div className="App">
      <div className="app-container">
        <table align="center"> 
          <thead>
            <tr>
              <th>Service</th>
              <th>Contact Number</th>
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
    </div>
  );
}

export default CrisishelpDetails;


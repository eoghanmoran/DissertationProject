import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./SearchBar"
import Footer from '../../components/Footer'
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"
function App() {
  return (

    <div className="background">
      <Container width="80%" fluid background-colour="white">
        <div className="">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <div className="whiteBackground">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>


  );
}

export default App;
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./SearchBar"
import Footer from '../../components/Footer'
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"
function App() {
  return (

    <div className="background">
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <Container fluid background-color="white">
            <div className="whiteBackground">
            <Search />
            </div>
            
          </Container>

        </div>

      </div>
      <Footer/>
    </div>


  );
}

export default App;
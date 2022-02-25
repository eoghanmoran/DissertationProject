import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./SearchBar"
import Footer from '../../components/Footer'
function App() {
  return (
    
      <div className="background">
        <div className="container">
          <div className="whiteBackground">
          <Search />
          </div>
          
        </div>
        <Footer/>
      </div>
      
    
  );
}

export default App;
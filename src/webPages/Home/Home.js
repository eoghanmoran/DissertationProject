import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import '../../App.css';
import { useHistory } from "react-router-dom";
import data from "./data";
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"

export default function Home() {
  const history = useHistory()
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = data.cardData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })


  function handleClick(title) {
    if (title == "Urgent Support") {
      history.push("/crisisHelp");
    } else if (title == "Search For Help") {
      history.push("/searchHelp");
    } else if (title == "Support Map") {
      history.push("/allServicesMap");
    }
    else if (title == "Contact Us") {
      history.push("/contactUs");
    }
  }

  return (

    
    <div className="background">
      <div className="">
        <Container width="80%" fluid background-colour="white">
          <Card>
            <Card.Body>
              <div class="row welcome text-center">
                <div class="col-12">
                  <div className="">

                    <h1 class="display-2 text-info">Forward South Partnership</h1>
                    <blockquote class="blockquote">
                      <p class="mb-0 font-weight-bold ">South Belfast Health and Wellbeing Directory</p>
                    </blockquote>
                    <hr class="my-4" />

                    <div class="col-md-12">
                    </div>
                    <p class="lead">Forward South Partnership (FSP) is a community led regeneration body bringing all sectors together to engage in the social and physical regeneration of South Belfast. FSP is an overarching backbone organization providing infrastructure for organisations to convene and collaborate. We grow capacity, support communities to get stronger- to do things for themselves, using an asset-based approach which builds - people, ideas, skills, and facilities.</p>

                    <p class="lead">South Belfast Health and Wellbeing Directory is a database of services supporting the health and wellbeing of communities in South Belfast which can help you navigate and connect into the work of our many partner organisations.</p>


                    <section className="py-4 container">
                      <div className="row justify-content-center">
                        <div className="col-12 mb-5">
                          <div className="mb-3 col-4 mx-auto text-center">

                          </div>
                        </div>

                        {dataSearch.map((item, index) => {
                          return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" onClick={() => handleClick(item.title)}>

                              <div className="card p-0 overflow-hidden h-100 shadow" >
                                <img src={item.img} alt="Navigation Cards" className="card-img-top"></img>
                                <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>

                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer />
    </div>



  );
}
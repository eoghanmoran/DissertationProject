import React, { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";

const Search = () => {

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
    if (title == "Addiction Support") {
      history.push("/addictionSupport");
    } else if (title == "Benefits Support") {
      history.push("/benefitSupport");
    } else if (title == "Bereavement Support") {
      history.push("/bereavementSupport");
    }
    else if (title == "Cancer Support") {
      history.push("/cancerSupport");
    }
    else if (title == "Carers Support") {
      history.push("/carerSupport");
    }
    else if (title == "Community Organisations") {
      history.push("/communityOrganisation");
    }
    else if (title == "Counselling") {
      history.push("/counsellingSupport");
    }
    else if (title == "Disability Support") {
      history.push("/disabilitySupport");
    }
  }
  
  return (
    <div className="background">
      <div className="container">
        <div className="whiteBackground">
          <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center">
                  <label className="form-label h4">Search</label>
                  <input
                    type="text"
                    className="from-control"
                    value={filter}
                    onChange={searchText.bind(this)}
                  />
                </div>
              </div>

              {dataSearch.map((item, index) => {
                return (
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" onClick={() => handleClick(item.title)}>

                    <div className="card p-0 overflow-hidden h-100 shadow" >
                      <img src={item.img} className="card-img-top"></img>
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
      <Footer />
    </div>

  )
}

export default Search;
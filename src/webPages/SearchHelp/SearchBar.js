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

    } else if (title == "Benefits, Debt & Employment Advice") {
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
    else if (title == "Chronic Conditions") {
      history.push("/chronicConditions");
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
    else if (title == "Ethnic Minority Support") {
      history.push("/ethnicMinoritySupport");
    }
    else if (title == "Family & Childcare Support") {
      history.push("/familyChildcareSupport");
    }
    else if (title == "Heart & Circulatory Disease Support") {
      history.push("/heartCirculatory");
    }
    else if (title == "Helpline Support") {
      history.push("/helplines");
    }
    else if (title == "Homelessness Support") {
      history.push("/homelessnessSupport");
    }
    else if (title == "Local Healthcare") {
      history.push("/hospitals");
    }
    else if (title == "Mental Health Support") {
      history.push("/mentalHealthSupport");
    }
    else if (title == "Older Person Support") {
      history.push("/elderlySupport");
    }
    else if (title == "Relationships, Sexuality & Sexual Health Support") {
      history.push("/relationshipSupport");
    }
    else if (title == "Sexual Orientation & Transgender Groups") {
      history.push("/sexualOrientationSupport");
    }
    else if (title == "Violence/Trauma Support") {
      history.push("/violenceTraumaSupport");
    }
    else if (title == "Women Support") {
      history.push("/womenSupport");
    }
    else if (title == "Young People Support") {
      history.push("/youngPeopleSupport");
    }
  }
  
  return (
          <section className="py-4 container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 mb-5">
                <div className="justify-content-center">
                <h1 className="text-center display-4"> Search</h1> 
                <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" 
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



  )
}

export default Search;


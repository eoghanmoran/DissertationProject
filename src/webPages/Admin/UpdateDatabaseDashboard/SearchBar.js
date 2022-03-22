import React, { useState } from "react";
import data from "./Data";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Footer";

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
            history.push("/updateAddiction");
        } else if (title == "Benefits Support") {
            history.push("/updateBenefits");
        } else if (title == "Bereavement Support") {
            history.push("/updateBereavement");
        }
        else if (title == "Cancer Support") {
            history.push("/updateCancerSupport");
        }
        else if (title == "Carers Support") {
            history.push("/updateCarers");
        }
        else if (title == "Community Organisations") {
            history.push("/updateCommunityOrganisations");
        }
        else if (title == "Counselling") {
            history.push("/updateCounselling");
        }
        else if (title == "Chronic Conditions") {
            history.push("/updateChronicConditions");
        }
        else if (title == "Disability Support") {
            history.push("/updateDisabilitySupport");
        }
        else if (title == "Ethnic Minority Support") {
            history.push("/updateEthnicMinoritySupport");
        }
        else if (title == "Family & Childcare Support") {
            history.push("/updateFamilyChildcareSupport");
        }
        else if (title == "Heart & Circulatory Disease Support") {
            history.push("/updateHeartCirculatoryDisease");
        }
        else if (title == "Helplines") {
            history.push("/updateHelplines");
        }
        else if (title == "Homelessness Support") {
            history.push("/updateHomelessness");
        }
        else if (title == "Hospitals") {
            history.push("/hospitals");
        }
        else if (title == "Mental Health Support") {
            history.push("/updateMentalHealth");
        }
        else if (title == "Elderly Support") {
            history.push("/updateOldPersonSupport");
        }
        else if (title == "Relationships/Sexuality Support") {
            history.push("/updateRelationshipSexualitySupport");
        }
        else if (title == "LGBT Support") {
            history.push("/updateSexOrientationTransGroups");
        }
        else if (title == "Violence/Trauma Support") {
            history.push("/updateViolenceTraumaSupport");
        }
        else if (title == "Women Support") {
            history.push("/updateWomenSupport");
        }
        else if (title == "Young People Support") {
            history.push("/updateYoungPeopleSupport");
        }
    }

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                    <p>Please select a table to update</p>
                    <h1></h1>
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



    )
}

export default Search;


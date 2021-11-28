import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import HelpList from "./HelpList";
import "./BrowseAllHelp.css";

const Charities = ({ match }) => {

    const helpData = [
        {
          id: 1,
          name: "Charity name: 1 ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
          status: "mental health support",
        },
        {
          id: 2,
          name: "Charity name: 2",
          description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
          status: "mental health support",
        },
        {
          id: 3,
          name: "Charity name: 3",
          description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
          status: "mental health support",
        },
        {
          id: 4,
          name: "Charity name: 4",
          description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
          status: "mental health support",
        },
      ];
    
  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
  const linkList = helpData.map((HelpList) => {
    return (

     
     < li key={HelpList.id}> 
        <Link to={`${url}/${HelpList.id}`}>{HelpList.name}</Link>
      </li>
     
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>All Help Available </h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:helpListId`}>

        
        <HelpList data={helpData} />
      
      </Route>
      <Route exact path={url}>
        <p>Please select a Charity to learn more about.</p>



  




      </Route>
    </div>
  );
};

export default Charities;
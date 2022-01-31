
import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import HelpList from "../../HelpList";
import "./BrowseAllHelpDetails.js";
import '../../App.css';

const Charities = ({ match }) => {

    const helpData = [
        {
          id: 1,
          name: "Belfast Carers Centre ",
          description:
            " Contact Number: 90434700",
          status: "Mental Health Support",
        },
        {
          id: 2,
          name: "Belfast Trust Carers Co-ordinator",
          description:
            " Contact Number: 90636819",
          status: "Mental Health Support",
        },
        {
          id: 3,
          name: "Carers NI ",
          description:
            " Contact Number: 90439843",
          status: "mental health support",
        },
        {
          id: 4,
          name: "CAUSE",
          description:
            "Contact Number: 90238284 ",
          status: "Mental Health Support",
        },
        {
        id: 5,
        name: "CAUSE Helpline",
        description:
          " 365 days 9am – 9pm Contact Number: 90238284 ",
        status: "Mental Health Support",
      },
      {
        id: 6,
        name: "Crossroads",
        description:
          "Contact Number: 91814455 ",
        status: "Mental Health Support",
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

          <h4> Select a charity to learn more: </h4>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:helpListId`}>

        
        <HelpList data={helpData} />
      
      </Route>
      <Route exact path={url}>

      </Route>
    </div>
  );
};

export default Charities;
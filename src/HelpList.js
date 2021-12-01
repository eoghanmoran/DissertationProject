import React from "react";
import { useParams } from "react-router-dom";

const HelpList = ({ data }) => {
  const { helpListId } = useParams();
  const helpList = data.find(p => p.id === Number(helpListId));
  let helpListData;
  if (helpList) {
    helpListData = (
      <div>
        <h3> {helpList.name} </h3>
        <p>{helpList.description}</p>
        <hr />
        <h4>{helpList.status}</h4>
      </div>
    );
  } else {
    helpListData = <h2> Sorry. This service doesnt exist </h2>;
  }
  return (
    <div>
      <div>{helpListData}</div>
    </div>
  );
};
export default HelpList;
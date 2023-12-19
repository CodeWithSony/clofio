import React from "react";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import {heading, data, columns, Tabledata, Tabledata2} from "../../constants";
import Tables from "../Tables/Tables";

const Mainbar = () => {
 

  return (
    <>
      <Header />

      <div
        className="bigContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((dat, index) => (
          <Cards bg={dat.bg} key={index}>
            <h3>{dat.price}</h3>
            <p>{dat.title}</p>
          </Cards>
        ))}
      </div>

      <Tables heading={heading} data={Tabledata} columns={columns}/>
      <Tables heading={heading} data={Tabledata2} columns={columns}/>

    </>
  );
};

export default Mainbar;

/* import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components"; */
import { rainData } from "../../utils/interpolationData";
import Pluvio from "../../utils/tabela";
import Table from "../../components/Table";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";

/* const Button = styled(Link)`
  width: 100px;
  height: 50px;
  padding: 10px;
  background-color: tomato;
  text-align: center;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
`; */
function Home() {
  const [ cityPluvio, setCityPluvio ] = useState(() => new Pluvio(rainData));
  const [ graphic, setGraphic ] = useState(() => cityPluvio.rainIntensityGumbel());

  return (
    <div style={{width:"100vw", height:"100vh", display: "flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}}>
      <Dropdown setGraphic={setGraphic} cityPluvio={cityPluvio} />
      <Table graphic={graphic} ></Table>
    </div>
  );
}

export default Home;

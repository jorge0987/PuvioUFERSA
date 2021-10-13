/* import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components"; */
import { rainData } from "../../utils/interpolationData";
import Pluvio from "../../utils/tabela";
import Table from "../../components/Table";

const cityPluvio = new Pluvio(rainData);
cityPluvio.manageData();

type data = {
  duration: number;
  data: number[];
}[];

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
  //console.dir(func);
  const graphic = cityPluvio.rainIntensity();
  //console.log(cityPluvio.rainIntensityGumbel());

  return (
    <div>
      <p>PluvioUFERSA</p>
      <Table graphic = {graphic} />
    </div>
  )
}

export default Home;

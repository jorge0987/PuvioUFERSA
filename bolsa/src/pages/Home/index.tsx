/* import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components"; */
import { rainData } from "../../utils/interpolationData";
import func from "../../utils/tabela";

func.manageData(rainData);

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
  return (
    <div>
      <p>PluvioUFERSA</p>
    </div>
  )
}

export default Home;

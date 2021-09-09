import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { Link } from "react-router-dom";
import func from "../../utils/tabela";
import styled from "styled-components";


const Button = styled(Link)`
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
`;

function Home() {
  var h24 = func.h_24();
  var h12 = func.h_12();
  var h10 = func.h_10();
  var h8 = func.h_8();
  var h6 = func.h_6();
  var h3 = func.h_3();
  var h2 = func.h_2();
  var h1 = func.h_1();
  var h030 = func.h_030();
  var h025 = func.h_025();
  var h020 = func.h_020();
  var h015 = func.h_015();
  var h010 = func.h_010();
  var h05 = func.h_05();

  var [h05min, media5min] = func.h_05min();
  var [h10min, media10min] = func.h_10min();
  var [h15min, media15min] = func.h_15min();
  var [h20min, media20min] = func.h_20min();
  var [h25min, media25min] = func.h_25min();
  var [h30min, media30min] = func.h_30min();
  var [h120min, media120min] = func.h_120min();
  var [h180min, media180min] = func.h_180min();
  var [h360min, media360min] = func.h_360min();
  var [h480min, media480min] = func.h_480min();
  var [h600min, media600min] = func.h_600min();
  var [h720min, media720min] = func.h_720min();
  var [h1440min, media1440min] = func.h_1440min();
  
  var [n,  Yn, Sn, y] = func.variavel_reduzida();
  var Resultado = func.interpolacao();
  var P_resultante = func.periodo_retorno_resultante();
  //console.log(y);

  const desvioPadrao = (lista: any, media: any) => {
    let variancia = lista.reduce(
      (total: any, valor: any) =>
        total + Math.pow(media - valor, 2) / lista.length,
      0
    );
    return Math.sqrt(Number(variancia));
  };
  return (
    <PageTemplate>
      <h1>Home</h1>
      <br />
      <div
        style={{
          display: "flex",
          width: "calc(100vw - 100px)",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>24h/1dia</h3>
          
            {h24.map((e) => {
              return <p>{e.toFixed(2)}</p>;
            })}
         
        </div>
        <div>
          <h3>12h/24h</h3>
          {h12.map((e) => {
            return (
              
                <p>{e.toFixed(2)}</p>
              
            );
          })}
        </div>
        <div>
          <h3>10h/24h</h3>
          {h10.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>8h/24h</h3>
          {h8.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>6h/24h</h3>
          {h6.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>3h/24h</h3>
          {h3.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>2h/24h</h3>
          {h2.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>1h/24h</h3>
          {h1.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>30min/1hr</h3>
          {h030.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>25min/30min</h3>
          {h025.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>20min/30min</h3>
          {h020.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>15min/30min</h3>
          {h015.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>10min/30min</h3>
          {h010.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>05min/30min</h3>
          {h05.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <p>
        <h3> TABELA DE DURAÇÃO EM MINUTOS </h3>{" "}
      </p>
      <br />
      <div
        style={{
          display: "flex",
          width: "calc(100vw - 100px)",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <br />
          {media5min} <br />
          {desvioPadrao(h05min, media5min)}
          <h3>05min</h3>
          {h05min.map((e: any, index: any) => {
            return (
              <div style={{ height: "23px" }}>{h05min[index].toFixed(2)}</div>
            );
          })}
        </div>
        <div>
          <br />
          {media10min}
          <br />

          {desvioPadrao(h10min, media10min).toFixed(2)}
          <br />
          <h3>10 minutos</h3>
          {h10min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h10min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media15min}
          <br />
          {desvioPadrao(h15min, media15min).toFixed(2)} <br />
          <h3>15min</h3>
          {h15min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h15min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media20min}
          <br />
          {desvioPadrao(h20min, media20min).toFixed(2)}
          <h3>20min</h3>
          {h20min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h20min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media25min}
          <br />

          {desvioPadrao(h25min, media25min).toFixed(2)}
          <h3>25min</h3>
          {h25min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h25min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media30min}
          <br />

          {desvioPadrao(h30min, media30min).toFixed(2)}
          <h3>30min</h3>
          {h30min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h30min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          <h3>60min</h3>
          {h1.map((e) => {
            return (
              <table>
                <tr>{e.toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media120min}
          <br />

          {desvioPadrao(h120min, media120min).toFixed(2)}
          <h3>120min</h3>
          {h120min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h120min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media180min}
          <br />

          {desvioPadrao(h180min, media180min).toFixed(2)}
          <h3>180min</h3>
          {h180min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h180min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media360min}
          <br />

          {desvioPadrao(h360min, media360min).toFixed(2)}
          <h3>360min</h3>
          {h360min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h360min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media480min}
          <br />

          {desvioPadrao(h480min, media480min).toFixed(2)}
          <h3>480min</h3>
          {h480min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h480min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media600min}
          <br />

          {desvioPadrao(h600min, media600min).toFixed(2)}
          <h3>600min</h3>
          {h600min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h600min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media720min}
          <br />

          {desvioPadrao(h720min, media720min).toFixed(2)}
          <h3>720min</h3>
          {h720min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h720min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
        <div>
          {media1440min}
          <br />

          {desvioPadrao(h1440min, media1440min).toFixed(2)}
          <h3>1440min</h3>
          {h1440min.map((e: any, index: any) => {
            return (
              <table>
                <tr>{h1440min[index].toFixed(2)}</tr>
              </table>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <p>
        <h3> TABELA DE VARIAVEIS </h3>{" "}
      </p>
      <br />

      <div></div>
      <div
        style={{
          display: "flex",
          width: "calc(80vw - 80px)",
          justifyContent: "space-between",
        }}
        >
        
          <div>
            
          {n.map((e:any) =>{
            return (
              <p>{e} <br/> </p>
              );
            }
            )}
            </div>
            <div>
           
          {Yn.map((e:any) =>{
            return (
              <p>{e} <br/> </p>
              );
            }
            )}
            </div>
            <div>
            
          {Sn.map((e:any) =>{
            return (
              <p>{e} <br/> </p>
              );
            }
            )}
            </div>
            <div>
            
            {y.map((e:any) =>{
              return (
                <p>{e.toFixed(2)} <br/> </p>
                );
              }
              )}
              </div>
        </div>

       {/* {
                teste.map((e)=>{
                    return(
                        <table>
                            <tr>{(e*1.14*0.42*0.74).toFixed(2)}</tr>
                        </table>
                    );
                })
            } */}
    </PageTemplate>
  );
}

export default Home;

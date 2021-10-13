import React from "react";

/* type data = {
    duration: number;
    data: number[];
}[]; */

function columnToRow(graphic) {
  let newGraphic = [];
  for (let idx = 0; idx < graphic[0].data.length; idx++) {
    newGraphic[idx] = { data: [] };
  }

  graphic.forEach((x, i) => {
    x.data.forEach((y, l) => {
      newGraphic[l].data[i] = {};
      newGraphic[l].data[i].value = y;
      newGraphic[l].data[i].label = x.duration;
    });
  });

  return newGraphic;
}

export default function Table({ graphic }) {
  //tr linhas | td colunas de cada linha
  const newGraphic = columnToRow(graphic);
  console.log(newGraphic)
  return (
    <table>
      <thead>
        <tr>
          {newGraphic[0].data.map((data, index) => {
            return (
                <td key={index + "header"}>{data.label}</td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {newGraphic.map((array, index) => {
          return (
            <tr key={index + "row"}>
              {array.data.map((data, idx) => {
                return <td key={idx + "column"}>{data.value.toFixed(2)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

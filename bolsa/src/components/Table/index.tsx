import React from "react";
import { RainData } from "../../types/rainData";
import * as P from './styles';

/* type data = {
    duration: number;
    data: number[];
}[]; */

function columnToRow(graphic: RainData): RainData {
  let newGraphic: RainData = [];

  graphic.forEach((x, i) => {
    x.data.forEach((y, l) => {
      if (!newGraphic[l])
        newGraphic[l] = {label: y.label, data: [{value: 0, label: 0}]};

      newGraphic[l].data[i] = { value: 0, label: 0 };
      newGraphic[l].data[i].value = y.value;
      newGraphic[l].data[i].label = x.label;
    });
  });

  return newGraphic;
}

type Props = {
  graphic: RainData
}

export default function Table({ graphic }: Props): JSX.Element {
  //tr linhas | td colunas de cada linha
  const newGraphic = columnToRow(graphic);
  console.log(newGraphic);
  return (
    <P.Table>
      <thead>
        <tr>
          <td>     </td>
          {newGraphic[0].data.map((data, index) => {
            return <td key={index + "header"}>{data.label}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {newGraphic.map((array, index) => {
          return (
            <tr key={index + "row"}>
              <td key={index + "column"}>{array.label}</td>
              {array.data.map((data, idx) => {
                return (
                  <td key={idx + "column"}>{data.value.toFixed(2)}</td>
                )
              })}
            </tr>
          );
        })}
      </tbody>
    </P.Table>
  );
}

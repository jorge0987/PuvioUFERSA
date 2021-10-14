// eslint-disable-next-line import/no-anonymous-default-export
//import { ObjectFlags } from "typescript";
import { interData } from "./interpolationData";
import { RainData } from "../types/rainData";

const disaCoef = {
  h_5to30: 0.34,
  h_10to30: 0.54,
  h_15to30: 0.7,
  h_20to30: 0.81,
  h_25to30: 0.91,
  h_30to1: 0.74,
  h_1to24: 0.42,
  h_2to24: 0.48,
  h_3to24: 0.54,
  h_6to24: 0.72,
  h_8to24: 0.78,
  h_10to24: 0.82,
  h_12to24: 0.85,
  h_24to1: 1.14,
};

interface pluvio extends Pluvio {
  rainData: { ano: number; chuva: number }[];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default class Pluvio implements pluvio {
  rainData: { ano: number; chuva: number }[];
  constructor(rainData: { ano: number; chuva: number }[]) {
    this.rainData = rainData;
  }

  duration = [5, 10, 15, 20, 25, 30, 60, 120, 180, 360, 480, 600, 720, 1440];
  t_retorno = [2, 5, 10, 15, 20, 25, 50, 100, 500];

  h_24(rainData: { ano: number; chuva: number }[]) {
    //console.log(dadosChuva.map(valor => valor * disaCoef.h_24to1));
    return rainData.map((x) => ({
      value: x.chuva * disaCoef.h_24to1,
      label: x.ano,
    }));
  }

  h_12(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_12to24,
      label: x.label,
    }));
  }

  h_10(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_10to24,
      label: x.label,
    }));
  }

  h_8(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_8to24,
      label: x.label,
    }));
  }

  h_6(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_6to24,
      label: x.label,
    }));
  }

  h_3(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_3to24,
      label: x.label,
    }));
  }

  h_2(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_2to24,
      label: x.label,
    }));
  }

  h_1(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value * disaCoef.h_1to24,
      label: x.label,
    }));
  }

  h_030(rainData: { ano: number; chuva: number }[]) {
    return this.h_1(rainData).map((x) => ({
      value: x.value * disaCoef.h_30to1,
      label: x.label,
    }));
  }

  h_025(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value * disaCoef.h_25to30,
      label: x.label,
    }));
  }

  h_020(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value * disaCoef.h_20to30,
      label: x.label,
    }));
  }

  h_015(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value * disaCoef.h_15to30,
      label: x.label,
    }));
  }

  h_010(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value * disaCoef.h_10to30,
      label: x.label,
    }));
  }

  h_05(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value * disaCoef.h_5to30,
      label: x.label,
    }));
  }

  // Tabelas de duração em minutos

  h_05min(rainData: { ano: number; chuva: number }[]) {
    //let p =
    return this.h_05(rainData).map((x) => ({
      value: x.value / (5 / 60),
      label: x.label,
    }));
    /*   p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_10min(rainData: { ano: number; chuva: number }[]) {
    return this.h_010(rainData).map((x) => ({
      value: x.value / (10 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_15min(rainData: { ano: number; chuva: number }[]) {
    return this.h_015(rainData).map((x) => ({
      value: x.value / (15 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_20min(rainData: { ano: number; chuva: number }[]) {
    return this.h_020(rainData).map((x) => ({
      value: x.value / (20 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_25min(rainData: { ano: number; chuva: number }[]) {
    return this.h_025(rainData).map((x) => ({
      value: x.value / (25 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_30min(rainData: { ano: number; chuva: number }[]) {
    return this.h_030(rainData).map((x) => ({
      value: x.value / (30 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_60min(rainData: { ano: number; chuva: number }[]) {
    // TABELA IGUAL A DE 1/24 PARA ECONOMIA DE PROCESSAMENTO IREI REPETIR A MESM
    return this.h_1(rainData);
  }

  h_120min(rainData: { ano: number; chuva: number }[]) {
    return this.h_2(rainData).map((x) => ({
      value: x.value / (120 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_180min(rainData: { ano: number; chuva: number }[]) {
    return this.h_3(rainData).map((x) => ({
      value: x.value / (180 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_360min(rainData: { ano: number; chuva: number }[]) {
    return this.h_6(rainData).map((x) => ({
      value: x.value / (360 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_480min(rainData: { ano: number; chuva: number }[]) {
    return this.h_8(rainData).map((x) => ({
      value: x.value / (480 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_600min(rainData: { ano: number; chuva: number }[]) {
    return this.h_10(rainData).map((x) => ({
      value: x.value / (600 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_720min(rainData: { ano: number; chuva: number }[]) {
    return this.h_12(rainData).map((x) => ({
      value: x.value / (720 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_1440min(rainData: { ano: number; chuva: number }[]) {
    return this.h_24(rainData).map((x) => ({
      value: x.value / (1440 / 60),
      label: x.label,
    }));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  interpolation(n: number) {
    //n = array.length
    let aux = 0;

    for (let i = 0; i < interData.length; i++) {
      if (interData[i].n < n) aux = i;
      if (interData[i].n === n) return { ...interData[i] };
    }

    if (typeof interData[aux + 1] === "undefined")
      return {
        n,
        Sn: 1.28,
        Yn: 0.57,
      };

    //sLB = smaller Less Bigger
    // sLC = smaller Less Current
    let sLB_N = interData[aux].n - interData[aux + 1].n; //-10
    let sLC_N = interData[aux].n - n; //-7

    let sLB_Sn = interData[aux].Sn - interData[aux + 1].Sn; //-0,010
    let interSn = (sLC_N * sLB_Sn + -sLB_N * interData[aux].Sn) / -sLB_N;

    let sLB_Yn = interData[aux].Yn - interData[aux + 1].Yn;
    //Veificar se está correto!
    let interYn = (sLC_N * sLB_Yn + -sLB_N * interData[aux].Yn) / -sLB_N;

    return {
      n,
      Sn: interSn,
      Yn: interYn,
    };
  }

  getAverage(array: number[]) {
    return array.reduce((prev, current) => prev + current) / array.length;
  }

  getStandardDeviation(array: number[]) {
    const n = array.length;
    const mean = this.getAverage(array);
    return Math.sqrt(
      array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
  }

  YReduzido(t: number) {
    //return this.t_retorno.map((t) => -Math.log(-Math.log(1-(1/t))));
    return -Math.log(-Math.log(1 - 1 / t));
  }

  extremePrecipitation(
    array: { value: number; label: number }[],
    length: number
  ) {
    let inter = this.interpolation(length);

    const exP: number[] = [];
    let stdDev = this.getStandardDeviation(array.map((x) => x.value));
    let average = this.getAverage(array.map((x) => x.value));

    for (let t of this.t_retorno) {
      exP.push(average + (stdDev * (this.YReduzido(t) - inter.Yn)) / inter.Sn);
    }

    /* for (let i = 0; i < array.length; i++) {
      exP.push(stdDev + ((average  * (this.YReduzido(t) - inter.Yn)) / inter.Sn));
    }  */

    return exP;
  }

  getR2(log10Array: number[], logTPlusB: number[]) {
    //let log10Array = array.map(value => Math.log10(value));
    //let logTPlusB = this.duration.map(value => Math.log10(value + b));

    let averageX = this.getAverage(log10Array);
    let averageY = this.getAverage(logTPlusB);

    let xlessAverage = log10Array.map((value) => value - averageX);
    let ylessAverage = logTPlusB.map((value) => value - averageY);

    let numerator = xlessAverage.reduce(
      (prev, pos, index) => prev + pos * ylessAverage[index],
      0
    );

    let xSumPow2 = xlessAverage
      .map((value) => value ** 2)
      .reduce((prev, pos) => prev + pos, 0);
    let ySumPow2 = ylessAverage
      .map((value) => value ** 2)
      .reduce((prev, pos) => prev + pos, 0);
    let denominator = Math.sqrt(xSumPow2 * ySumPow2);

    return (numerator / denominator) ** 2;
  }

  slope(y: number[], x: number[]) {
    //const y = data.map(value => Math.log10(value)); //log(t)
    //const x = this.duration.map(t => Math.log10(t + b)); //log(duration+b)

    let averageY = this.getAverage(y);
    let averageX = this.getAverage(x);

    let ylessAverage = y.map((value) => value - averageY);
    let xlessAverage = x.map((value) => value - averageX);

    let numerator = ylessAverage.reduce(
      (prev, pos, index) => prev + pos * xlessAverage[index],
      0
    );
    let denominator = xlessAverage
      .map((value) => value ** 2)
      .reduce((prev, pos) => prev + pos, 0);

    return numerator / denominator;
  }

  intercept(y: number[], x: number[]) {
    //const y = data.map(value => Math.log10(value)); //log(t)
    //const x = this.duration.map(t => Math.log10(t + b)); //log(duration+b)

    let averageY = this.getAverage(y);
    let averageX = this.getAverage(x);

    let ylessAverage = y.map((value) => value - averageY);
    let xlessAverage = x.map((value) => value - averageX);

    let numerator = ylessAverage.reduce(
      (prev, pos, index) => prev + pos * xlessAverage[index],
      0
    );
    let denominator = xlessAverage
      .map((value) => value ** 2)
      .reduce((prev, pos) => prev + pos, 0);

    return averageY - (numerator / denominator) * averageX;
  }

  matrixToArray(matrix: RainData): number[] {
    let array: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].data.length; j++) {
        array.push(matrix[i].data[j].value);
      }
    }
    return array;
  }

  rainIntensity(): RainData {
    const rainIntensityGraphic: RainData = [
      { label: 5, data: this.h_05min(this.rainData) },
      { label: 10, data: this.h_10min(this.rainData) },
      { label: 15, data: this.h_15min(this.rainData) },
      { label: 20, data: this.h_20min(this.rainData) },
      { label: 25, data: this.h_25min(this.rainData) },
      { label: 30, data: this.h_30min(this.rainData) },
      { label: 60, data: this.h_60min(this.rainData) },
      { label: 120, data: this.h_120min(this.rainData) },
      { label: 180, data: this.h_180min(this.rainData) },
      { label: 360, data: this.h_360min(this.rainData) },
      { label: 480, data: this.h_480min(this.rainData) },
      { label: 600, data: this.h_600min(this.rainData) },
      { label: 720, data: this.h_720min(this.rainData) },
      { label: 1440, data: this.h_1440min(this.rainData) },
    ];

    return rainIntensityGraphic;
  }

  rainIntensityGumbel(): RainData {
    const rainIntensityGraphic = this.rainIntensity();
    const rainIntensityGumbelGraphic: RainData = [];

    this.t_retorno.forEach((x, index) => {
      rainIntensityGumbelGraphic[index] = { label: 0, data: [] };
      rainIntensityGumbelGraphic[index].label = x;
      let aux: { value: number; label: number }[] = [];
      for (let i = 0; i < rainIntensityGraphic.length; i++) {
        aux[i] = { value: 0, label: 0 };
        let a = this.extremePrecipitation(
          rainIntensityGraphic[i].data,
          this.rainData.length
        );
        aux[i].value = a[index] / 60; //colocar em minutos
        aux[i].label = this.duration[i]; //colocar em minutos
      }
      rainIntensityGumbelGraphic[index].data = aux;
    }); //Versão com os valores de duração para cada t (É o que será usado nos calculos de b);

    return rainIntensityGumbelGraphic;
  }

  IDF_Equation(): RainData {
    const b = this.parameterB();
    const a = this.parameterA();
    const k = this.parameterK();
    const c_average = this.parameterC();

    const IDF: RainData = [];

    this.t_retorno.forEach((t, index) => {
      IDF[index] = { label: t, data: [] };
      IDF[index].data = this.duration.map((min) => ({
        value: (k * t ** a) / (min + b) ** c_average,
        label: min,
      }));
    });
    return IDF;
  }

  manageData(): void {
    console.log("b:", this.parameterB());
    console.log("a:", this.parameterA());
    console.log("k:", this.parameterK());
    console.log("c_médio:", this.parameterC());
    console.log("R2", this.parameterR2());
  }

  parameterB(): number {
    const rainIntensityGumbelGraphic = this.rainIntensityGumbel();
    //let b = this.parameterB(rainIntensityGumbelGraphic[2].data, 10); //9.778499999999816
    const array = rainIntensityGumbelGraphic[2].data;

    let b: number = 0,
      i: number = 9.7 /* = 0 */,
      current: number = 0,
      aux: number = 0;

    while (current >= aux) {
      aux = current;
      i += 0.0001;
      let logTplusB: number[] = [];
      for (let min of this.duration) {
        logTplusB.push(Math.log10(min + b));
      }
      current = this.getR2(
        array.map((x) => Math.log10(x.value)),
        logTplusB
      );
      //this.duration.map(min => Math.log10(min + b)); I don't know why EsLint complains about this syntax!
      b = i;
    }

    return b;
  }

  parameterC(): number {
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const n: number[] = [];

    rainIntensity.forEach((obj) => {
      n.push(
        this.slope(
          obj.data.map((x) => Math.log10(x.value)),
          this.duration.map((t) => Math.log10(t + b))
        )
      );
    });
    return -this.getAverage(n);
  }

  parameterA(): number {
    //console.log(this.parameterA(rainIntensityGumbelGraphic, b));
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const logC: number[] = [];

    rainIntensity.forEach((obj) => {
      logC.push(
        this.intercept(
          obj.data.map((x) => Math.log10(x.value)),
          this.duration.map((t) => Math.log10(t + b))
        )
      );
    });

    const logT = this.t_retorno.map((t) => Math.log10(t));
    return this.slope(logC, logT);
  }

  parameterK() {
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const logC: number[] = [];

    rainIntensity.forEach((obj) => {
      logC.push(
        this.intercept(
          obj.data.map((x) => Math.log10(x.value)),
          this.duration.map((t) => Math.log10(t + b))
        )
      );
    });

    const logT = this.t_retorno.map((t) => Math.log10(t));
    return 10 ** this.intercept(logC, logT) * 60; //Em horas!
  }

  parameterR2(): number {
    const IDFArray = this.matrixToArray(this.IDF_Equation());
    const gumbelArray = this.matrixToArray(this.rainIntensityGumbel());

    return this.getR2(IDFArray, gumbelArray);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
//import { ObjectFlags } from "typescript";
import { interData } from "./interpolationData";


/* const  dadosChuva = [
  //{ ano: 1964, chuva: 114.0 },
  141.0, 118.4, 127.4, 52.4, 90.3, 62.5, 50.3, 65.4, 81.0, 49.6, 124.2,
  112.0, 44.2, 80.6, 48.0, 47.0, 45.8, 56.4, 56.4, 35.8, 111.0, 111.6, 48.7,
  37.6, 53.3, 67.0, 45.0, 77.0, 38.6, 19.4, 69.8, 90.0, 65.6, 89.0, 45.0,
  73.0, 63.0, 50.0, 99.0, 54.0, 96.0, 71.1, 48.5, 65.6, 48.2, 86.6, 137.5,
  97.5, 21.5, 203.5, 28.0, 47.0, 50.0, 120.0, 53.0, 49.0, 86.0,
]; */

const disaCoef = {
  h_5to30: 0.34,
  h_10to30: 0.54,
  h_15to30: 0.70,
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
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {  
  //Criar constructor
  h_24(dadosChuva: number[]) {    
    //console.log(dadosChuva.map(valor => valor * disaCoef.h_24to1));
    return dadosChuva.map(valor => valor * disaCoef.h_24to1);
  },
  
  h_12(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_12to24);   
  },

  h_10(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_10to24)
  },

  h_8(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_8to24);
  },

  h_6(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_6to24);
  },

  h_3(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_3to24);
  },

  h_2(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_2to24);
  },

  h_1(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_1to24);
  },

  h_030(dadosChuva: number[]) {
    return this.h_1(dadosChuva).map(valor => valor * disaCoef.h_30to1);
  },
  
  h_025(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_25to30);
  },

  h_020(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_20to30);
  },

  h_015(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_15to30);
  },

  h_010(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_10to30);
  },

  h_05(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_5to30);
  },
  
  // Tabelas de duração em minutos

  h_05min(dadosChuva: number[]) {
    //let p = 
    return this.h_05(dadosChuva).map(valor => valor / (5 / 60));
    /*   p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_10min(dadosChuva: number[]) {
    return this.h_010(dadosChuva).map((valor) => valor / (10 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_15min(dadosChuva: number[]) {
    return this.h_015(dadosChuva).map((valor) => valor / (15 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_20min(dadosChuva: number[]) {
   return this.h_020(dadosChuva).map((valor) => valor / (20 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_25min(dadosChuva: number[]) {
    return this.h_025(dadosChuva).map((valor) => valor / (25 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },
  
  h_30min(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map((valor) => valor / (30 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_60min(dadosChuva: number[]) {
    // TABELA IGUAL A DE 1/24 PARA ECONOMIA DE PROCESSAMENTO IREI REPETIR A MESM
    return this.h_1(dadosChuva);
  },

  h_120min(dadosChuva: number[]) {
    return this.h_2(dadosChuva).map((valor) => valor / (120 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_180min(dadosChuva: number[]) {
    return this.h_3(dadosChuva).map((valor) => valor / (180 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_360min(dadosChuva: number[]) {
    return this.h_6(dadosChuva).map((valor) => valor / (360 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_480min(dadosChuva: number[]) {
    return this.h_8(dadosChuva).map((valor) => valor / (480 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_600min(dadosChuva: number[]) {
    return this.h_10(dadosChuva).map((valor) => valor / (600 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },

  h_720min(dadosChuva: number[]) {
    return this.h_12(dadosChuva).map((valor) => valor / (720 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },
  
  h_1440min(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map((valor) => valor / (1440 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  },


  interpolacao() {
    const  n =  [  20,   30,   40,   50,   60,   70,   80,   90,  100,  150,  200];
    const Yn = [ 0.52, 0.54, 0.54, 0.55, 0.55, 0.55, 0.56, 0.56, 0.56, 0.56, 0.57, 0.57];
    const Sn = [ 1.06, 1.11, 1.14, 1.16, 1.17, 1.19, 1.19, 1.20, 1.21, 1.23, 1.24, 1.28];


    return [ n, Yn, Sn ];
  },
  
  interpolation(n: number) {
    //n = array.length
    let aux = 0;

    for (let i = 0; i < interData.length; i++) {
      if (interData[i].n < n) aux = i ;
      if (interData[i].n === n) return { ...interData[i] };
    }

    if(typeof interData[aux+1] === 'undefined') return {
      n,
      Sn: 1.28,
      Yn: 0.57,
     };
    
    //sLB = smaller Less Bigger
    // sLC = smaller Less Current
    let sLB_N = interData[aux].n - interData[aux+1].n; //-10
    let sLC_N = interData[aux].n - n; //-7 

    let sLB_Sn = interData[aux].Sn - interData[aux+1].Sn; //-0,010
    let interSn = ((sLC_N * sLB_Sn)+((-sLB_N) * interData[aux].Sn)) / (-sLB_N);


    let sLB_Yn = interData[aux].Yn - interData[aux+1].Yn;
    //Veificar se está correto!
    let interYn = ((sLC_N * sLB_Yn)+((-sLB_N) * interData[aux].Yn)) / (-sLB_N);


    return {
      n,
      Sn: interSn,
      Yn: interYn,
    }
  },

  getAverage(array: number[]) {
    return array.reduce((prev, current) => prev + current) / array.length;
  },

  getStandardDeviation (array: number[]) {
    const n = array.length;
    const mean = this.getAverage(array);
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  },

  
  
  YReduzido (t: number) {
    //return this.t_retorno.map((t) => -Math.log(-Math.log(1-(1/t))));
    return -Math.log(-Math.log(1-(1/t)));
  },

  extremePrecipitation(array: number[], length: number) {
    const t_retorno = [2, 5, 10, 15, 20, 25, 50, 100, 500];
    let inter = this.interpolation(length);

    const exP: number[] = [];
    let stdDev = this.getStandardDeviation(array);
    let average = this.getAverage(array);

    for(let t of t_retorno) {
      exP.push(average + ((stdDev * (this.YReduzido(t) - inter.Yn)) / inter.Sn));
    }

    /* for (let i = 0; i < array.length; i++) {
      exP.push(this.getAverage(array) + ((this.getStandardDeviation(array) * (this.YReduzido(t) - inter.Yn)) / inter.Sn));
    } */

    return exP;
  },

  parameterB (array: number[], t: number) {
    
    //let b: number;

    const getR2 = (array:number[], b: number) => {
      const duration = [5, 10, 15, 20, 25, 30, 60, 120, 180, 360, 480, 600, 720, 1440];
      let log10Array = array.map(value => Math.log10(value));
      let logTPlusB = duration.map(value => Math.log10(value + b));

      let averageX = this.getAverage(log10Array);
      let averageY = this.getAverage(logTPlusB);

      let xlessAverage = log10Array.map(value => value - averageX);
      let ylessAverage = logTPlusB.map(value => value - averageY);


      let numerator = xlessAverage.reduce((prev, pos, index) => prev + (pos * ylessAverage[index]));
      let xSumPow2 = xlessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos);
      let ySumPow2 = ylessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos);
      let denominator = Math.sqrt(xSumPow2*ySumPow2);

      return (numerator/denominator) ** 2;
    }
  },

  manageData(rainData: {ano: number, chuva: number}[]): void {
    const rainPerDurationGraphic: {duration: number, data: number[]}[] = [
      {duration: 5, data: this.h_05min(rainData.map((value) => value.chuva))},
      {duration: 10, data: this.h_10min(rainData.map((value) => value.chuva))},
      {duration: 15, data: this.h_15min(rainData.map((value) => value.chuva))},
      {duration: 20, data: this.h_20min(rainData.map((value) => value.chuva))},
      {duration: 25, data: this.h_25min(rainData.map((value) => value.chuva))},
      {duration: 30, data: this.h_30min(rainData.map((value) => value.chuva))},
      {duration: 60, data: this.h_60min(rainData.map((value) => value.chuva))},
      {duration: 120, data: this.h_120min(rainData.map((value) => value.chuva))},
      {duration: 180, data: this.h_180min(rainData.map((value) => value.chuva))},
      {duration: 360, data: this.h_360min(rainData.map((value) => value.chuva))},
      {duration: 480, data: this.h_480min(rainData.map((value) => value.chuva))},
      {duration: 600, data: this.h_600min(rainData.map((value) => value.chuva))},
      {duration: 720, data: this.h_720min(rainData.map((value) => value.chuva))},
      {duration: 1440, data: this.h_1440min(rainData.map((value) => value.chuva))},
    ];
    //console.log(rainPerDurationGraphic); //Valores confirmados!

    const rainIntensityGraphic: {duration: number, data: number[]}[] = [
      {duration: rainPerDurationGraphic[0].duration, data: this.extremePrecipitation(rainPerDurationGraphic[0].data, rainData.length)},
      {duration: rainPerDurationGraphic[1].duration, data: this.extremePrecipitation(rainPerDurationGraphic[1].data, rainData.length)},
      {duration: rainPerDurationGraphic[2].duration, data: this.extremePrecipitation(rainPerDurationGraphic[2].data, rainData.length)},
      {duration: rainPerDurationGraphic[3].duration, data: this.extremePrecipitation(rainPerDurationGraphic[3].data, rainData.length)},
      {duration: rainPerDurationGraphic[4].duration, data: this.extremePrecipitation(rainPerDurationGraphic[4].data, rainData.length)},
      {duration: rainPerDurationGraphic[5].duration, data: this.extremePrecipitation(rainPerDurationGraphic[5].data, rainData.length)},
      {duration: rainPerDurationGraphic[6].duration, data: this.extremePrecipitation(rainPerDurationGraphic[1].data, rainData.length)},
      {duration: rainPerDurationGraphic[7].duration, data: this.extremePrecipitation(rainPerDurationGraphic[7].data, rainData.length)},
      {duration: rainPerDurationGraphic[8].duration, data: this.extremePrecipitation(rainPerDurationGraphic[8].data, rainData.length)},
      {duration: rainPerDurationGraphic[9].duration, data: this.extremePrecipitation(rainPerDurationGraphic[9].data, rainData.length)},
      {duration: rainPerDurationGraphic[10].duration, data: this.extremePrecipitation(rainPerDurationGraphic[10].data, rainData.length)},
      {duration: rainPerDurationGraphic[11].duration, data: this.extremePrecipitation(rainPerDurationGraphic[11].data, rainData.length)},
      {duration: rainPerDurationGraphic[12].duration, data: this.extremePrecipitation(rainPerDurationGraphic[12].data, rainData.length)},
      {duration: rainPerDurationGraphic[13].duration, data: this.extremePrecipitation(rainPerDurationGraphic[13].data, rainData.length)},
    ]

    console.log(rainIntensityGraphic); //Valores confirmados!
  
  },

};

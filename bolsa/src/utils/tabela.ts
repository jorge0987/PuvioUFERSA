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

interface pluvio extends Pluvio {
  rainData: {ano: number, chuva: number}[],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default class Pluvio implements pluvio {
  rainData: {ano: number, chuva: number}[]
  constructor(rainData: {ano: number, chuva: number}[]) {
    this.rainData = rainData;
  }

  duration= [5, 10, 15, 20, 25, 30, 60, 120, 180, 360, 480, 600, 720, 1440]
  t_retorno = [2, 5, 10, 15, 20, 25, 50, 100, 500]


  h_24(dadosChuva: number[]) {    
    //console.log(dadosChuva.map(valor => valor * disaCoef.h_24to1));
    return dadosChuva.map(valor => valor * disaCoef.h_24to1);
  }
  
  h_12(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_12to24);   
  }

  h_10(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_10to24);
  }

  h_8(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_8to24);
  }

  h_6(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_6to24);
  }

  h_3(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_3to24);
  }

  h_2(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_2to24);
  }

  h_1(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map(valor => valor * disaCoef.h_1to24);
  }

  h_030(dadosChuva: number[]) {
    return this.h_1(dadosChuva).map(valor => valor * disaCoef.h_30to1);
  }
  
  h_025(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_25to30);
  }

  h_020(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_20to30);
  }

  h_015(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_15to30);
  }

  h_010(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_10to30);
  }

  h_05(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map(valor => valor * disaCoef.h_5to30);
  }
  
  // Tabelas de duração em minutos

  h_05min(dadosChuva: number[]) {
    //let p = 
    return this.h_05(dadosChuva).map(valor => valor / (5 / 60));
    /*   p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_10min(dadosChuva: number[]) {
    return this.h_010(dadosChuva).map((valor) => valor / (10 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_15min(dadosChuva: number[]) {
    return this.h_015(dadosChuva).map((valor) => valor / (15 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_20min(dadosChuva: number[]) {
   return this.h_020(dadosChuva).map((valor) => valor / (20 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_25min(dadosChuva: number[]) {
    return this.h_025(dadosChuva).map((valor) => valor / (25 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }
  
  h_30min(dadosChuva: number[]) {
    return this.h_030(dadosChuva).map((valor) => valor / (30 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_60min(dadosChuva: number[]) {
    // TABELA IGUAL A DE 1/24 PARA ECONOMIA DE PROCESSAMENTO IREI REPETIR A MESM
    return this.h_1(dadosChuva);
  }

  h_120min(dadosChuva: number[]) {
    return this.h_2(dadosChuva).map((valor) => valor / (120 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_180min(dadosChuva: number[]) {
    return this.h_3(dadosChuva).map((valor) => valor / (180 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_360min(dadosChuva: number[]) {
    return this.h_6(dadosChuva).map((valor) => valor / (360 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_480min(dadosChuva: number[]) {
    return this.h_8(dadosChuva).map((valor) => valor / (480 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_600min(dadosChuva: number[]) {
    return this.h_10(dadosChuva).map((valor) => valor / (600 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }

  h_720min(dadosChuva: number[]) {
    return this.h_12(dadosChuva).map((valor) => valor / (720 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }
  
  h_1440min(dadosChuva: number[]) {
    return this.h_24(dadosChuva).map((valor) => valor / (1440 / 60));
    /* return [
      p,
      p.reduce((prev, current) => prev + current) / p.length,
    ]; */
  }


  interpolacao() {
    const  n =  [  20,   30,   40,   50,   60,   70,   80,   90,  100,  150,  200];
    const Yn = [ 0.52, 0.54, 0.54, 0.55, 0.55, 0.55, 0.56, 0.56, 0.56, 0.56, 0.57, 0.57];
    const Sn = [ 1.06, 1.11, 1.14, 1.16, 1.17, 1.19, 1.19, 1.20, 1.21, 1.23, 1.24, 1.28];


    return [ n, Yn, Sn ];
  }
  
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
  }

  getAverage(array: number[]) {
    return array.reduce((prev, current) => prev + current) / array.length;
  }

  getStandardDeviation (array: number[]) {
    const n = array.length;
    const mean = this.getAverage(array);
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  }
  
  YReduzido (t: number) {
    //return this.t_retorno.map((t) => -Math.log(-Math.log(1-(1/t))));
    return -Math.log(-Math.log(1-(1/t)));
  }

  extremePrecipitation(array: number[], length: number) {
    let inter = this.interpolation(length);

    const exP: number[] = [];
    let stdDev = this.getStandardDeviation(array);
    let average = this.getAverage(array);

    for(let t of this.t_retorno) {
      exP.push(average + ((stdDev * (this.YReduzido(t) - inter.Yn)) / inter.Sn));
    }

    /* for (let i = 0; i < array.length; i++) {
      exP.push(stdDev + ((average  * (this.YReduzido(t) - inter.Yn)) / inter.Sn));
    }  */

    return exP;
  }

  getR2 (log10Array:number[], logTPlusB: number[]) {
    //let log10Array = array.map(value => Math.log10(value));
    //let logTPlusB = this.duration.map(value => Math.log10(value + b));

    let averageX = this.getAverage(log10Array);
    let averageY = this.getAverage(logTPlusB);

    let xlessAverage = log10Array.map(value => value - averageX);
    let ylessAverage = logTPlusB.map(value => value - averageY);

    let numerator = xlessAverage.reduce((prev, pos, index) => prev + (pos * ylessAverage[index]), 0);

    let xSumPow2 = xlessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos, 0);
    let ySumPow2 = ylessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos, 0);
    let denominator = Math.sqrt(xSumPow2*ySumPow2);

    return (numerator/denominator) ** 2;
  }

  slope(y: number[], x: number[]) {
    //const y = data.map(value => Math.log10(value)); //log(t)
    //const x = this.duration.map(t => Math.log10(t + b)); //log(duration+b)

    let averageY = this.getAverage(y);
    let averageX = this.getAverage(x);
    
    let ylessAverage = y.map(value => value - averageY);
    let xlessAverage = x.map(value => value - averageX);

    let numerator = ylessAverage.reduce((prev, pos, index) => prev + (pos * xlessAverage[index]), 0);
    let denominator = xlessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos, 0);

    return (numerator/denominator);
  }

  intercept(y: number[], x: number[]) {
    //const y = data.map(value => Math.log10(value)); //log(t)
    //const x = this.duration.map(t => Math.log10(t + b)); //log(duration+b)

    let averageY = this.getAverage(y);
    let averageX = this.getAverage(x);

    let ylessAverage = y.map(value => value - averageY);
    let xlessAverage = x.map(value => value - averageX);

    let numerator = ylessAverage.reduce((prev, pos, index) => prev + (pos * xlessAverage[index]), 0);
    let denominator = xlessAverage.map(value => value ** 2).reduce((prev, pos) => prev + pos, 0);

    return (averageY - ((numerator/denominator)*averageX));
  }

  rainIntensity(): {duration: number, data: number[]}[] {
    const rainIntensityGraphic: {duration: number, data: number[]}[] = [
      {duration: 5, data: this.h_05min(this.rainData.map((value) => value.chuva))},
      {duration: 10, data: this.h_10min(this.rainData.map((value) => value.chuva))},
      {duration: 15, data: this.h_15min(this.rainData.map((value) => value.chuva))},
      {duration: 20, data: this.h_20min(this.rainData.map((value) => value.chuva))},
      {duration: 25, data: this.h_25min(this.rainData.map((value) => value.chuva))},
      {duration: 30, data: this.h_30min(this.rainData.map((value) => value.chuva))},
      {duration: 60, data: this.h_60min(this.rainData.map((value) => value.chuva))},
      {duration: 120, data: this.h_120min(this.rainData.map((value) => value.chuva))},
      {duration: 180, data: this.h_180min(this.rainData.map((value) => value.chuva))},
      {duration: 360, data: this.h_360min(this.rainData.map((value) => value.chuva))},
      {duration: 480, data: this.h_480min(this.rainData.map((value) => value.chuva))},
      {duration: 600, data: this.h_600min(this.rainData.map((value) => value.chuva))},
      {duration: 720, data: this.h_720min(this.rainData.map((value) => value.chuva))},
      {duration: 1440, data: this.h_1440min(this.rainData.map((value) => value.chuva))},
    ];

    return rainIntensityGraphic;
  }

  rainIntensityGumbel(): {t: number, data: number[]}[] {
    const rainIntensityGraphic = this.rainIntensity();
    const rainIntensityGumbelGraphic: {t: number, data: number[]}[] = [];

    this.t_retorno.forEach((x, index) => {
      rainIntensityGumbelGraphic[index] = {t: 0, data: []};
      rainIntensityGumbelGraphic[index].t = x;
      let aux = [];
      for(let i = 0; i < rainIntensityGraphic.length; i++) {
        let a = this.extremePrecipitation(rainIntensityGraphic[i].data, this.rainData.length); 
        aux[i] = a[index] / 60; //colocar em minutos
      }
      rainIntensityGumbelGraphic[index].data = aux;
    }); //Versão com os valores de duração para cada t (É o que será usado nos calculos de b);

    return rainIntensityGumbelGraphic;
  }

  IDF_Equation(): {t: number, data: number[]}[] {
    const b = this.parameterB();
    const a =  this.parameterA();
    const k = this.parameterK();
    const c_average = this.parameterC();
    
    const IDF: {t: number, data: number[]}[] = [];

    this.t_retorno.forEach((t, index) => {
      IDF[index] = {t: t, data: []};
      IDF[index].data = this.duration.map((min) => ((k * t ** a) / (min  + b) ** c_average));
    });
    return IDF;
  }

  manageData(): void {
    //console.log(rainIntensityGraphic); //Valores confirmados!


    /* const rainIntensityGumbelGraphic: {duration: number, data: number[]}[] = [
      {duration: rainIntensityGraphic[0].duration, data: this.extremePrecipitation(rainIntensityGraphic[0].data, rainData.length)},
      {duration: rainIntensityGraphic[1].duration, data: this.extremePrecipitation(rainIntensityGraphic[1].data, rainData.length)},
      {duration: rainIntensityGraphic[2].duration, data: this.extremePrecipitation(rainIntensityGraphic[2].data, rainData.length)},
      {duration: rainIntensityGraphic[3].duration, data: this.extremePrecipitation(rainIntensityGraphic[3].data, rainData.length)},
      {duration: rainIntensityGraphic[4].duration, data: this.extremePrecipitation(rainIntensityGraphic[4].data, rainData.length)},
      {duration: rainIntensityGraphic[5].duration, data: this.extremePrecipitation(rainIntensityGraphic[5].data, rainData.length)},
      {duration: rainIntensityGraphic[6].duration, data: this.extremePrecipitation(rainIntensityGraphic[1].data, rainData.length)},
      {duration: rainIntensityGraphic[7].duration, data: this.extremePrecipitation(rainIntensityGraphic[7].data, rainData.length)},
      {duration: rainIntensityGraphic[8].duration, data: this.extremePrecipitation(rainIntensityGraphic[8].data, rainData.length)},
      {duration: rainIntensityGraphic[9].duration, data: this.extremePrecipitation(rainIntensityGraphic[9].data, rainData.length)},
      {duration: rainIntensityGraphic[10].duration, data: this.extremePrecipitation(rainIntensityGraphic[10].data, rainData.length)},
      {duration: rainIntensityGraphic[11].duration, data: this.extremePrecipitation(rainIntensityGraphic[11].data, rainData.length)},
      {duration: rainIntensityGraphic[12].duration, data: this.extremePrecipitation(rainIntensityGraphic[12].data, rainData.length)},
      {duration: rainIntensityGraphic[13].duration, data: this.extremePrecipitation(rainIntensityGraphic[13].data, rainData.length)},
    ] */ //Versão com os valores de t para cada duração 

   

    //console.log(rainIntensityGumbelGraphic); //Valores confirmados!

    /* console.log('b:', this.parameterB());
    console.log('a:', this.parameterA());
    console.log('k:', this.parameterK());
    console.log('c_médio:', this.parameterC());
    console.log('R2', this.parameterR2()); */
    console.log(this.rainIntensity())
  }



  matrixToArray(matrix: {t: number, data: number[]}[]): number[] {
    let array: number[] = [];

    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].data.length; j++) {
        array.push(matrix[i].data[j]);
      }
    }
    return array;
  }

  parameterB (): number {
    const rainIntensityGumbelGraphic = this.rainIntensityGumbel();
    //let b = this.parameterB(rainIntensityGumbelGraphic[2].data, 10); //9.778499999999816
    const array = rainIntensityGumbelGraphic[2].data;
    
    let b: number = 0, i: number = 9.7 /* = 0 */, current: number = 0, aux: number = 0;

    while(current >= aux) {
      aux = current;
      i += 0.0001;
      let logTplusB: number[] = [];
      for (let min of this.duration){
        logTplusB.push(Math.log10(min + b))
      }
      current = this.getR2(array.map(value => Math.log10(value)), logTplusB);
      //this.duration.map(min => Math.log10(min + b)); I don't know why EsLint complains about this syntax!
      b = i;
    }

    return b;
  }

  parameterC(/*rainIntensity: {t: number, data: number[]}[], b: number*/): number {
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const n: number[] = [];
    
    rainIntensity.forEach((obj) => {
      n.push(this.slope(obj.data.map(value => Math.log10(value)), this.duration.map(t => Math.log10(t + b))));
    })
    return -this.getAverage(n);
  }

  
  parameterA(/*rainIntensity: {t: number, data: number[]}[], b: number*/): number {
    //console.log(this.parameterA(rainIntensityGumbelGraphic, b));
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const logC: number[] = [];
    
    rainIntensity.forEach((obj) => {
      logC.push(this.intercept(obj.data.map(value => Math.log10(value)), this.duration.map(t => Math.log10(t + b))));
    })
    
    const logT = this.t_retorno.map(t => Math.log10(t));
    return this.slope(logC, logT);
  }

  parameterK(/*rainIntensity: {t: number, data: number[]}[], b: number*/) {
    const rainIntensity = this.rainIntensityGumbel();
    const b = this.parameterB();
    const logC: number[] = [];
    
    rainIntensity.forEach((obj) => {
      logC.push(this.intercept(obj.data.map(value => Math.log10(value)), this.duration.map(t => Math.log10(t + b))));
    })
    
    const logT = this.t_retorno.map(t => Math.log10(t));
    return (10 ** (this.intercept(logC, logT))) * 60; //Em horas!
  }

  parameterR2 (): number {
    const IDFArray = this.matrixToArray(this.IDF_Equation());
    const gumbelArray = this.matrixToArray(this.rainIntensityGumbel());

    return this.getR2(IDFArray, gumbelArray);;
  }

};

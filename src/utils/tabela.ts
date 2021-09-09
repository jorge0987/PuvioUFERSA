import { ObjectFlags } from "typescript";


const  dadosChuva = [
  //{ ano: 1964, chuva: 114.0 },
  141.0, 118.4, 127.4, 52.4, 90.3, 62.5, 50.3, 65.4, 81.0, 49.6, 124.2,
  112.0, 44.2, 80.6, 48.0, 47.0, 45.8, 56.4, 56.4, 35.8, 111.0, 111.6, 48.7,
  37.6, 53.3, 67.0, 45.0, 77.0, 38.6, 19.4, 69.8, 90.0, 65.6, 89.0, 45.0,
  73.0, 63.0, 50.0, 99.0, 54.0, 96.0, 71.1, 48.5, 65.6, 48.2, 86.6, 137.5,
  97.5, 21.5, 203.5, 28.0, 47.0, 50.0, 120.0, 53.0, 49.0, 86.0,
];



export default {  
  h_24() {    
    return dadosChuva.map(valor => valor *1.14);    
  },
  h_12() {
    return this.h_24().map(valor => valor *0.85);   
  },
  h_10() {    
    return this.h_24().map(valor => valor* 0.82);
  },
  h_8() {    
    return  this.h_24().map(valor => valor* 0.78);
  },
  h_6() {
    return  this.h_24().map(valor => valor* 0.72);
  },
  h_3() {
    return  this.h_24().map(valor => valor* 0.54); 
  },
  h_2() {
    return  this.h_24().map(valor => valor* 0.48); 
  },
  h_1() {
  return  this.h_24().map(valor => valor* 0.42); 
  },
  h_030() {
    return  this.h_1().map(valor => valor* 0.74); 
  },
  h_025() {
    var p = this.h_030();
    var h025 = [];
    var aux = 0;
    do {
      h025.push(p[aux] * 0.91);
      aux += 1;
    } while (aux < p.length);
    return h025;
  },
  h_020() {
    var p = this.h_030();
    var h020 = [];
    var aux = 0;
    do {
      h020.push(p[aux] * 0.81);
      aux += 1;
    } while (aux < p.length);
    return h020;
  },
  h_015() {
    var p = this.h_030();
    var h015 = [];
    var aux = 0;
    do {
      h015.push(p[aux] * 0.7);
      aux += 1;
    } while (aux < p.length);
    return h015;
  },
  h_010() {
    var p = this.h_030();
    var h010 = [];
    var aux = 0;
    do {
      h010.push(p[aux] * 0.54);
      aux += 1;
    } while (aux < p.length);
    return h010;
  },
  h_05() {
    var p = this.h_030();
    var h05 = [];
    var aux = 0;
    do {
      h05.push(p[aux] * 0.34);
      aux += 1;
    } while (aux < p.length);
    return h05;
  },
  // Tabelas de duração em minutos
  h_05min() {
    var p = this.h_05();
    var h05min = [];
    var aux = 0;
    var media5min: any = 0.0;

    do {
      h05min.push(p[aux] / (5 / 60));
      media5min += h05min[aux];
      aux += 1;
    } while (aux < p.length);

    media5min = media5min / aux;
    return [h05min, media5min];
  },
  h_10min() {
    var p = this.h_010();
    var h10min = [];
    var aux = 0;
    var media10min: any = 0.0;

    do {
      h10min.push(p[aux] / (10 / 60));
      media10min += h10min[aux];
      aux += 1;
    } while (aux < p.length);
    media10min = media10min / aux;

    return [h10min, media10min];
  },
  h_15min() {
    var p = this.h_015();
    var h15min = [];
    var aux = 0;
    var media15min: any = 0.0;
    do {
      h15min.push(p[aux] / (15 / 60));
      media15min += h15min[aux];
      aux += 1;
    } while (aux < p.length);
    media15min = media15min / aux;
    return [h15min, media15min];
  },
  h_20min() {
    var p = this.h_020();
    var h20min = [];
    var aux = 0;
    var media20min: any = 0.0;
    do {
      h20min.push(p[aux] / (20 / 60));
      media20min += h20min[aux];
      aux += 1;
    } while (aux < p.length);
    media20min = media20min / aux;
    return [h20min, media20min];
  },
  h_25min() {
    var p = this.h_025();
    var h25min = [];
    var aux = 0;
    var media25min: any = 0.0;
    do {
      h25min.push(p[aux] / (25 / 60));
      media25min += h25min[aux];
      aux += 1;
    } while (aux < p.length);
    media25min = media25min / aux;
    return [h25min, media25min];
  },
  h_30min() {
    var p = this.h_030();
    var h30min = [];
    var aux = 0;
    var media30min: any = 0.0;
    do {
      h30min.push(p[aux] / (30 / 60));
      media30min += h30min[aux];
      aux += 1;
    } while (aux < p.length);
    return [h30min, media30min];
  },
  h_60min() {
    // TABELA IGUAL A DE 1/24 PARA ECONOMIA DE PROCESSAMENTO IREI REPETIR A MESM
  },

  h_120min() {
    var p = this.h_2();
    var h120min = [];
    var aux = 0;
    var media120min: any = 0.0;
    do {
      h120min.push(p[aux] / (120 / 60));
      media120min += h120min[aux];
      aux += 1;
    } while (aux < p.length);
    media120min = media120min / aux;
    return [h120min, media120min];
  },

  h_180min() {
    var p = this.h_3();
    var h180min = [];
    var aux = 0;
    var media180min: any = 0.0;
    do {
      h180min.push(p[aux] / (180 / 60));
      media180min += h180min[aux];
      aux += 1;
    } while (aux < p.length);
    media180min = media180min / aux;
    return [h180min, media180min];
  },

  h_360min() {
    var p = this.h_6();
    var h360min = [];
    var aux = 0;
    var media360min: any = 0.0;
    do {
      h360min.push(p[aux] / (360 / 60));
      media360min += h360min[aux];
      aux += 1;
    } while (aux < p.length);
    media360min = media360min / aux;
    return [h360min, media360min];
  },

  h_480min() {
    var p = this.h_8();
    var h480min = [];
    var aux = 0;
    var media480min: any = 0.0;
    do {
      h480min.push(p[aux] / (480 / 60));
      media480min += h480min[aux];
      aux += 1;
    } while (aux < p.length);
    media480min = media480min / aux;
    return [h480min, media480min];
  },
  h_600min() {
    var p = this.h_10();
    var h600min = [];
    var aux = 0;
    var media600min: any = 0.0;
    do {
      h600min.push(p[aux] / (600 / 60));
      media600min += h600min[aux];
      aux += 1;
    } while (aux < p.length);
    media600min = media600min / aux;
    return [h600min, media600min];
  },
  h_720min() {
    var p = this.h_12();
    var h720min = [];
    var aux = 0;
    var media720min: any = 0.0;
    do {
      h720min.push(p[aux] / (720 / 60));
      media720min += h720min[aux];
      aux += 1;
    } while (aux < p.length);
    media720min = media720min / aux;
    return [h720min, media720min];
  },
  h_1440min() {
   
    var p = this.h_24();
    var h1440min = [];
    var aux = 0;
    var media1440min: any = 0.0;
    do {
      h1440min.push(p[aux] / (1440 / 60));
      media1440min = h1440min[aux];
      aux += 1;
    } while (aux < p.length);
    media1440min = media1440min / aux;
    return [h1440min, media1440min];
  },
  // Função de interpolação no qual recebe 4 paramentros :
  interpolacao(MenorSn:any=1.16, MaiorSn:any=1.17, MenorN:any=50, MaiorN:any=60, aux:any=57){

    let D_Sn: any =0, D_N: any= 0;
    var Resul_Sn: any =0;
    D_Sn = (MenorSn-MaiorSn);   
    D_N = (MenorN-MaiorN);
    // Equação pegada do Excel 
    Resul_Sn = (((MenorN-aux)*D_Sn)+(-D_N*MenorSn))/(-D_N);
   //Resul_Sn =((-7*(-0.01))+(-(-10 * 1.16)))/(-(-10));
    
    return Resul_Sn;
  },
  // função no qual deixa a variavel reduzida.
  variavel_reduzida(){
    const  n =  [  20,   30,   40,   50,   60,   70,   80,   90,  100,  150,  200];
    const Yn = [ 0.52, 0.54, 0.54, 0.55, 0.55, 0.55, 0.56, 0.56, 0.56, 0.56, 0.57, 0.57];
    const Sn = [ 1.06, 1.11, 1.14, 1.16, 1.17, 1.19, 1.19, 1.20, 1.21, 1.23, 1.24, 1.28];
    const P_retorno = [2, 5, 10, 15, 20, 25, 50, 100, 500];
    const y: any=[];
    let aux = 0 ,aux2 =0 ;
    do {      
       y[aux] = -(Math.log(-Math.log(1-(1/P_retorno[aux]))));
      console.log(y[aux]);
      aux+= 1;
    } while (aux <P_retorno.length);
    return [ n, Yn, Sn, y ];

  },
 // Funções para a 3 e 4 tabela respectivas : Tabela de periodo De retorno em milimetros/Hora e a mesma  em milimetros/minuto(para isso sera dividido por 60).

 periodo_retorno_resultante(x:any=104.12 ,Sx:any =49.91 ,Sn:any =1.167,y:any=0.367,yn:any=0.550){
   
   var P_resultante = x +(Sx/Sn)*(y-yn);
   return P_resultante;
 }

};

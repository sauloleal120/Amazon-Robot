
var btn = document.getElementById("btn");
var insert = document.getElementById("insert")
var input = document.getElementById("txt");
var box = 40;
var mx = 0;
var my = 12;

var ax = 0;
var ay = 0;
var ac = '';
var mc = '';
var vel = 500;

var alvo = ''

var BoxR1 = ''

var caixa1 = 1;
var caixa2 = 1;
var caixa3 = 1;
var caixa4 = 1;
var caixa5 = 1;
var caixa6 = 1;
var caixa7 = 1;
var caixa8 = 1;
var caixa9 = 1;
var caixa10 = 1;

var caixa11 = 1;
var caixa21 = 1;
var caixa31 = 1;
var caixa32 = 1;

area()
function area (){
  
  for (var i = 1; i <196; i++ ){
  
var table = document.createElement("table")
table.style.height = "40px"
table.style.width= "40px"
table.innerHTML = "º";
table.setAttribute("id", `box${i}`)
document.querySelector("div").appendChild(table);

}
  
}



var box001 = document.getElementById("box16");
box001.innerHTML =1;
var box002 = document.getElementById("box31");
box002.innerHTML =2;
var box003 = document.getElementById("box46");
box003.innerHTML =3;
var box004 = document.getElementById("box61");
box004.innerHTML =4;
var box005 = document.getElementById("box76");
box005.innerHTML =5;
var box006 = document.getElementById("box91")
box006.innerHTML =6;
var box007 = document.getElementById("box106")
box007.innerHTML=7;
var box008 = document.getElementById("box121")
box008.innerHTML=8;
var box009 = document.getElementById("box136");
box009.innerHTML=9;
var box010 = document.getElementById("box151")
box010.innerHTML=10;

var box011 = document.getElementById("box18")
box011.innerHTML =11;
var box012 = document.getElementById("box33").innerHTML =12;
var box013 = document.getElementById("box48").innerHTML =13;
var box014 = document.getElementById("box63").innerHTML =14;
var box015 = document.getElementById("box78").innerHTML =15;
var box016 = document.getElementById("box93").innerHTML =16;
var box017 = document.getElementById("box108").innerHTML=17;
var box018 = document.getElementById("box123").innerHTML=18;
var box019 = document.getElementById("box138").innerHTML=19;
var box020 = document.getElementById("box153").innerHTML=20;

var box021 = document.getElementById("box19");
box021.innerHTML =21;
var box022 = document.getElementById("box34").innerHTML =22;
var box023 = document.getElementById("box49").innerHTML =23;
var box024 = document.getElementById("box64").innerHTML =24;
var box025 = document.getElementById("box79").innerHTML =25;
var box026 = document.getElementById("box94").innerHTML =26;
var box027 = document.getElementById("box109").innerHTML=27;
var box028 = document.getElementById("box124").innerHTML=28;
var box029 = document.getElementById("box139").innerHTML=29;
var box030 = document.getElementById("box154").innerHTML=30;

var box031 = document.getElementById("box21")
box031.innerHTML =31;
var box032 = document.getElementById("box36");
box032.innerHTML =32;
var box033 = document.getElementById("box51").innerHTML =33;
var box034 = document.getElementById("box66").innerHTML =34;
var box035 = document.getElementById("box81").innerHTML =35;
var box036 = document.getElementById("box96").innerHTML =36;
var box037 = document.getElementById("box111").innerHTML=37;
var box038 = document.getElementById("box126").innerHTML=38;
var box039 = document.getElementById("box141").innerHTML=39;
var box040 = document.getElementById("box156").innerHTML=40;

var box041 = document.getElementById("box22").innerHTML =41;
var box042 = document.getElementById("box37").innerHTML =42;
var box043 = document.getElementById("box52").innerHTML =43;
var box044 = document.getElementById("box67").innerHTML =44;
var box045 = document.getElementById("box82").innerHTML =45;
var box046 = document.getElementById("box97").innerHTML =46;
var box047 = document.getElementById("box112").innerHTML=47;
var box048 = document.getElementById("box127").innerHTML=48;
var box049 = document.getElementById("box142").innerHTML=49;
var box050 = document.getElementById("box157").innerHTML=50;

var box051 = document.getElementById("box24").innerHTML =51;
var box052 = document.getElementById("box39").innerHTML =52;
var box053 = document.getElementById("box54").innerHTML =53;
var box054 = document.getElementById("box69").innerHTML =54;
var box055 = document.getElementById("box84").innerHTML =55;
var box056 = document.getElementById("box99").innerHTML =56;
var box057 = document.getElementById("box114").innerHTML=57;
var box058 = document.getElementById("box129").innerHTML=58;
var box059 = document.getElementById("box144").innerHTML=59;
var box060 = document.getElementById("box159").innerHTML=60;

var box061 = document.getElementById("box25").innerHTML =61;
var box062 = document.getElementById("box40").innerHTML =62;
var box063 = document.getElementById("box55").innerHTML =63;
var box064 = document.getElementById("box70").innerHTML =64;
var box065 = document.getElementById("box85").innerHTML =65;
var box066 = document.getElementById("box100").innerHTML=66;
var box067 = document.getElementById("box115").innerHTML=67;
var box068 = document.getElementById("box130").innerHTML=68;
var box069 = document.getElementById("box145").innerHTML=69;
var box070 = document.getElementById("box160").innerHTML=70;

var box071 = document.getElementById("box27").innerHTML =71;
var box072 = document.getElementById("box42").innerHTML =72;
var box073 = document.getElementById("box57").innerHTML =73;
var box074 = document.getElementById("box72").innerHTML =74;
var box075 = document.getElementById("box87").innerHTML =75;
var box076 = document.getElementById("box102").innerHTML=76;
var box077 = document.getElementById("box117").innerHTML=77;
var box078 = document.getElementById("box132").innerHTML=78;
var box079 = document.getElementById("box147").innerHTML=79;
var box080 = document.getElementById("box162").innerHTML=80;

var box081 = document.getElementById("box28").innerHTML =81;
var box082 = document.getElementById("box43").innerHTML =82;
var box083 = document.getElementById("box58").innerHTML =83;
var box084 = document.getElementById("box73").innerHTML =84;
var box085 = document.getElementById("box88").innerHTML =85;
var box086 = document.getElementById("box103").innerHTML=86;
var box087 = document.getElementById("box118").innerHTML=87;
var box088 = document.getElementById("box133").innerHTML=88;
var box089 = document.getElementById("box148").innerHTML=89;
var box090 = document.getElementById("box163").innerHTML=90;

var box091 = document.getElementById("box30").innerHTML =91;
var box092 = document.getElementById("box45").innerHTML =92;
var box093 = document.getElementById("box60").innerHTML =93;
var box094 = document.getElementById("box75").innerHTML =94;
var box095 = document.getElementById("box90").innerHTML =95;
var box096 = document.getElementById("box105").innerHTML=96;
var box097 = document.getElementById("box120").innerHTML=97;
var box098 = document.getElementById("box135").innerHTML=98;
var box099 = document.getElementById("box150").innerHTML=99;
var box100 = document.getElementById("box165").innerHTML=100;




/*
var r1 = document.getElementById("box181").innerHTML="R1";
var r2 = document.getElementById("box182").innerHTML="R2";
var r3 = document.getElementById("box183").innerHTML="R3";
var r4 = document.getElementById("box184").innerHTML="R4";
var r5 = document.getElementById("box185").innerHTML="R5";
*/

document.getElementById("box180").innerHTML="X";

document.getElementById("box186").style.backgroundColor="gray";
document.getElementById("box187").style.backgroundColor="gray";
document.getElementById("box188").style.backgroundColor="gray";
document.getElementById("box189").style.backgroundColor="gray";
document.getElementById("box190").style.backgroundColor="gray";
document.getElementById("box191").style.backgroundColor="gray";
document.getElementById("box192").style.backgroundColor="gray";
document.getElementById("box193").style.backgroundColor="gray";
document.getElementById("box194").style.backgroundColor="gray";
document.getElementById("box195").style.backgroundColor="gray";



robo()


function robo (){
  
      var table = document.createElement("table")
      table.style.height = "40px"
      table.style.width= "40px"
      table.innerHTML = "R1";
      table.style.backgroundColor="lightgreen"
      table.setAttribute("id", "r1")
      document.querySelector("#above").appendChild(table);
      table.style.left = mx*box + "px";    
      table.style.top = my*box + "px"
  
  
}



function interval (){
  

  


}


//determina qual corredor parar na primeira viagem
function hall(){
  console.log("hall")
  if (mx == 0 && my == 11){
    
    if (ax == 0 || ax == 2){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 1){clearInterval(int);goGet();}}, vel);}
  
   if (ax == 3 || ax == 5){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 4){clearInterval(int);goGet();}}, vel);}
    }
  
  else{hallNext();}
}




function goGet(){
console.log("goGet")
  
if (my == 0){
  if (ax == 0 || ax == 2 ){var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int);goGrab();}}, vel);}
  
  if (ax == 3 || ax == 5 ){var int2 = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int2);goGrab();}}, vel);}
 
  }
  
  if(my == 11){
     
  if (ax == 0 || ax == 2 ){var int3 = setInterval(function()
  {my -=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int3);goGrab();}}, vel);}
  
  
  if (ax == 3 || ax == 5 ){var int4 = setInterval(function()
  {my -=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int4);goGrab();}}, vel);}
   
    
  }
  
  if(my !=11 && my!==0 && my !=ay) {
    
    if (ay > my){var int5 = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int5);goGrab();}}, vel);} 
 
  if (ay < my ){var int6 = setInterval(function()
  {my -=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int6);goGrab();}}, vel);} 
  
 
  }
 
    if(my !=11 && my!==0 && my == ay) {
        
      if ( ax < mx){var int6 = setInterval(function()
  {mx -=1; document.getElementById("r1").style.left = mx*box + "px"; if(my == ay){clearInterval(int6);goGrab();}}, vel);} 

    if (ax > mx){var int7 = setInterval(function()
  {mx +=1; document.getElementById("r1").style.left = mx*box + "px"; if(my == ay){clearInterval(int7);goGrab();}}, vel);} 
    }

  
  
 
}





function goGrab(){
  console.log("goGrab");
   if(my == ay && ax === 0 && ay == 1){   box001.style.backgroundColor="white";box001.innerHTML = "º"; caixa1 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 2){   box002.style.backgroundColor="white";box002.innerHTML = "º"; caixa2 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 3){   box003.style.backgroundColor="white";box003.innerHTML = "º"; caixa3 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 4){   box004.style.backgroundColor="white";box004.innerHTML = "º"; caixa4 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 5){   box005.style.backgroundColor="white";box005.innerHTML = "º"; caixa5 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 6){   box006.style.backgroundColor="white";box006.innerHTML = "º"; caixa6 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 7){   box007.style.backgroundColor="white";box007.innerHTML = "º"; caixa7 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 8){   box008.style.backgroundColor="white";box008.innerHTML = "º"; caixa8 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 9){   box009.style.backgroundColor="white";box009.innerHTML = "º"; caixa9 = 0; goBack();}
   if(my == ay && ax === 0 && ay == 10){  box010.style.backgroundColor="white";box010.innerHTML = "º"; caixa10 = 0; goBack();}
  
   if(my == ay && ax == 2 && ay == 1){   box011.style.backgroundColor="white";box011.innerHTML = "º"; caixa11 = 0; goBack();}
   if(my == ay && ax == 3 && ay == 1){   box021.style.backgroundColor="white";box021.innerHTML = "º"; caixa21 = 0; goBack();}
   if(my == ay && ax == 5 && ay == 1){   box031.style.backgroundColor="white";box031.innerHTML = "º"; caixa31 = 0; goBack();}
   if(my == ay && ax == 5 && ay == 2){   box032.style.backgroundColor="white";box032.innerHTML = "º"; caixa32 = 0; goBack();}

}

function goBack(){
  console.log("goBack");

  if (mx === 0) {var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 1){clearInterval(int);goBack();}}, vel);}
  
  else {var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == 11){clearInterval(int);goX();}}, vel);
  
  }

  /*
  if (box001.style.backgroundColor=="white"){var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == 11){clearInterval(int);goX();}}, vel);}
  
   if (box011.style.backgroundColor=="white"){var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == 11){clearInterval(int);goX();}}, vel);}
  
  if (box021.style.backgroundColor=="white"){var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == 11){clearInterval(int);goX();}}, vel);}
  
  if (box031.style.backgroundColor=="white"){var int = setInterval(function()
  {my +=1;document.getElementById("r1").style.top = my*box + "px"; if(my == 11){clearInterval(int);goX();}}, vel);}
  */
}

function goX(){
 console.log("goX")
  if (my == 11 ){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 14 && my == 11){clearInterval(int);goReplace1();}}, vel);}
  
  
}

function goReplace1(){
  console.log('goReplace1')
  if (mx ==14 && ax == 0){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 1){clearInterval(int);goReplace2();}}, vel);}
  
  if (mx ==14 && ax == 2){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 1){clearInterval(int);goReplace2();}}, vel);}
  
   if (mx ==14 && ax == 3){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 4){clearInterval(int);goReplace2();}}, vel);}

  if (mx ==14 && ax == 5){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 4){clearInterval(int);goReplace2();}}, vel);}
}


function goReplace2(){
    console.log('goReplace2');

  if(mx == 1){var int = setInterval(function()
  {my -=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int);goReplace3();}}, vel);}
  
  if(mx == 4){var int = setInterval(function()
  {my -=1;document.getElementById("r1").style.top = my*box + "px"; if(my == ay){clearInterval(int);goReplace3();}}, vel);}
}

function goReplace3(){
      console.log('goReplace3');

  
  if(ax ==0){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == ax){clearInterval(int);}}, vel);}
  
  if(ax == 2){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == ax){clearInterval(int);}}, vel);}
  
if(ax == 3){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == ax){clearInterval(int);}}, vel);}
  
  if(ax == 5){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == ax){clearInterval(int);}}, vel);}
}


function moveRob () {
  
console.log("moveRob")

  if (mx == 0 || mx == 2) {mc = 1;}
  
  if (mx == 3 || mx == 5){mc = 2;}
  
  //primeira viagem
   if (my == 12) 
  { var int = setInterval(function()
  {console.log("condição 0");my -=1; document.getElementById("r1").style.top = my*box + "px";
    if(my == 11){clearInterval(int);hall();}}, 100);}
  
  //mesmo corredor
  
  if (mc == ac) {
    
    if (my !=12 && ax < mx) {console.log("condição 01");mx -=1; document.getElementById("r1").style.left = mx*box + "px";goGrab();}
  if (my !=12 && ax > mx) {console.log("condição 02");mx +=1; document.getElementById("r1").style.left = mx*box + "px";goGrab();}
  if (my !=12 && ax == mx && mx == 0 || mx == 2 || mx == 5 || mx == 8 || mx == 11){var int = setInterval(function()
  {console.log("condição 03");mx +=1; document.getElementById("r1").style.left = mx*box + "px";
    if(mx == 1|| mx == 4 || mx == 7|| mx ==10|| mx ==13 )
    {clearInterval(int);goGet();}}, vel);}}
  

  
  
  
  //corredores diferentes
  if (my !=12 && mc != ac) { 
    //alvo à esquerda e robo coluna direita...
if (ax <mx && mx== 3 || mx == 6 || mx == 9 || mx == 12)
  {var int = setInterval(function()
  {console.log("condição A");mx +=1; document.getElementById("r1").style.left = mx*box + "px";
    if(mx == 1|| mx == 4 || mx == 7|| mx ==10|| mx ==13 )
    {clearInterval(int);checaAlt();}}, vel);}
    
  
       // alvo à direita, robo coluna esquerda...
if (my!=12 && ax >mx)
  {var int = setInterval(function()
  {console.log(`condição B ax:${ax} mx:${mx}`);mx -=1; document.getElementById("r1").style.left = mx*box + "px";
    if(mx == 1|| mx == 4 || mx == 7|| mx ==10|| mx ==13 )
    {clearInterval(int);checaAlt();}}, vel);}
   
    
       //esquerda, esquerda
    if (my !=12 && ax <mx && mx == 5)
  {var int = setInterval(function()
  {console.log(`condição C ax:${ax} mx:${mx}`);mx -=1; document.getElementById("r1").style.left = mx*box + "px";
    if(mx == 4)
    {clearInterval(int);checaAlt();}}, vel);}
    
    
    //se robo na coluna 0
    if (my !=12 && ax >mx && mx == 0)
  {var int = setInterval(function()
  {console.log("condição D");mx +=1; document.getElementById("r1").style.left = mx*box + "px";
    if(mx == 1)
    {clearInterval(int);checaAlt();}}, vel);}
   
   
  }
  
  
 
}

//checa altura depois que o robo está no lugar de um item em busca do outro 
function checaAlt(){
  
  console.log(`checaAlt ${ac} ${mc}`)
  
 /*
  
    if (ac == mc) {
    var int = setInterval(function()
  {my -=1; document.getElementById("r1").style.top = my*box + "px";
    if(my == 0 || my == 11){clearInterval(int);curvaPorCima();}}, vel);}
 */ 
  if (my != 12 && ac != mc && ay <=5 && my<=5){var int = setInterval(function()
  {my -=1; document.getElementById("r1").style.top = my*box + "px";
    if(my == 0 || my == 11){clearInterval(int);curvaPorCima();}}, vel);}
  /*
   if (my != 12 && ay >=6 && my>=6){var int = setInterval(function()
  {my +=1; document.getElementById("r1").style.top = my*box + "px";
    if(my == 0 || my == 11){clearInterval(int);curvaPorCima();}}, vel);}
  */

  
}


function curvaPorCima(){
  
  
  console.log("curvaPorCima");
  
  console.log(`curva por cima mx:${mx}, ax:${ax}`)
  
    if (ax < mx){curvaPorCimaEsquerda();}
    if (ax > mx){curvaPorCimaDireita();}
}



function curvaPorCimaEsquerda(){
    console.log("curvaPorCimaEsquerda");

  if (my == 0 && ax == 0 || ax == 2){var int = setInterval(function()
  {mx -=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 1){clearInterval(int);goGet();}}, vel);}
  
  
}



function curvaPorCimaDireita(){
      console.log("curvaPorCimaDireita");

   if (my ==0 && ax == 3 || ax == 5){var int = setInterval(function()
  {mx +=1;document.getElementById("r1").style.left = mx*box + "px"; if(mx == 4){clearInterval(int);goGet();}}, vel);}
  
  
  
}


document.addEventListener("click",function(e){
  
  if (e.target == btn ){ 
    

    
    moveRob()
    ;}
  
  if (e.target == insert){ 
    
    if(input.value == 1) {ax =0; ay = 1; ac = 1;
    box001.style.backgroundColor="red";  
    }
    
    if(input.value == 2) {ax = 0; ay = 2; ac = 1;
    box002.style.backgroundColor="red";  
    }
    
    if(input.value == 3) {ax = 0; ay = 3; ac = 1;
    box003.style.backgroundColor="red";  
    }
    
    if(input.value == 4) {ax = 0; ay = 4; ac = 1;
    box004.style.backgroundColor="red";  
    }
    
     if(input.value == 5) {ax = 0; ay = 5; ac = 1;
    box005.style.backgroundColor="red";  
    }
    
    if(input.value == 6) {ax = 0; ay = 6; ac = 1;
    box006.style.backgroundColor="red";  
    }
    
    if(input.value == 7) {ax = 0; ay = 7; ac = 1;
    box007.style.backgroundColor="red";  
    }
     
    if(input.value == 8) {ax = 0; ay = 8; ac = 1;
    box008.style.backgroundColor="red";  
    }
    
    
    if(input.value == 9) {ax = 0; ay = 9; ac = 1;
    box009.style.backgroundColor="red";  
    }
    
    if(input.value == 10) { ax = 0; ay = 10; ac = 1;
    box010.style.backgroundColor="red";  
    }
    
    if(input.value == 11) {ax = 2; ay = 1; ac = 1;
    box011.style.backgroundColor="red";  
    }
    
    
    if(input.value == 21) { ax = 3; ay = 1; ac = 2;
    box021.style.backgroundColor="red";                                       
    }
    
    if(input.value == 31) {ax = 5; ay = 1; ac = 2;
    box031.style.backgroundColor="red";                        
    }
    
    if(input.value == 32) { ax = 5; ay = 2; ac = 2;
    box032.style.backgroundColor="red";                        
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})

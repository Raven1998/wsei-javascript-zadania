//ZADANIE 1

function Wypisz() {
  return "Udalo Sie";
}

console.log(Wypisz());


//ZADANIE 2

function Wypiszparametr(parametr) {
  return parametr;
}

var a;
a =5;

console.log(Wypiszparametr(a));

//ZADANIE 3
const array = [1,2,5,6,4,5,3];

function WypiszTablice(array)
{
  console.log(array);
}


WypiszTablice(array);

//ZADANIE 4
function WypiszString(string)
{
  let count = 1;
  let timer = setInterval(function(){
    if(count <5) {console.log(string);
                 count++;} 
    else {clearInterval(timer);
         console.log("Koniec");}
  }, 3000);
  
}

WypiszString("Test");

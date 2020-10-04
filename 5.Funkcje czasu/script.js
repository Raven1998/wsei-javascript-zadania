//ZADANIE 1

let a=1;

let interval = setInterval(() => {
    console.log("czesc po raz "+a);
  a++;
  if(a>15) clearInterval(interval);
}, 3000)


//ZADANIE 2

const tab = [1, 2, 3, 4];

let timeout = setTimeout(() =>{
  
  for(let a of tab)
  {console.log(a);}
  
}, 2000);

var i =0;
let interval = setInterval(() => {
    console.log(tab[i]);
  i++;
  if(i>3) clearInterval(interval);
}, 3000)

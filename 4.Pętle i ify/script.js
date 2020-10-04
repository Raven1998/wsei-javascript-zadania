//ZADANIE 1

var a =2;
var b=3;

if(a>b) console.log(a);
else console.log(b);


//ZADANIE 2

var a =3;
var b =5;
var c=1;

if (a>b && a>c) console.log(a);
else if (b>a && b>c) console.log(b);
else console.log(c);


//ZADANIE 3

for(var i=0;i<10;i++)
  {console.log("Lubie JavaScript");}

//ZADANIE 4

var result =0;

for(var i=1;i<=10;i++)
  {
    result =result+i;
  }

console.log(result);

//ZADANIE 5

var n =5;

for(var i=0;i<=5;i++)
  {
    if(i%2==0){console.log(i +" -parzysta")}
    else console.log(i+" -nieparzysta");
  }


//ZADANIE 6

for(var a=0;a<5;a++)
  {
    
    for(var b=0;b<2;b++)
      {
        console.log("a: " +a+" b: " +b);
      }
    
  }

//ZADANIE 7

for (var a=0;a<=100;a++)
  {
    if (a%15==0) console.log("FizzBuzz");
    else if (a%3==0) console.log("Fizz");
    else if (a%5==0) console.log("Buzz");
    else console.log(a);
  }  

//ZADANIE 8a

const star ="*";
for(let i =0;i<5;i++)
  {
    let result ="*";
    for(let j =0;j<i;j++)
      {result +=star;}
    
    console.log(result);
  }

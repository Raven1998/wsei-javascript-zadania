//Zadanie 1

function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
   
}
Person.prototype.changeWiek = function(newAge){
this.wiek =newAge}

Person.prototype.changeMiasto = function(newCity){
this.miasto =newCity}

var person1 = new Person("John", "Doe", 50, "Polska", "Krakow", "Polski");
console.log(person1)

var person2 = new Person("Konrad", "Kita", 34, "Polska", "Warszawa", "Polski");
console.log(person2)

person1.changeWiek(23);
person2.changeMiasto("Krakow");

console.log(person1,person2)


//Zadanie 2

function Calc(){
    this.memory = [];
    this.showMemory = function(){
        console.log(this.memory)
    }
    this.clearMemory = function () {
        this.memory = []
    }
    this.add = function (a,b){
        let equation = `${a} + ${b} = ${a +b}`
        console.log(equation)
        this.memory.push(equation)
    }
    
    
    
    
}



//Zadanie 3

function Game ()
{
    Game.prototype.number = null
    this.rand = function () {
        return setInterval(()=>{
            let rand = Math.floor(Math.random() *10 )+1;
            game_one.__proto__.number = rand;
            console.log(this.__proto__.number)
        }, 1000)
    }
    this.check = function (){
        return setInterval (() =>{
            console.log(this.__proto__.number);
            if(this.__proto__.number >= 5){
                console.log('finished');
                clearInterval(first);
                clearInterval(second)
            }
        }, 1000)
    }
}
let game_one = new Game();
let game_two = new Game();

var first = game_one.rand();
var second = game_two.check()


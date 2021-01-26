//ZAD 1

let a = document.getElementsByClassName('more-divs');

function f(elems){
    let tab =[];
    for(let i =0;i<elems.length; i++) {
           tab.push(elems[i].tagName);
    }
    return tab
    
}

console.log(f(a))

//ZAD 2

var shortList = document.getElementsByClassName("short-list")[0];

function showData(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}

showData(shortList);

//ZAD 3

const numberData = document.getElementById('datasetCheck');

const variable = (takeNumbers) => {
    console.log(takeNumbers.dataset);
    const numberOne = parseInt(takeNumbers.dataset.numberone)
    const numberTwo = parseInt(takeNumbers.dataset.numbertwo)
    const numberThree =parseInt(takeNumbers.dataset.numberThree)
    let add = numberOne + numberTwo + numberThree
    let substract = numberOne - numberTwo - numberThree;
    
    return [add, substract];
}

console.log(variable(numberData));


//ZAD 4

document.getElementById("spanText").innerHTML = "Js";





//ZAD 5

document.getElementById("spanText").className = "nowa_klasa";


//ZAD 6

var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(e => console.log(e));
    var divClass = "";
    classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
    console.log(divClass);
    classes.classList.remove(...classes.classList);
    console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);


//ZAD 7

const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {
    
    elements.forEach(element => {
        
        if(!element.getAttribute("data-text")) {
            element.dataset.text = "text";
        }
        
    })
    
}

const result = addAttributes(list);

//ZAD 8

let el = document.getElementById("myDiv");
let obj = {
    newClass: 'string_z_parametru'
}
let sting = "mynewclass";

const fun1 = (obj,string) => {
    obj['newClass'] = string;
    console.log(obj)
}
 
fun1(obj,sting);

// console.log(obj)
const fun2 = (el,one) => {
    el.classList.add(one.newClass);
}

fun2(el,obj);
console.log()



//ZAD 9

const div = document.getElementById('numbers');

const addClass = () => {
  let params = Math.floor(Math.random() * 10);
    
  if(params % 2 == 0) div.className = "even";
    else div.className = "odd";
};

addClass();



//ZAD 10

 function f(list) {
            let all = list.querySelectorAll("li")
            let res = []
            for (let i = 0; i < all.length; i++) {
                res.push(all[i].innerText)
            }
            return (res)
        }
        let elem = document.getElementById("longList")
        console.log(f(elem))





//ZAD 11


 function f(list) {
            let all = list.querySelectorAll("li")
            for (let i = 0; i < all.length; i++) {
                let random = Math.floor(Math.random() * 11)
                all[i].setAttribute("data", all[i].innerText)
                all[i].innerText = random
            }
        }
        let elem = document.getElementById("longList")
        console.log(f(elem))

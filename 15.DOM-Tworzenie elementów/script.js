//ZADANIE 1

let div = document.createElement("div")
        div.innerText = "To jest nowy element"
        document.getElementsByTagName("body")[0].appendChild(div)

//ZADANIE 2

let list = document.createElement("ul")
        let tab = ["jablko", "banan", "mandarynka", "granat", "malina", "brzoskwinia"]
        for (let i = 0; i < tab.length; i++) {
            let now = document.createElement("li")
            now.innerText = tab[i]
            list.appendChild(now)
        }
        document.getElementsByTagName("body")[0].appendChild(list)


//ZADANIE 3

let list = document.createElement("ul")
        let tab = ["jablko", "banan", "mandarynka", "granat", "malina", "brzoskwinia"]
        for (let i = 0; i < tab.length; i++) {
            let now = document.createElement("li")
            now.innerText = tab[i]
            list.appendChild(now)
        }
        document.getElementsByTagName("body")[0].appendChild(list)
        document.addEventListener("keydown", function () {
            let li = document.querySelectorAll("li")
            for (let i = 0; i < li.length; i++) {
                console.log(i)
                if (i % 2 == 0) {
                    li[i].parentNode.removeChild(li[i])
                }
            }
        })



//ZADANIE 4

let button = document.createElement("button")
        button.innerText = "Click"
        button.addEventListener("click", function () {
            document.getElementsByTagName("button")[0].parentNode.removeChild(document.getElementsByTagName("button")[0])
        })
        document.getElementsByTagName("body")[0].appendChild(button)


//ZADANIE 5

let random = Math.floor(Math.random() * (10 - 2)) + 2; //Math.floor(Math.random() * (max - min)) + min;
        for (let i = 0; i < random; i++) {
            let now = document.createElement("div")
            now.innerText = "To jest div numer " + (i + 1)
            document.getElementsByTagName("body")[0].appendChild(now)
        }
        
//ZADANIE 6

 let object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span', }
        console.log(object)
        for (let prop in object) {
            let elemName = prop.slice(0, -1)
            let elem = document.createElement(elemName)
            if (typeof (object[prop]) == "string") {
                elem.innerText = object[prop]
            }
            else if (typeof (object[prop]) == "object") {
                let objNext = object[prop]
                for (propNext in objNext) {
                    let elemNameNext = propNext.slice(0, -1)
                    let elemNext = document.createElement(elemNameNext)
                    elemNext.innerText = objNext[propNext]
                    elem.appendChild(elemNext)
                }
            }
            document.getElementsByTagName("body")[0].appendChild(elem)
        }        
        
 //ZADANIE 7 

let firstList = document.createElement("ul")
        for (let i = 0; i < 6; i++) {
            let now = document.createElement("li")
            now.innerText = i
            firstList.appendChild(now)
        }
        let firstButton = document.createElement("button")
        firstButton.setAttribute("id", "firstButton")
        firstButton.innerText = "KLIKNIJ"
        firstButton.addEventListener("click", function () {
            let first = document.getElementById("first")
            let li = first.querySelectorAll("li")
            if (li.length == 1) {
                this.setAttribute("disabled", true)
            }
            document.getElementById("secondButton").removeAttribute("disabled")
            let last = li[li.length - 1]
            let second = document.getElementById("second")
            let ul = second.querySelector("ul")
            ul.appendChild(last)
        })
        document.getElementById("first").appendChild(firstList)
        document.getElementById("first").appendChild(firstButton)

        let secondList = document.createElement("ul")
        let secondButton = document.createElement("button")
        secondButton.setAttribute("disabled", true)
        secondButton.setAttribute("id", "secondButton")
        secondButton.innerText = "KLIKNIJ"
        secondButton.addEventListener("click", function () {
            let first = document.getElementById("second")
            let li = first.querySelectorAll("li")
            if (li.length == 1) {
                this.setAttribute("disabled", true)
            }
            document.getElementById("firstButton").removeAttribute("disabled")
            let last = li[li.length - 1]
            let second = document.getElementById("first")
            let ul = second.querySelector("ul")
            ul.appendChild(last)
        })
        document.getElementById("second").appendChild(secondList)
        document.getElementById("second").appendChild(secondButton)

//ZADANIE 8

document.write('<form> <label> Element: </label ><input type="text" name="elem" /><label>Tekst: </label><input type="text" name="text" /><label>Kolor: </label><input type="text" name="color" /><label>Ilosc: </label><input type="number" name="amount" /><button>Utworz</button>    </form > ')
        document.getElementsByTagName("button")[0].addEventListener("click", function (event) {
            event.preventDefault()
            let allElems = document.getElementsByTagName("form")[0].elements
            let result = []
            for (let i = 0; i < allElems.length; i++) {
                if (allElems[i].localName == "input") {
                    result.push(allElems[i].value)
                }
            }
            let howMany = parseInt(result[3])
            for (let i = 0; i < howMany; i++) {
                let now = document.createElement(result[0])
                now.innerText = result[1]
                now.style.color = result[2]
                document.body.appendChild(now)
            }
        })

//ZADANIE 9

document.write('<form><div class="one"><label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" /></div></form>')
        document.write('<div><button id="wiecej">WIĘCEJ</button><button id="utworz">UTWORZ</button></div>')
        document.getElementById("wiecej").addEventListener("click", function (event) {
            event.preventDefault()
            let one = document.createElement("div")
            one.setAttribute("class", "one")
            one.innerHTML = '<label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" />'
            document.getElementsByTagName("form")[0].appendChild(one)
        })
        document.getElementById("utworz").addEventListener("click", function (event) {
            
            event.preventDefault()
            let all = document.querySelectorAll(".one")
            let table = document.createElement("table")
            let ftr = document.createElement("tr")
            let td1 = document.createElement("td")
            td1.innerText = "Imię"
            let td2 = document.createElement("td")
            td2.innerText = "Nazwisko"
            let td3 = document.createElement("td")
            td3.innerText = "Wiek"
            let td4 = document.createElement("td")
            td4.innerText = "Ilość dzieci"
            let td5 = document.createElement("td")
            td5.innerText = "Usun"
            ftr.appendChild(td1)
            ftr.appendChild(td2)
            ftr.appendChild(td3)
            ftr.appendChild(td4)
            ftr.appendChild(td5)
            table.appendChild(ftr)
            for (let i = 0; i < all.length; i++) {
                let inputs = all[i].querySelectorAll("input")
                let tr = document.createElement("tr")
                for (let j = 0; j < inputs.length; j++) {
                    let td = document.createElement("td")
                    td.innerText = inputs[j].value
                    tr.appendChild(td)
                }
                let del = document.createElement("button")
                del.innerText = "USUN"
                del.setAttribute("class", "del")
                let delTd = document.createElement("td")
                delTd.appendChild(del)
                tr.appendChild(delTd)
                table.appendChild(tr)
            }
            document.body.appendChild(table)
            let dels = document.getElementsByClassName("del")
            for (let i = 0; i < dels.length; i++) {
                dels[i].addEventListener("click", function (event) {
                    event.preventDefault()
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                })
            }
        })


//ZADANIE 10

 function changeLetters() {
            
            let allTd = document.getElementsByTagName("td")
            for (let i = 0; i < allTd.length; i++) {
                let previous = allTd[i].innerText
                let other = previous.split("")
                other.shift()
                other = other.join("")
                previous = previous.slice(0, 1).toUpperCase() + other
                allTd[i].innerText = previous
            }
        }
        document.write('<form><div class="one"><label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" /></div></form>')
        document.write('<div><button id="wiecej">WIĘCEJ</button><button id="utworz">UTWORZ</button></div>')
        document.getElementById("wiecej").addEventListener("click", function (event) {
            event.preventDefault()
            let one = document.createElement("div")
            one.setAttribute("class", "one")
            one.innerHTML = '<label>Imie: </label><input type="text" name="name" /><label>Nazwisko: </label><input type="text" name="surname" /><label>Wiek: </label><input type="number" name="age" /><label>Ilosc dzieci: </label><input type="number" name="numberOfChildren" />'
            document.getElementsByTagName("form")[0].appendChild(one)
        })
        document.getElementById("utworz").addEventListener("click", function (event) {
            event.preventDefault()
            let all = document.querySelectorAll(".one")
            let table = document.createElement("table")
            let ftr = document.createElement("tr")
            let td1 = document.createElement("td")
            td1.innerText = "Imię"
            let td2 = document.createElement("td")
            td2.innerText = "Nazwisko"
            let td3 = document.createElement("td")
            td3.innerText = "Wiek"
            let td4 = document.createElement("td")
            td4.innerText = "Ilość dzieci"
            let td5 = document.createElement("td")
            td5.innerText = "Usun"
            ftr.appendChild(td1)
            ftr.appendChild(td2)
            ftr.appendChild(td3)
            ftr.appendChild(td4)
            ftr.appendChild(td5)
            table.appendChild(ftr)
            for (let i = 0; i < all.length; i++) {
                let inputs = all[i].querySelectorAll("input")
                let tr = document.createElement("tr")
                for (let j = 0; j < inputs.length; j++) {
                    let td = document.createElement("td")
                    td.innerText = inputs[j].value
                    tr.appendChild(td)
                }
                let del = document.createElement("button")
                del.innerText = "USUN"
                del.setAttribute("class", "del")
                let delTd = document.createElement("td")
                delTd.appendChild(del)
                tr.appendChild(delTd)
                table.appendChild(tr)
            }
            document.body.appendChild(table)
            let dels = document.getElementsByClassName("del")
            for (let i = 0; i < dels.length; i++) {
                dels[i].addEventListener("click", function (event) {
                    event.preventDefault()
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                })
            }
            changeLetters()
        })


//ZADANIE 11

let funkcja = function (str) {
            let res = str.match(/\d+/g);
            console.log(res)
            let resNum = 1
            for (let i = 0; i < res.length; i++) {
                let now = parseInt(res[i])
                resNum = resNum * now
            }
            console.log(resNum)
            for (let i = 0; i < resNum; i++) {
                let div = document.createElement("div")
                div.innerText = resNum
                document.getElementsByTagName("body")[0].appendChild(div)
            }
        }
        funkcja("WYZSZA SZKOLA EKONOMI I INFORMATYKI W KRAKOWIE - NABOR ROK 2019")
        
        
 //ZADANIE 12      
       
 let object = {}
        function check(str) {
            object.str = str
            let includes = str.includes("Ala")
            if (includes) {
                object.str = object.str.replace("Ala", "Ola")
                console.log(object)
            }
            else {
                let div = document.createElement("div")
                div.innerText = "Słowo Ala nie wystepuje w tekscie"
                document.body.appendChild(div)
            }
        }
        check("WYZSZA SZKOLA EKONOMI I INFORMATYKI W KRAKOWIE - NABOR ROK 2019")
        
        
  //ZADANIE 13
    function f1(strings) {
            let result = []
            for (let i = 0; i < strings.length; i++) {
                result.push(strings[i].length)
            }
            return (result)
        }
        console.log(f1(["Jeden", "Dwa", "Trzy"]))
        function f2(strings) {
            let result = 0
            for (let i = 0; i < strings.length; i++) {
                result += strings[i].length
            }
            return (result)
        }
        console.log(f2(["Jeden", "Dwa", "Trzy"]))
        function f3(strings) {
            let result = 0
            for (let i = 0; i < strings.length; i++) {
                result += strings[i].length
            }
            result = result / strings.length
            return (result)
        }
        console.log(f3(["Jeden", "Dwa", "Trzy"]))
        
        
    //ZADANIE 14
    
    let object = {
            name: "",
            surname: "",
            age: ""
        }

        function f(name, surname, age) {
            let nameLength = name.length
            let surnameLength = surname.length
            let ageLength = age.length
            object.name = name
            object.surname = surname
            object.age = age
            object.nameLength = nameLength
            object.surnameLength = surnameLength
            object.ageLength = ageLength
            if (nameLength > 5 || surnameLength > 5 || ageLength > 5) {
                let button = document.createElement("button")
                button.innerText = "STAN POCZATKOWY"
                button.addEventListener("click", function () {
                    object = {
                        name: "",
                        surname: "",
                        age: ""
                    }
                })
                document.body.appendChild(button)
            }
        }
        f("Jedenn", "Dwa", "Trzy")

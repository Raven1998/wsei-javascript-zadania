//ZAD 1

document.getElementById("test-event").addEventListener("click", function (event) {
            console.log(event)
        })
        window.addEventListener("mousemove", function (event) {
            console.log(event)
        })
        document.getElementById("test-event").addEventListener("mouseover", function (event) {
            console.log(event)
        })
        window.addEventListener("keydown", function (event) {
            console.log(event)
        })
        window.addEventListener("scroll", function (event) {
            console.log(event)
        })
        document.getElementById("input-test").addEventListener("change", function (event) {
            console.log(event)


//ZAD 2

document.getElementById("ex2").addEventListener("click", function (event) {
            let text = event.target.getAttribute("data")
            document.getElementsByTagName("span")[0].innerText = text


//ZAD 3

const three = (el) => {
    document.getElementById(el).addEventListener('mouseover', (a)=>{
        a.target.style.backgroundColor = 'blue'
    })
      document.getElementById(el).addEventListener('mouseout', (a)=>{
        a.target.style.backgroundColor = 'red'
    })
}
three('ex3');


//ZAD4

const checkInput = () => {
    let el = document.getElementById('input-test')
    el.addEventListener('input', (a)=>{
        let err = document.getElementById('ex3-err');
        (/\d/).test(a.target.value) ? err.innerHTML = "Nie dawaj numerków" : err.innerHTML = null;
    })
}
checkInput();



//ZAD 5

function counter(){
    var span = document.querySelector("#ex5 span");
    var btn = document.getElementById("ex5-button");
    var counter = 0;
    
    btn.addEventListener('click', function addCounter(){
       counter++;
        span.innerText = counter; 
        if(counter == 10){
            btn.removeEventListener('click', addCounter);
        }
        
    });
}

counter();


//ZAD 6

document.addEventListener('scroll', (event) => {
    
    var where = window.scrollY;
    var body = document.querySelector('body');
    
    if (where > 200) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'white';
    }
});


//ZAD 7

const calc = () => {
    let input = document.querySelectorAll('#calculator>div:first-of-type>button');
    let output = document.querySelector('#calculator>input');
    let actions = document.querySelectorAll('#calculator>:nth-child(5)>button');
    
    for(const el of input){
        el.addEventListener('click', ()=> {
            output.value =el.innerHTML;
        })
    }
    
    let tempWynik = [];
    
    const actionCreators = (object) =>{
        // let ac = object.innnerText;
        console.log(object)
        tempWynik.push(output.value,object.innerText)
         console.log(tempWynik)
        output.value=null
        if(tempWynik.length >3){
            output.value = eval(tempWynik.slice(0,-1).join(""))
        }
    }
    
 for (const element of actions) {
        element.addEventListener('click', () => {
            console.log(element.innerText)
            actionCreators(element)

        })
    }
    // console.log(actions,typeof actions)
    
    
}

calc();

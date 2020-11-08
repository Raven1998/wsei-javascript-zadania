//Zadanie 1


let car = {
    name: 'BMW',
    model: "F30",
    Year: 2014,
    
    
}
console.log(car); 
console.log(car.name);


//Zadanie 2

let car = {
    name: 'BMW',
    model: "F30",
    Year: 2014,
	rename (newName) {

	this.name =newName;
}
}   
    

console.log(car);
car.rename("Porshe");
console.log(car);


//Zadanie 3

let object = {
    sum: 0,
    Sum(tab) {
         let result = 0
    for (let i = 0; i < tab.length; i++) {
                    result += tab[i]
                }
                this.sum = result
                console.log(this.sum)
            },
            
        }

  let tab = [1, 2, 3];
        object.Sum(tab);


//Zadanie 4

let object = {
            name: 'BMW',
            age: 12,
	model:"M3"
            
        }
        let result = ""
        for (property in object) {
            result += property + ": " + object[property] + " "
        }
        console.log(result)

//Zadanie 5

let car = {
	name:'BMW',
	age:12,
	object: {
		name:"Nazwa",
		Age:11
}
}
for(i in car)
{
console.log('${i} : ${car.object[i]}');
}

//Zadanie 6

let car = {
	name:'BMW',
	age:12,
	object: {
		name:"Nazwa",
		Age:11
}
}

car.price =200;
car.sayHello = () => console.log("Hello");
car.sayHello();
console.log(car.price);

/*
####################################
Display how obejcts are created
Nested objects
Access objects
Behaviour of this depends on the context on which 
it is context

Invoked within an high level function it refers to window object
Invoked by object it refers to the object
Invoked by anonymous function it refers to window object

####################################
*/


function show(){
    console.log(this);
}

show();

let person = {
    name:'John',
    age:30,
    address : {
        city:'Paris',
        street: "123 Main Street"
    },
    show:show
}

console.log(person['address']['city'])

person.show();

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener('click',show);
btn2.addEventListener('click',function(){
    show();
});

btn2.addEventListener('click',() => 
console.log(this));

function Employee(name,salary,designation){
    this.name=name;
    this.salary=salary;
    this.designation=designation;
}

Employee.prototype.getDetails = function(){
    console.log(`Name is ${this.name} and designation is ${this.designation}`)
}

let bob = new Employee('Bob',100,'Tester');
console.log(bob);

let list =[];
console.log(list);

console.log(Object.getPrototypeOf(bob).constructor);

let tim = new bob.constructor('tim',200,'Dev');
tim.getDetails();

console.log(Object.getPrototypeOf(bob) === bob.__proto__);


function getDetails(){
    console.log(`My name is ${this.fullName} and my age is ${this.age}`);
}

let a = getDetails.bind({fullName:'Tim',age:30});

let increment = {
    counter:0,
    increase: function(){
        console.log(this);
        this.counter++;
        console.log("Counter is ",this.counter);
    }
}


btn3.addEventListener('click',increment.increase.bind(increment));
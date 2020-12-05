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

btn1.addEventListener('click',show);
btn2.addEventListener('click',function(){
    show();
});

btn2.addEventListener('click',() => 
console.log(this));



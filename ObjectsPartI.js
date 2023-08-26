//Objects

// A javaScript is an entity having state and behaviour (properties and method). 
// JavaScript is an object-based language, everything in javaScript is an Object.
// JavaScript is template based not class based, which means we don't create class to get the object. But we directly create objects.

// Creating Objects in JavaScript
// There are 3 ways to create an object in JavaSript
// - By Object literals
// - By creating instance of object directly (using new keywords).
// - By using an object constructor (using new keywords). 

// When we use constructor to create an object it always be a singleton object.


// Object Literals

const user={
  name:"Anup",
  rollno:34,
  address:"Kanpur",
  
}

// By creating instance of Object

var emp=new Object();
emp.id=2243;
emp.name="Anup Maurya";
emp.address="Kanpur";

// By using an Object constructor
//The this keyword refers to the current object.

function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  








//just printing to the console
console.log("hello world");

function add(a,b)
{
	return a + b;
}

var ans=add(5,10);
console.log(ans);

var name ="pat";
var age= 21;
var male=true;
var myArray = new Array();

if(age==21)
{
	console.log("youre still young " + name)
}

var o = new Object();

var anotherObject ={};


/*
ActionScript code to create a class
public class Person
{
	public var name:String;
	public var age: int;
	public var male: boolean;

	function Person()
	{
		this.male=false;
	}

	public growOld()
	{
		this.age++;
	}
}

var p:Person = new Person();
p.name="pat";
p.age=21;
p.male=true;

p.growOld();

*/

//creating an object in JS
var person = {};
person.name="pat";
person.age=21;
person.male=true;

person.growOld=function()
{
	this.age++;
};

//second way - both do the same thing
var anotherPerson=
{
	name: "mary",
	age: 23,
	male: false,
	growOld: function()
	{
		this.age++;
	},
	friends: ["tom","pat"]
};

for(var i=0;i<10;i++)
{
	console.log(anotherPerson.name + " is " + anotherPerson.age);
	anotherPerson.growOld();
}





















const person1 = {
	name: "Peter",
	age: 20,
	status: "resident",
};

const person2 = {
	name: "Amy",
	age: 26,
	status: "tourist",
};

if (person1.age > 18 && person1.status === "resident") {
	console.log(person1.name + " is an adult resident");
} else {
	console.log(person1.name + " is not an adult resident");
}

if (person2.age > 18 && person2.status === "resident") {
	console.log(person2.name + " is an adult resident");
} else {
	console.log(person2.name + " is not an adult resident");
}

function morning(name) {
	return `Good morning ${name.toUpperCase()}`;
}

const greet = function (name, cbTimeOfDay) {
	const myName = "Alex";
	console.log(`${cbTimeOfDay(name)}, my name is ${myName}`);
};

greet("Hannah", morning);
greet("Tasneem", morning);

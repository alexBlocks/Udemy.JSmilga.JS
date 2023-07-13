const fullName = function ({ firstName, lastName }) {
	return `${firstName} ${lastName}`.toUpperCase();
};

const person = {
	firstName: "Hannah",
	lastName: "Banana",
};

console.log(fullName(person));

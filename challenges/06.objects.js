const car = {
	make: "Toyota",
	model: "Crown",
	year: 1997,
	colors: ["silver", "black"],
	hybrid: false,
	drive() {
		console.log("driving...");
	},
	stop() {
		console.log("stopping...");
	},
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

// function calculateTotal(subTotal, tax) {
// 	return subTotal + tax;
// }

const calculateTotal = function (subTotal, tax) {
	return subTotal + tax;
};

let order1 = calculateTotal(42, 69);
let order2 = calculateTotal(7, 41);
let order3 = calculateTotal(6, 9);

console.log(order1, order2, order3);

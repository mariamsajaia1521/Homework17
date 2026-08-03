import { results } from "./data.js";

const prices = [120, -5, 45, 0, -20, 80];
for (const price of prices) {
	if (price <= 0) {
		continue;
	}
	console.log(price);
}

const user = {
	name: "გიორგი",
	age: 28,
	role: "admin",
	isBlocked: false
};
for (const key in user) {
	console.log(`${key}: ${user[key]}`);
}

const systemLogs = ["INFO", "INFO", "WARNING", "ERROR", "INFO"];
for (let i = 0; i < systemLogs.length; i++) {
	if (systemLogs[i] === "ERROR") {
		console.log(i);
		break;
	}
}

let score = 83;
switch (true) {
	case score >= 90:
		console.log("A");
		break;
	case score >= 80 && score <= 89:
		console.log("B");
		break;
	case score >= 70 && score <= 79:
		console.log("C");
		break;
	case score < 70:
		console.log("F");
		break;
}

const products = [
	{ name: "Laptop", price: 2500, inStock: true },
	{ name: "Mouse", price: 50, inStock: false },
	{ name: "Keyboard", price: 150, inStock: true },
	{ name: "Monitor", price: 600, inStock: false }
];
for (const product of products) {
	if (product.inStock && product.price > 100) {
		console.log(product.name);
	}
}
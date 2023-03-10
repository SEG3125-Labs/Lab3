const products = [
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 14.99,
		imgSrc: "img/steak.png",
		category: "Meat"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.99,
		imgSrc: "img/bread.png",
		category: "Other"
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 10.99,
		imgSrc: "img/coffee.png",
		category: "Other"
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.50,
		imgSrc: "img/cheese.png",
		category: "Dairy"
	},
	{
		name: "Strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49,
		imgSrc: "img/strawberries.png",
		category: "Fruit"
	},
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		imgSrc: "img/apples.png",
		category: "Fuit"
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.50,
		imgSrc: "img/pasta.png",
		category: "Other"
	},
	{
		name: "Tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.90,
		imgSrc: "img/tomatoes.png",
		category: "Vegetable"
	},
	{
		name: "Salad",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.49,
		imgSrc: "img/salad.png",
		category: "Vegetable"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99,
		imgSrc: "img/chicken.png",
		category: "Meat"
	},
	{
		name: "Beans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99,
		imgSrc: "img/beans.png",
		category: "Other"
	}
];
let selected = []
let categories = ['Meat', 'Vegetable', 'Dairy', 'Fruit', 'Other']

function openTab(evt, tabName) {
	var tabcontent = document.getElementsByClassName("tabcontent");
	for (var i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	var tablinks = document.getElementsByClassName("tablinks");
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}


	let elm = document.getElementById(tabName)
	elm.style.display = "block";

	evt.target.className += " active"


	// document.getElementById(tabName).style.display = "block";
	// document.getElementById(tabName).className += " active";

	if (tabName == "Products") {
		// Sort the products based on price
		products.sort((a, b) => (b.price - a.price));

		updateProductList()
	}
}

function biggerText() {
	var all = document.getElementById("allText");

	all.style.fontSize = "30px";
}

function smallerText() {
	var all = document.getElementById("allText");

	all.style.fontSize = "16px";
}

function updateProductList() {
	var productList = document.getElementById("productList");

	productList.innerHTML = "";

	var typeOfFood = document.getElementById("type-of-food");

	for (var j = 0; j < categories.length; j++) {
		var categoryLabel = document.createElement("h2");
		categoryLabel.innerHTML = categories[j]
		productList.appendChild(categoryLabel);

		for (var i = 0; i < products.length; i++) {
			if (document.getElementById("Vegitarian").checked && !products[i].vegetarian) {
				console.log(1)
				continue;
			} else if (document.getElementById("GlutenFree").checked && !products[i].glutenFree) {
				console.log(2)
				continue;
			} else if (typeOfFood.options[typeOfFood.selectedIndex].text == "Organic" && !products[i].organic) {
				console.log(3)
				continue;
			} else if (typeOfFood.options[typeOfFood.selectedIndex].text == "Non-Organic" && products[i].organic) {
				console.log(4)
				continue;
			}

			let min = Number(document.getElementById("fromInput").value)

			let max = Number(document.getElementById("toInput").value)


			if (!(products[i].price <= max && products[i].price >= min)) { continue }

			if (categories[j] != products[i].category) { continue; }

			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = products[i].name;

			var Image = document.createElement("img");
			Image.src = products[i].imgSrc;
			Image.height = 70;
			Image.width = 90;

			if (selected.includes(products[i].name)) {
				checkbox.checked = true;
			}

			productList.appendChild(Image);

			productList.appendChild(checkbox);

			var label = document.createElement('label')
			label.htmlFor = products.name;
			label.appendChild(document.createTextNode(products[i].name + " $" + products[i].price));
			productList.appendChild(label);

			productList.appendChild(document.createElement("br"));
			productList.appendChild(document.createElement("br"));
			productList.appendChild(document.createElement("br"));


		}
	}
}


function addToCart() {

	selected = []
	let total = 0;

	let prods = document.getElementsByName("product");
	for (let i = 0; i < prods.length; i++) {
		if (prods[i].checked) {
			selected.push(prods[i].value)
		}
	}

	var d = document.createElement("div");

	d.innerHTML = "You selected : <br><br> <ul>";

	selected.forEach((e) => {
		const product = products.find((e2) => {
			return e2.name === e;

		});
		item = document.createElement("li");
		item.className = "item"

		item.innerHTML = e + " " + product.price

		d.appendChild(item)
		//d.appendChild(document.createElement("br"))
		total += product.price

	})

	d.innerHTML += "</ul><br>"

	let c = document.getElementById('CartContent');
	c.innerHTML = "";

	c.appendChild(d);

	c.append("The total price is: $" + total);

	alert("Products added!!!")

}


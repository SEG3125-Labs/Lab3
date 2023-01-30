const products = [
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 14.99,
		imgSrc: "img/steak.png"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.99,
		imgSrc: "img/bread.png"
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 10.99,
		imgSrc: "img/coffee.png"
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.50,
		imgSrc: "img/cheese.png"
	},
	{
		name: "Strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49,
		imgSrc: "img/strawberries.png"
	},
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		imgSrc: "img/apples.png"
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.50,
		imgSrc: "img/pasta.png"
	},
	{
		name: "Tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.90,
		imgSrc: "img/tomatoes.png"
	},
	{
		name: "Salad",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.49,
		imgSrc: "img/salad.png"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99,
		imgSrc: "img/chicken.png"
	},
	{
		name: "Beans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99,
		imgSrc: "img/beans.png"
	}
];
let selected = []

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
		productList.appendChild(document.createElement("br"));

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

	d.innerHTML = "You selected : <br><br>";

	selected.forEach((e) => {
		const product = products.find((e2) => {
			return e2.name === e;

		});
		item = document.createElement("div");
		item.className = "item"

		item.innerHTML = e
		
		d.appendChild(item)
		d.appendChild(document.createElement("br"))
		total += product.price

	})


	let c = document.getElementById('CartContent');
	c.innerHTML = "";

	c.appendChild(d);

	c.append("The total price is: " + total);

}
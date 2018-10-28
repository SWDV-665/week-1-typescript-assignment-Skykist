class Grocery {
	name: string;
	quantity: number;
	category: string;
	constructor (llama: string, qty: number, cat: string) {
		this.name = llama;
		this.quantity = qty;
		this.category = cat;
	}
}

var groceryList: Grocery[] = [
	new Grocery("Eggs", 12, "eggs"),
	new Grocery("Milk", 1, "dairy"),
	new Grocery("Bread", 1, "bread"),
	new Grocery("Carrots", 5, "produce"),
	new Grocery("Apples", 123, "produce")
]

function displayGroceryList(gList: Grocery[]) {
	var html = "";
	
	for (var i = 0; i<gList.length;i++){
		html += "<p>";
		html += "Name: " + gList[i].name;
		html += ", Quantity: " + gList[i].quantity;
		html += ", Category: " + gList[i].category;
		html += "</p>";
	}
	
	return html;
}

document.body.innerHTML = displayGroceryList(groceryList);

//groceryList.toString();

//displayGroceryList(groceryList);
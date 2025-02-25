// Task 1 

class Product { //Creating Product Class
    constructor(name, id, price, stock) {
    this.name = name; 
    this.id = id; 
    this.price = price; 
    this.stock = stock; 
}
getDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
}; // Showing Product Details 

updateStock(quantity){
    this.stock -= quantity; //Updating Stock
}
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2 

class Order { //Creating Order Class
    constructor(orderId, product, quantity) {
        this.orderId = orderId; 
        this.product = product; 
        this.quantity = quantity; 
        this.totalPrice = product.price * quantity; 
        this.product.updateStock(quantity); 
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    }; //Showing Order Details
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails()); 

//Task 3

class Inventory { //Creating Inventory Class
    constructor() {
        this.products = []; 
        this.orders= []; 
    }
    addProduct(product) {
        this.products.push(product); //Adding Product to inventory 
    }
    listProducts(){
        this.products.forEach(product =>{
            console.log(product.getDetails()); //Listing Products 
        })
        }}

        const inventory = new Inventory();
        inventory.addProduct(prod1);
        inventory.listProducts();
    
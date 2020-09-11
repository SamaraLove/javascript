var myList = [
    ["Chocolate Bar", 3],
    ["Coffee", 5],
    ["Cake", 10],
    ["Tea", 4],
    ["Biscuit", 4]
    ];
    
function increase_no(){
    // return value
    // document.getElementById("value").innerHTML = i;
    var value = parseInt(document.getElementById('number').value, 10);
    value += 1
    document.getElementById('number').value = value;
}

function decrease_no(){
    var value = parseInt(document.getElementById('number').value, 10);
    value -= 1
    document.getElementById('number').value = value;
}

function AddtoCart(name,price){
    //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name=name;
    singleProduct.Price=price;
    //Add newly created product to our shopping cart 
    shoppingCart.push(singleProduct);
    //call display function to show on screen
    displayShoppingCart();

 }  

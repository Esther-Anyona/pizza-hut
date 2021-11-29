
class pizzaOrder{
    constructor(flavour, size, crust, topping, cost){
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this. topping = topping;
    this.cost = cost;
    }
}
$(document).ready(function(){
$('button#checkout').click(function(event){
    let flavour = $('select#flavour').val();
    let size = $('select#size').val();
    let crust = $('select#crust').val();
    let topping = $('select#topping').val();
});
switch (size){
    case "0":
        cost = 0;
        break;
    case "Small":
        cost = 500;
        break;
    case "Medium":
        cost = 800;
        break;
    case "Large":
        cost = 1050;
        break;
    case "Mega":
        cost = 1300;
        break;
}

switch (crust){
    case "0":
        crustCost = 0;
        break;
    case "Crispy":
        crustCost = 100;
        break;
    case "Cheese Stuffed":
        crustCost = 150;
        break;
    case "Flatbread":
        crustCost = 120;
        break;
    case "Deep Dish":
        crustCost = 150;
        break;
    case "Glutten-Free":
        crustCost = 200;
        break;
}

switch (topping){
    case "0":
        toppingCost = 0;
        break;
    case "pepperoni":
        toppingCost = 100;
        break;
    case "barbeque sauce":
        toppingCost = 120;
        break;
    case "sliced mushroom":
        toppingCost = 120;
        break;
    case "extra cheese":
        toppingCost = 90;
        break;
    case "pineapple":
        toppingCost = 60;
        break;
    case "bacon strips":
        toppingCost = 120;
        break;
    case "sausage":
        toppingCost = 100;
        break;
}
if (size==("0")){
    alert("hi");
}
});



// pizzaOrder.prototype.cost = function(){
//     if (this.size ==="small"){
//         this.amount +=500;
//     } else if (this.size ==="medium"){
//         this.amount +=800;
//     } else if (this.size ==="large"){
//         this.amount +=1050;
//     } else if (this.size ==="mega"){
//         this.amount +=1300;
//     } 

//     if (this.crust ==="crispy"){
//         this.amount +=100;
//     } else if (this.crust ==="cheese stuffed"){
//         this.amount +=150;
//     } else if (this.crust ==="flatbread"){
//         this.amount +=120;
//     } else if (this.crust ==="deep dish"){
//         this.amount +=150;
//     } else if (this.crust ==="glutten-free"){
//         this.amount +=200;
//     } 

//     if (this.topping ==="pepperoni"){
//         this.amount +=100;
//     } else if (this.topping ==="barbeque sauce"){
//         this.amount +=120;
//     } else if (this.topping ==="sliced mushroom"){
//         this.amount +=120;
//     } else if (this.topping ==="extra cheese"){
//         this.amount +=90;
//     } else if (this.topping ==="pineapple"){
//         this.amount +=60;
//     } else if (this.topping ==="bacon strips"){
//         this.amount +=120;
//     } else if (this.topping ==="sausage"){
//         this.amount +=100;
//     } 
// };

// pizzaOrder.prototype.totalAmount = function(){
//     let totalOrderAmount = [];
//     for (let arrayElement = 0; arrayElement<orderAmountArray.length; arrayElement++){
//         totalOrderAmount += orderAmountArray[arrayElement];
//     }
//     return totalOrderAmount;
// }
// $(document).ready(function(){

// $('#checkout').onClick(function(){ 
// });
// $('form#select-pizza').submit(function(event){
//     event.preventDefault();
//     let favour = $('select#flavour').val();
//     let size = $('select#size').val();
//     let crust = $('select#crust').val();
//     let topping = $('select#topping').val();
//     let pizzaSelected = (size + ":" + crust + ":" + topping);
//     let newOrder = new pizzaOrder(size, crust, topping);
//     newOrder.cost();
//     totalPriceArray.push(newOrder.amount);
//     $('#total-amount').text(newOrder.totalAmount());
//     $('.summary').append(('<p></p>' + pizzaSelected + '<p></p>'));
// });
// });

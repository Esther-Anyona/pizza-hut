$(document).ready(function(){
    $('.summary').hide();
});
class pizzaOrder{
    constructor(flavour, size, crust, topping, cost){
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this. topping = topping;
    this.cost = cost;
    this.amount = 0;
    }
}

pizzaOrder.prototype.cost = function(){
    if (this.size ==="small"){
        this.amount +=500;
    } else if (this.size ==="medium"){
        this.amount +=800;
    } else if (this.size ==="large"){
        this.amount +=1050;
    } else if (this.size ==="mega"){
        this.amount +=1300;
    } 

    if (this.crust ==="crispy"){
        this.amount +=100;
    } else if (this.crust ==="cheese stuffed"){
        this.amount +=150;
    } else if (this.crust ==="flatbread"){
        this.amount +=120;
    } else if (this.crust ==="deep dish"){
        this.amount +=150;
    } else if (this.crust ==="glutten-free"){
        this.amount +=200;
    } 

    if (this.topping ==="pepperoni"){
        this.amount +=100;
    } else if (this.topping ==="barbeque sauce"){
        this.amount +=120;
    } else if (this.topping ==="sliced mushroom"){
        this.amount +=120;
    } else if (this.topping ==="extra cheese"){
        this.amount +=90;
    } else if (this.topping ==="pineapple"){
        this.amount +=60;
    } else if (this.topping ==="bacon strips"){
        this.amount +=120;
    } else if (this.topping ==="sausage"){
        this.amount +=100;
    } 
};

$('form#select-pizza').submit(function(event){
    event.preventDefault();
    let favour = $('select#flavour').val();
    let size = $('select#size').val();
    let crust = $('select#crust').val();
    let topping = $('select#topping').val();
    let pizzaSelected = (size + ":" + crust + ":" + topping);
    let newOrder = new pizzaOrder(size, crust, topping);
    newOrder.cost();
    totalPriceArray.push(newOrder.amount);
    

})
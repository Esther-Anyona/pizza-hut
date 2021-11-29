$(document).ready(function(){
    $('#checkout').click(function(event){
    event.preventDefault();
        var size = $('#size').val();
        var crust = $('#crust').val();
        var toppings = $('input[type=checkbox]').filter(':checked');
        var totalToppings = toppings.length;
        var total = parseInt(size) + parseInt(crust) + (parseInt(totalToppings)*80);
        // alert(total);
        localStorage.setItem('total', total);
    });

// $(document).ready(function(){
//     $('#delivery').change(function(){
//         var delivery = $(this).val();
//         var deliveryCost;
//   if (delivery =="No"){
//     $('#location-form').hide();
//      deliveryCost = 0;
//   } else {
//     $('#location-form').show();
//      deliveryCost = 150;
//   }
//   localStorage.setItem('deliveryCost', deliveryCost);
//     });
// });   
// });

// $(document).ready(function(){
//     $('#pizza-quantity').change(function(){
//        var quantity = $(this).val();
//        localStorage.setItem('quantity', quantity);
//     });
// })

// $(document).ready(function(){
//     $('#deliver').click(function(){
//         var totalQuantity = parseInt(localStorage.getItem('quantity'));
//         var totalAmount = parseInt(localStorage.getItem('total'));
//         var totalDelivery = parseInt(localStorage.getItem('deliveryCost'));
//         if (totalDelivery){
//             var totalPrice = (totalAmount * totalQuantity) + totalDelivery;
//         } else {
//         var totalPrice = (totalAmount * totalQuantity) + totalDelivery ;
//         }
//         alert(totalPrice);
//     })
// })
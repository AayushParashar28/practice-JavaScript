const cart = ["shoes", "pants", "kurtas"]

createOrder(cart , function(orderID){
    console.log("Order created with ID: ", orderID);
    proceedtoPayment(OrderID);
})



const promise = createOrder(cart)

promise.then(function(orderID){
    proceedtoPayment(orderID)
})
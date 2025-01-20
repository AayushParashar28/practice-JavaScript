const cart = ["shoes", "pants", "kurtas"]

createOrder(cart , function(orderID){
    console.log("Order created with ID: ", orderID);
    proceedtoPayment(orderID);
})



const promise = createOrder(cart)

promise.then(function(orderID){
    proceedtoPayment(orderID)
})

//much better way of promises is now
createOrder(cart)

.then((orderID)=> proceedtoPayment(orderID))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletbalance(paymentInfo))
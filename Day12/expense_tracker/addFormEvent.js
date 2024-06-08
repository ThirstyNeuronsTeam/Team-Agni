const formElement = document.getElementById("transactionForm");
formElement.addEventListener("submit",submitTransaction)
//formElement.addEventListener("submit",storeToStorage)


// Dispose Events If you are not using.
//Disposing is very importabt, if you dont dispose , leads to memory leak.
//formElement.removeEventListener("submit",addTransaction)
//formElement.onsubmit = addTransaction;
//console.log(formElement)
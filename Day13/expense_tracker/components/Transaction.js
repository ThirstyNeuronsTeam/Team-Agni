function Transaction(data, parent, callWhenDeleteButtonClicked) {

  //call backs
  const transactionDelete = () => {
    console.log(data.id)
    callWhenDeleteButtonClicked(data.id)
  };

  const render = () => {
    const transaction = document.createElement("div");
    transaction.id = data.id;
    
    transaction.className = "TransactionWrapper";

    const transactionInnerElements = `
        <button id="delete">Delete</button>
        <div class="TransactionDetails">
           <span>${data.reason}</span>
           <span>${data.amount}</span>
        </div>
        <div style="width:5px;height:100%x;background-color:${
            data.amount < 0 ? "red" : "green"
        }"">
        </div>
      `;

    transaction.innerHTML = transactionInnerElements;

    parent.appendChild(transaction);

    const buttonElement = transaction.querySelector(`#delete`);
    buttonElement.addEventListener("click",transactionDelete)

  };

  const dispose = () => {

  }

  render();
}

let budgetField = document.getElementById("monthly-budget-field");
let addBudgetBtn = document.getElementById("add-budget-btn");

let productTitleField = document.getElementById("product-title-field");
let productCostField = document.getElementById("product-cost-field");
let dateField = document.getElementById("date");
let addExpenseBtn = document.getElementById("add-expense-btn");

let totalAmount = document.getElementById("total-amount");
let expensesAmount = document.getElementById("expenses-amount");
let remainAmount = document.getElementById("remain-amount");

let expenseTable = document.getElementById("expense-table");

let listContainer = document.getElementById("list-container");

let totalExpenses = 0

addBudgetBtn.addEventListener("click", function () {
    if (budgetField.value === "") {
        alert("Please enter a budget!")
    } else {
        totalAmount.innerText = budgetField.value;
        remainAmount.innerText = budgetField.value - totalExpenses;
    }

})


addExpenseBtn.addEventListener("click", function () {
    if (productTitleField.value === "") {
        alert("Please enter a product title!")
    } else if (productCostField.value === "") {
        alert("Please enter the product cost!")
    } else if (dateField.value === "") {
        alert("Please enter the date!")
    } else {

        totalExpenses = totalExpenses + (+productCostField.value);
        expensesAmount.innerText = totalExpenses;
        remainAmount.innerText = budgetField.value - totalExpenses;

        let tableObj = {
            title: productTitleField.value,
            cost: productCostField.value,
            date: dateField.value
        }
        let table = `
          <tr id = "table-row">
          <td>${tableObj.title}</td>
          <td>${tableObj.cost}</td>
          <td>${tableObj.date}</td>
          <td><button class = "delete-btn">Delete</button></td>
          </tr> `;

        expenseTable.innerHTML += table;
        listContainer.style.paddingBottom = "20px";
        listContainer.style.display = "block";

        let deleteBtn = document.getElementsByClassName("delete-btn");
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener("click", function () {
                let tableRow = this.parentNode.parentNode;
                let deletedExpense = parseInt(tableRow.querySelector("td:nth-child(2)").innerText);
                totalExpenses = totalExpenses - deletedExpense;
                expensesAmount.innerText = totalExpenses;
                remainAmount.innerText = budgetField.value - totalExpenses;
                tableRow.remove();
            });
        }

        productTitleField.value = "";
        productCostField.value = "";
        dateField.value = "";

    }
})



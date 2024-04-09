
const data = [];
let count = 0;

function addExpenses() {
    document.getElementById('list').innerHTML = '';
    let budget = document.getElementById('userMoney').value;

    let balance = document.getElementById('balance');
    let userInput = document.getElementById('userInput').value;
    let userCost = document.getElementById('userCost').value;

    count += 1;


    if (!userInput || !userCost || !budget) {
        return alert("All Fields are Required");
    } else if (userCost <= 0 || budget <= 0) {
        return alert("Amount should be greater than zero")
    }

    data.push({ count: count, name: userInput, amount: parseInt(userCost) });
    console.log(data)

    document.getElementById('budget').innerText = budget;


    // document.getElementById('count').createAttribute("id", `count${count}`);
    let expenses = document.getElementById('expenses');
    expenses.innerText = Number(expenses.innerText) + Number(userCost);
    console.log('expenses: ', Number(expenses.innerText))


    if (!balance.innerText || balance.innerText == 0) {
        balance.innerText = budget - userCost;
        console.log('balace: ', balance.innerText)
    } else {
        balance.innerText = balance.innerText - userCost;
        console.log('balace: ', balance.innerText)
    };

    displayData();

    setValues();
}

function displayData() {
    let i = 0;
    data.forEach((item) => {
        i += 1;
        document.getElementById('list').innerHTML += ` <p class="p-3 bg-secondary rounded text-white ps-3 w-100 d-flex justify-content-between" id="list${item.count}">
        <span>
            <span class="me-4">${i}</span>
            <span>${item.name}</span>
        </span>
        <span>${item.amount}</span>
        <span class="icons" id="icons "><i class="bi bi-pencil-square me-3 p-3 rounded bg-success" onclick="edit('${item.name}',${item.amount},${item.count},${i})"></i>
            <i class="bi bi-trash me-3 p-3 rounded bg-danger"  onclick="del(${item.count},${item.amount},${i})" ></i></span>
    </p>`;
        i
    })
}

function setValues() {
    var items = document.querySelectorAll('input.user');
    items.forEach(singleInput => singleInput.value = '');
    // console.log(items)
}

function del(count, amount, i) {
    balance.innerText = Number(balance.innerText) + amount;
    expenses.innerText = Number(expenses.innerText) - amount;

    console.log(document.getElementById('list' + count));
    data.splice(data.findIndex(a => a.count === count), 1);
    i--;
    document.getElementById('list').innerHTML = '';
    displayData();
    console.log(data)
}

function edit(name, amount, count, i) {
    console.log(name);
    userInput.value = name;

    userCost.value = amount;
    console.log(document.getElementById('list' + count));
    // console.log('clicked');
    data.splice(data.findIndex(a => a.count === count), 1);
    console.log(count - 1);
    console.log(data)
    i--;
    document.getElementById('list').innerHTML = '';
    displayData();
}

function reset() {
    if (confirm("Are you sure? This will delete all the records.") == true) {
        location.reload();
    }
}
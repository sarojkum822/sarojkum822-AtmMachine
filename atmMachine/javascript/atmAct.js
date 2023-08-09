let redCard = {
    name: 'Abhishek',
    pin: 1757,
    accBalance: 50000
}
let blueCard = {
    name: 'Manish',
    pin: 8810,
    accBalance: 500000
}
let minSt = '';

let cardInserted = false;

let wcClicked = false;
let dcClicked = false;
let msClicked = true;

const rcb = document.getElementById('rcb');
const bcb = document.getElementById('bcb');

const cb = document.getElementById('cb');
const wc = document.getElementById('wc');
const dc = document.getElementById('dc');
const ms = document.getElementById('ms');

const pin = document.getElementById('pin');
const withEnter = document.getElementById('withEnter');
const depEnter = document.getElementById('depEnter');

const homeBtn = document.getElementById('homeBtn');
const remCard = document.getElementById('remCard');

rcb.addEventListener('click', () => {
    if (cardInserted == false) {
        cardInserted = true;
        document.getElementById('mainBody').style.visibility = 'visible';
        document.getElementById('rcb').style.backgroundColor = 'red';
        document.getElementById('rcb').innerHTML = 'inserted';
        document.getElementById('rcb').style.color = 'white';

    }

});
bcb.addEventListener('click', () => {
    if (cardInserted == false) {
        cardInserted = true;
        document.getElementById('mainBody').style.visibility = 'visible';
        document.getElementById('bcb').style.backgroundColor = 'blue';
        document.getElementById('bcb').innerHTML = 'inserted';
        document.getElementById('bcb').style.color = 'white';
    }


});

cb.addEventListener('click', () => {
    document.getElementById('mainBody').style.display = 'none';
    document.getElementById('pinBody').style.display = 'flex';
});

wc.addEventListener('click', () => {
    wcClicked = true;
    document.getElementById('mainBody').style.display = 'none';
    document.getElementById('pinBody').style.display = 'flex';
});

dc.addEventListener('click', () => {
    dcClicked = true;
    document.getElementById('mainBody').style.display = 'none';
    document.getElementById('pinBody').style.display = 'flex';
});

ms.addEventListener('click', () => {
    msClicked = true;
    document.getElementById('mainBody').style.display = 'none';
    document.getElementById('pinBody').style.display = 'flex';
});

const redCardTransactionList = [];
const blueCardTransactionList = [];
class Account{
    DepositedAmount = [];
    CreditedAmount = []
}
var redAccount = new Account();


pin.addEventListener('click', () => {
    if (document.getElementById('pn').value == redCard.pin && document.getElementById('rcb').innerHTML == 'inserted') {
        document.getElementById('pinBody').style.display = 'none';
        if (wcClicked == true) {
            document.getElementById('withBody').style.display = 'flex';
            wcClicked = false;
        }
        else if (dcClicked == true) {
            document.getElementById('depBody').style.display = 'flex';
            dcClicked = false;
        }
        else if (msClicked == true) {
            document.getElementById('disHeading').innerHTML = `${minSt}`;
            document.getElementById('balance').innerHTML = `Current Balance: ₹ ${redCard.accBalance}`;
            document.getElementById('disScreen').style.display = 'flex';
            msClicked = false;
        }
        else {
            document.getElementById('disHeading').innerHTML = `Hello Mr. ${redCard.name}, your balance is:`;
            document.getElementById('balance').innerHTML = `₹ ${redCard.accBalance}`;
            document.getElementById('disScreen').style.display = 'flex';
        }
    }
    else if (document.getElementById('pn').value == blueCard.pin && document.getElementById('bcb').innerHTML == 'inserted') {
        document.getElementById('pinBody').style.display = 'none';
        if (wcClicked == true) {
            document.getElementById('withBody').style.display = 'flex';
            wcClicked = false;
        }
        else if (dcClicked == true) {
            document.getElementById('depBody').style.display = 'flex';
            dcClicked = false;
        }
        else if (msClicked == true) {
            document.getElementById('disHeading').innerHTML = `${minSt}; balance: ₹ ${blueCard.accBalance}`;
            document.getElementById('balance').innerHTML = `₹ ${blueCard.accBalance}`;
            document.getElementById('disScreen').style.display = 'flex';
            msClicked = false;
        }
        else {
            document.getElementById('disHeading').innerHTML = `Hello Mr. ${blueCard.name}, your balance is:`;
            document.getElementById('balance').innerHTML = `₹ ${blueCard.accBalance}`;
            document.getElementById('disScreen').style.display = 'flex';
        }

    }
    else {
        alert('Wrong Pin Entered');
    }


});

withEnter.addEventListener('click', () => {
    let amount = document.getElementById('withAmount').value;
    if (document.getElementById('pn').value == redCard.pin && document.getElementById('rcb').innerHTML == 'inserted') {

        redCard.accBalance -= parseFloat(amount);
        minSt += `${new Date()} ₹${amount} Debited balance: ₹${redCard.accBalance}`;
        document.getElementById('withBody').style.display = 'none';
        document.getElementById('disHeading').innerHTML = `₹ ${amount} withdrawn, your balance is:`;
        document.getElementById('balance').innerHTML = `₹ ${redCard.accBalance}`;
        document.getElementById('disScreen').style.display = 'flex';
        redCardTransactionList.push(amount);
        redAccount.DepositedAmount.push(amount);
        console.log(redAccount);
    }
    else {
        blueCard.accBalance -= parseFloat(amount);
        minSt += `${new Date()} ₹${amount} Debited balance: ₹${blueCard.accBalance}`;
        document.getElementById('withBody').style.display = 'none';
        document.getElementById('disHeading').innerHTML = `₹ ${amount} withdrawn, your balance is:`;
        document.getElementById('balance').innerHTML = `₹ ${blueCard.accBalance}`;
        document.getElementById('disScreen').style.display = 'flex';
        blueCardTransactionList.push(amount);
    }
    

});

depEnter.addEventListener('click', () => {
    if (document.getElementById('pn').value == redCard.pin && document.getElementById('rcb').innerHTML == 'inserted') {

        redCard.accBalance += parseFloat(document.getElementById('depAmount').value);
        minSt += `${new Date()} ₹${document.getElementById('depAmount').value} Credited balance: ₹${redCard.accBalance}`;
        document.getElementById('depBody').style.display = 'none';
        document.getElementById('disHeading').innerHTML = `₹ ${document.getElementById('depAmount').value} deposited, your balance is:`;
        document.getElementById('balance').innerHTML = `₹ ${redCard.accBalance}`;
        document.getElementById('disScreen').style.display = 'flex';
    }
    else {
        blueCard.accBalance += parseFloat(document.getElementById('depAmount').value);
        minSt += `${new Date()} ₹${document.getElementById('depAmount').value} Credited; balance: ₹${blueCard.accBalance}`;
        document.getElementById('depBody').style.display = 'none';
        document.getElementById('disHeading').innerHTML = `₹ ${document.getElementById('depAmount').value} deposited, your balance is:`;
        document.getElementById('balance').innerHTML = `₹ ${blueCard.accBalance}`;
        document.getElementById('disScreen').style.display = 'flex';

    }

});



homeBtn.addEventListener('click', () => {
    document.getElementById('disScreen').style.display = 'none';
    document.getElementById('mainBody').style.display = 'flex';
});

remCard.addEventListener('click', () => {
    if (document.getElementById('rcb').innerHTML == 'inserted') {
        document.getElementById('rcb').innerHTML = 'insert';
        document.getElementById('rcb').style.backgroundColor = 'white';
        document.getElementById('rcb').style.color = 'black';
        document.getElementById('mainBody').style.visibility = 'hidden';
        cardInserted = false;
        minSt = '';

    }
    else {
        document.getElementById('bcb').innerHTML = 'insert';
        document.getElementById('bcb').style.backgroundColor = 'white';
        document.getElementById('bcb').style.color = 'black';
        document.getElementById('mainBody').style.visibility = 'hidden';
        cardInserted = false;
        minSt = '';

    }
});

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// MY CODE

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const balanceValue = document.querySelector('.balance');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 6500];

//Array from method
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelector('.movements__value'));
//   el => Number(el.textContent.replace());
//   console.log(movementsUI);
// });

const displayMov = function () {
  movements.map(function (value, i, array) {
    const type =
      value < 0
        ? ` ${i + 1} :${Math.abs(value)} Withdraw`
        : `${i + 1} : ${value} Deposit`;
    // console.log(type);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${value < 0 ? 'withdrawal' : 'deposit'
      }">${type}</div>
    <div class="movements__value">${value}</div>
    </div> `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMov(account2.movements);

function balanceShow() {
  let balance = movements.reduce(function (ac, value, i, array) {
    return ac + value;
  }, 0);

  const html2 = `
        <p class="balance__value--${balance}">${balance}€</p>
  `;
  labelBalance.innerHTML = html2;
  return balance;
}

const balance = balanceShow();
console.log(balance);
// console.log(balance);

//Manipulating the LOAN AMOUNT

// function LoanReturn() {
//   let loanAmount = inputLoanAmount.value;
//   console.log(loanAmount);
// }

// LoanReturn();

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  let loanAmount = parseFloat(inputLoanAmount.value);
  movements.push(loanAmount);
  displayMov();
  balanceShow();

  // const html2 = `
  // <div class="balance">
  //       <p class="balance__value">${loanAmount}€</p>
  //     </div> `;

  // labelBalance.insertAdjacentHTML('afterbegin', html2);
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  let amountTransfer = parseFloat(inputTransferAmount.value);

  let newBalance = balance - amountTransfer;
  if (newBalance < 0) {
    return `Insufficient Balance`;
  }
  console.log(newBalance);

  movements.push(-newBalance);
  labelBalance.textContent = newBalance;

  displayMov();
  // if (newBalance === 0) {
  //   return 0;
  // } else newBalance < 0;
  // return 'Null';

  balanceShow();
});

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

////////////////////////////////////////////////
//Array Methods Practice
const bankDeposits = accounts.movements.flat();
console.log(bankDeposits);


// Coding Challenge - 4
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate
 the recommended food portion and add it to the object as a new property. 
 Do NOT create a new array, simply loop over the array. 
 Forumla: recommendedFood = weight ** 0.75 * 28. 
 (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" 
and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating 
EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are 
eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an 
ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

*/

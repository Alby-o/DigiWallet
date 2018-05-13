var banks = ["Commonwealth Bank", "ANZ", "Westpac"];

var expenseDescriptions = ["McDonalds", "Guitar Lessons", "7-11", "Bus fare"];

class Transaction {
  constructor(value, description) {
    this._value = value;
    this.description = description;
  }

  get value() {
    return parseFloat(this._value);
  }
}

class Account {
  constructor(accountName, accountNumber, bsb, bank = null, transactions = null) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.bsb = bsb;
    this.transactions = [];

    if(bank) {
      this.bank = bank;
    } else {
      this.bank = banks[Math.floor(Math.random() * banks.length)];
    }

    if (transactions) {
      for(var i = 0; i < transactions.length; i++) {
        this.addTransaction(transactions[i]._value,
            transactions[i].description);
      }
    } else {
      for (var i = 0; i < Math.floor(Math.random() * 20) + 5; i++) {
        this.generateNewTransaction();
      }
    }
  }

  generateNewTransaction() {
    if(this.balance > 200 && Math.random() < 0.8) {
      var description = expenseDescriptions[Math.floor(Math.random() * expenseDescriptions.length)];
      this.transactions.push(new Transaction((Math.random() * -30).toFixed(2), description));

    } else {
      this.transactions.push(new Transaction((Math.random() * 200 + 200).toFixed(2), "Salary"));
    }
  }

  addTransaction(value, description) {
    this.transactions.push(new Transaction(value, description));
  }

  get balance() {
    var balance = 0;
    for(var i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].value;
    }
    return balance;
  }
}

class User {
  constructor(firstname, surname, email, password, accounts = null) {
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.accounts = [];

    if(accounts) {
      for(var i = 0; i < accounts.length; i++) {
        var account = new Account(accounts[i].accountName,
            accounts[i].accountNumber,
            accounts[i].bsb,
            accounts[i].bank,
            accounts[i].transactions);
        this.accounts.push(account);
      }
    }
  }

  addAccount(accountName, accountNumber, bsb) {
    for(var i = 0; i < this.accounts.length; i++) {
      if(this.accounts[i].accountNumber == accountNumber) {
        throw new Error("Cannot have same account number");
      }
    }
    var account = new Account(accountName, accountNumber, bsb);
    this.accounts.push(account);
  }
}

function getUser() {
  if(localStorage.user) {
    var u = JSON.parse(localStorage.user);
    return new User(u.firstname, u.surname, u.email, u.password, u.accounts);
  }

  return null;
}

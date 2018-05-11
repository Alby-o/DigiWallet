var banks = [
  "Commonwealth Bank",
  "ANZ",
  "Westpac"
]

class Account {
  constructor(accountName, accountNumber, bsb) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.bsb = bsb;

    this.bank = banks[Math.floor(Math.random() * banks.length)];
  }
}

class User {
  constructor(firstname, surname, email, password) {
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.accounts = [];
  }

  addAccount(accountName, accountNumber, bsb) {
    var account = new Account(accountName, accountNumber, bsb);
    this.accounts.push(account);
  }
}

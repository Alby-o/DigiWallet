var banks = ["Commonwealth Bank", "ANZ", "Westpac"];

class Account {
  constructor(accountName, accountNumber, bsb) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.bsb = bsb;

    this.bank = banks[Math.floor(Math.random() * banks.length)];
  }
}

class User {
  constructor(firstname, surname, email, password, accounts = null) {
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.password = password;
    if(accounts) {
      this.accounts = accounts;
    } else {
      this.accounts = [];
    }
  }

  addAccount(accountName, accountNumber, bsb) {
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

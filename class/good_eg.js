class BankAccount {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        } 
        else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        console.log(this.balance);
    }

}

let acc1 = new BankAccount("Aman", 1000);

acc1.deposit(500);
acc1.withdraw(200);
acc1.getBalance();


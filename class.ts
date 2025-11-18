class creatbank {
  private balance: number = 10;

  deposit(amount: number) {
    this.balance += amount;
    if (this.balance > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount: number) {
    this.balance -= amount;
    if (this.balance > 0) {
      this.balance += amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}
const bank = new creatbank();
bank.deposit(20);
bank.withdraw(5);
console.log(bank.getBalance());
bank.withdraw(30);
console.log(bank.getBalance());
export {};

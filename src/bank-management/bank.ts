class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
    this.name = name;
    this.balance = initialDeposit;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount");
    }

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount or insufficient funds");
    }
    this.balance -= amount;
  }

  transfer(receiver: Customer, amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid transfer amount or insufficient funds");
    }
    this.balance -= amount;
    receiver.deposit(amount);
  }

  getBalance(): number {
    return this.balance;
  }
  getName(): string {
    return this.name;
  }
}

class Bank {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getCustomerBalance(customerName: string): number | undefined {
    const customer = this.customers.find((c) => c.getName() === customerName);
    return customer?.getBalance();
  }

  getTotalBankBalance(): number {
    return this.customers.reduce(
      (total, customer) => total + customer.getBalance(),
      0
    );
  }
}

export { Customer, Bank };

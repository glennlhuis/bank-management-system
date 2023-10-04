import { Customer, Bank } from "../src/bank-management/bank";

describe("Bank Management", () => {
  let bank: Bank;
  let customer1: Customer;
  let customer2: Customer;

  beforeEach(() => {
    bank = new Bank();
    customer1 = new Customer("Juan Cho", 3000);
    customer2 = new Customer("Jane Smith", 1500);
  });

  describe("Positive Scenarios", () => {
    test("should add and get customer information correctly", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(bank.getCustomerBalance("Juan Cho")).toBe(3000);
      expect(bank.getCustomerBalance("Jane Smith")).toBe(1500);
    });

    test("should return undefined for non-existent customers", () => {
      expect(bank.getCustomerBalance("Non-Existent Customer")).toBeUndefined();
    });

    test("should deposit money successfully", () => {
      bank.addCustomer(customer1);
      customer1.deposit(1500);
      expect(customer1.getBalance()).toBe(4500);
    });

    test("should withdraw money successfully", () => {
      bank.addCustomer(customer1);
      customer1.withdraw(1500);
      expect(customer1.getBalance()).toBe(1500);
    });

    test("should transfer money correctly", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      customer1.transfer(customer2, 500);

      expect(customer1.getBalance()).toBe(2500);
      expect(customer2.getBalance()).toBe(2000);
    });

    test("should be able to see bank total balance", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(bank.getTotalBankBalance()).toBe(4500);
    });
  });

  describe("Negative Scenarios", () => {
    test("should throw an error for invalid deposit amount", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(() => customer1.deposit(-200)).toThrowError(
        "Invalid deposit amount"
      );
    });

    test("should throw an error for invalid withdraw amount", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(() => customer1.withdraw(7000)).toThrowError(
        "Invalid withdrawal amount or insufficient funds"
      );
    });

    test("should throw an error for invalid transfer amount", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(() => customer1.transfer(customer2, -200)).toThrowError(
        "Invalid transfer amount or insufficient funds"
      );
    });

    test("should throw an error for transfer insufficient funds", () => {
      bank.addCustomer(customer1);
      bank.addCustomer(customer2);

      expect(() => customer1.transfer(customer2, 4000)).toThrowError(
        "Invalid transfer amount or insufficient funds"
      );
    });
  });
});

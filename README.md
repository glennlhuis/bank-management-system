# Bank Management System

This simple Bank Management System allows you to create customer accounts, make deposits, withdrawals, transfer money between accounts, and check account balances.
**Note: This repository is part of a code challenge from a company.**

## Installation

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/glennlhuis/bank-management-system.git
```

2. Navigate to the project directory:

```bash
   cd bank-management-system
```

3. Install the project dependencies:

```bash
   npm install
```

## Usage
To run the unit tests using Jest, use the following command:
### Running Unit Tests
```bash
   npm test
```
Jest will execute the test cases defined in the tests directory and provide feedback on the test results.

## Features
- Customers can join the bank by providing their name and an initial deposit.
- Deposit and withdraw money from customer accounts.
- Transfer money from one customer to another.
- Check the account balance of a customer.
- View the total balance of the bank.

## Code Structure
- `src/bank-management/bank.ts`: Defines the Customer class and Bank class.
- `tests/bank-test.ts`: Contains unit tests for the program.

## Test Cases
The following test scenarios are covered.

- Adding and retrieving customer information.
- Depositing and withdrawing money successfully.
- Transferring money correctly.
- Retrieving bank information.
- Handling errors for invalid inputs and insufficient funds.

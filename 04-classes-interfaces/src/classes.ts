abstract class Department {
  static fiscalYear = 2021;
  // name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //this.name = n;
    //console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string): void {
    if (name === "Andres") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}
// Not new Department but using class as grouping mechanism
const employee1 = Department.createEmployee("Andres");
console.log(employee1);

const it = new ItDepartment("d1", ["Andres"]);

it.addEmployee("Andres");
it.addEmployee("Sam");

it.describe();
it.printEmployeeInformation();

const accounting = AccountingDepartment.getInstance();
// error
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year end report";

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.getReports();

accounting.addEmployee("Andres");
accounting.addEmployee("Alf");

accounting.printEmployeeInformation();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();

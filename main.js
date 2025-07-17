//write your code here to make the tests pass
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work(office) {
    office.addTenDocuments(this.name);
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }

  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this._managers = [];
    this._cleaners = [];
  }

  addTenDocuments(EmployeeName) {
    for (let i = 0; i < 10; i++) {
      this.documents.push(new Document(EmployeeName));
    }
  }

  get managers() {
    return this._managers;
  }

  get cleaners() {
    return this._cleaners;
  }

  hireManager(name) {
    const manager = new Manager(name);
    this.managers.push(manager);
  }
  hireCleaner(name) {
    const cleaner = new Cleaner(name);
    this.cleaners.push(cleaner);
  }
  startWorkDay() {
    for (let cleaner of this._cleaners) {
      cleaner.clean();
    }
    for (let manager of this.managers) {
      manager.askEmployeesToWork(this);
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  hireEmployee(name) {
    const emp = new Employee(name);
    this.employees.push(emp);
  }

  askEmployeesToWork (office) {
    for (let employee of this.employees) {
      employee.work(office);
    }
  }
}

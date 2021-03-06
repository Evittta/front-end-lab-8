function Company(company) {
    this.name = company.name;
    this.owner = company.owner;
    this.maxCount = company.maxCompanySize;
    const _employees = [];
    const _logs = [];
    let _timeStartWorking, _timeEndWorking;
    _logs.push(`${this.name} was created in ${new Date()}`);
    this.addNewEmployee = function(employee) {
        if (employee instanceof Employee) {
            if ( !employee._companyName ) {
                if (_employees.length === this.maxCount) {
                    this.removeEmployee( getEmployeeWithSmallestSallary(employee) );
                }
                _employees.push(employee);
                _timeStartWorking = new Date();
                employee.hire(_timeStartWorking, this.name);
                _logs.push(`${employee.name} starts working at ${this.name} in ${_timeStartWorking}`);
            } else {
                console.error(`${employee.name} is working in other company`);
            }
        } else {
            console.error(`Please try to add Employee instance`);
        }
    }
    this.removeEmployee = function(id) {
        if ( Number.isFinite(id) && id >= 0 && id < _employees.length ) {
            _timeEndWorking = new Date();
            _employees[id].fire(_timeEndWorking, this.name);
            _logs.push(`${_employees[id].name} ends working at ${this.name} in ${_timeEndWorking}`);
            _employees.splice(id, 1);
        } else {
            console.error(`Please input number less than ${_employees.length}`);
        }
    }
    this.getAverageSalary = function() {
        let averageSalary = 0;
        for (let i = 0; i < _employees.length; i++) {
            averageSalary += _employees[i].salary;
        }
        averageSalary /= _employees.length;
        return averageSalary;
    }
    this.getEmployees = function() {
        return _employees;
    }
    this.getFormattedListOfEmployees = function () {
        const listOfEmployees = [];
        for (let i = 0; i < _employees.length; i++) {
            listOfEmployees.push(`${_employees[i].name} works in ${this.name} ${(new Date() - 
                                    _employees[i]._timeStartWorking) / 1000} seconds`);
        }
        return listOfEmployees.join(`\n`);
    }
    this.getAverageAge = function() {
        let averageAge = 0;
        for (let i = 0; i < _employees.length; i++) {
            averageAge += _employees[i].age;
        }
        averageAge /= _employees.length;
        return averageAge;
    }
    this.getHistory = function() {
        return _logs.join(`\n`);
    }
    function getEmployeeWithSmallestSallary(employee) {
        let minSalary = _employees[0].salary;
        let id = 0;
        for (let i = 1; i < _employees.length; i++) {
            if (_employees[i].salary < minSalary) {
                minSalary = _employees[i].salary;
                id = i;
            }
        }
        return id;
    }
}

function Employee(employee) {
    this.name = employee.name;
    this.age = employee.age;
    this.salary = employee.salary;
    this.primarySkill = employee.primarySkill;
    this._timeStartWorking;
    this._companyName;
    let _timeEndWorking;
    let _timeInCompanies = 0;
    const _logs = [];
    this.getSalary = function() {
        return this.salary;
    }
    this.setSalary = function(newSalary) {
        if( Number.isFinite(newSalary) && newSalary > 0 ) {
            if (newSalary > this.salary) {
                _logs.push(`change salary from ${this.salary} to ${newSalary}`);
                this.salary = newSalary;
            } else {
                _logs.push(`try to change salary from ${this.salary} to ${newSalary}`);
            }
        } else {
            console.error(`Please input number greater than 0`);
        }
    }
    this.getWorkTimeInSeconds = function() {
        let _fullTimeInCompanies;
        if (this._companyName) {
            _fullTimeInCompanies = _timeInCompanies + (new Date() - 
                                        this._timeStartWorking) / 1000;
            return _fullTimeInCompanies;
        } else {
            _fullTimeInCompanies = _timeInCompanies;
            return _fullTimeInCompanies;
        }
    }
    this.hire = function(startWorking, companyName) {
        this._timeStartWorking = startWorking;
        this._companyName = companyName;
        _logs.push(`${this.name} is hired to ${this._companyName} in ${this._timeStartWorking}`);
    }
    this.fire = function(endWorking, companyName) {
        _timeEndWorking = endWorking;
        _timeInCompanies += (_timeEndWorking - this._timeStartWorking) / 1000;
        _logs.push(`${this.name} is fired from ${companyName} in ${_timeEndWorking}`);
        this._companyName = ``;
    }
    this.getHistory = function() {
        return _logs.join(`\n`);
    }
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());

console.log(epam.getAverageSalary());
console.log(epam.getAverageAge());

epam.addNewEmployee(5,6,9,5);

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds());
   console.log(epam.getFormattedListOfEmployees());
   console.log(epam.getEmployees());
}, 5000);

vova.setSalary(900);
console.log(vova.getSalary());
vova.setSalary(2200);
console.log(vova.getHistory());
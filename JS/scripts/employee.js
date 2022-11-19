//Class Employee used with Section 15 practice Example
class Employee {
    constructor(firstName, lastname, social, jobTitle, salary) {
        this._firstName = firstName;
        this._lastName = lastname;
        this._social = social;
        this._jobTitle = jobTitle;
        this._salary = salary;
        this._active = true;
    }

    fire() {
        this._active = false;
    }

    info() {
        if(this._active) {
            const info = `Name of Employee ${this._firstName} - ${this._lastName}, <br/>SSN: 
            ${this._social}, Salary: ${this._salary}<br/>`;
            return info;
        } else {
            const info = "Employee is not active." + "<br/>";
            return info;
        }
    }
}

class PTEmployee extends Employee {
    constructor(firstName, lastname, social, jobTitle, salary, hrsPerWeek) {
        super(firstName, lastname, social, jobTitle, salary);
        this._HoursPerWeek = hrsPerWeek;
    }

    info() {
        if(this._active) {
            super.info();
            const info = super.info() + `HPW: ${this._HoursPerWeek}<br/>`;
            return info;
        } else {
            const info = "Employee is not active." + "<br/>";
            return info;
        }
    }
}
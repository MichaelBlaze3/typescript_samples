var Employee = (function () {
    function Employee(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Employee.prototype.addEmployee = function () {
        return 1;
    };
    Employee.prototype.edit = function () {
        return true;
    };
    Employee.prototype.add = function () {
        return 1;
    };
    Employee.prototype["delete"] = function () {
        return 1;
    };
    return Employee;
}());
var testEmp = new Employee('Michael', 'Blas');
testEmp.address.addressLine1 = 'India';
testEmp.age = 23;
testEmp.addEmployee();
testEmp.edit();
console.log(testEmp);

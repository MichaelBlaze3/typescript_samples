class Employee implements IEmployee{
    // Pascal Case for the name of the class
    firstName: string;
    lastName: string;
    age: number;
    address: IAddress;

    constructor(private calc: CalculatorService, fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    addEmployee() {
        this.calc.addNumber(2,3);
        return 1;
    }

    edit(){
        return true;
    }

    add(){
        return 1;
    }

    delete(){
        return 1;
    }
}

let testEmp = new Employee('Michael', 'Blas');
testEmp.address.addressLine1 = 'India';
testEmp.age = 23;

testEmp.addEmployee();
testEmp.edit();

console.log(testEmp);

interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zip: number;
}

interface IEmployee {
    add();
    edit();
    delete();
}


class CalculatorService {
    addNumber(num1: number, num2: number) {
        return num1 + num2;
    }
    subNumber(num1: number, num2: number) {
        return num1 - num2;
    }
    multNumber(num1: number, num2: number) {
        return num1 * num2;
    }
    
}
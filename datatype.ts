let firstName: String; // String

firstName = 'test';

let age: number = 10; //Number

let dateOfBirth: Date; // Date

dateOfBirth = new Date('10-Nov-2013');

//Typescripts commands
// tsc datatypes.ts ---> This command will convert the .ts file into a .js file

let employee: string[] = ['a', 'b', 'c']; // Array

employee.push('test');
employee.push('test1');
employee.push('test2');

employee.forEach(function (data) {
    // console.log(data);
});

for (let empl of employee) {
    console.log(empl); //This will give you the value
}
for (let empl in employee) {
    console.log(empl);  //This will give you the number of the index
}

// employee.forEach((data) => console.log(data));

let emp = employee.filter((data) => data === 'test');
// console.log(emp);


let number: number[] = [10, 23, 34, 45];

let total = number.reduce((a, b) => a + b);

// console.log(total);


let isValid: boolean = false; // Initialize the value of a boolean variable, otherwise will throw an undefine value

// console.log(isValid);

let departments: Array<string>; // Generic Array 

let unionType: string | undefined;  // Union type

unionType = "Test";

enum Color { Red, Geen, Blue }; //Enums

let red = Color.Red;

console.log("Value: " + red);

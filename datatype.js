var firstName; // String
firstName = 'test';
var age = 10; //Number
var dateOfBirth; // Date
dateOfBirth = new Date('10-Nov-2013');
//Typescripts commands
// tsc datatypes.ts ---> This command will convert the .ts file into a .js file
var employee = ['a', 'b', 'c']; // Array
employee.push('test');
employee.push('test1');
employee.push('test2');
employee.forEach(function (data) {
    // console.log(data);
});
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var empl = employee_1[_i];
    console.log(empl); //This will give you the value
}
for (var empl in employee) {
    console.log(empl); //This will give you the number of the index
}
// employee.forEach((data) => console.log(data));
var emp = employee.filter(function (data) { return data === 'test'; });
// console.log(emp);
var number = [10, 23, 34, 45];
var total = number.reduce(function (a, b) { return a + b; });
// console.log(total);
var isValid = false; // Initialize the value of a boolean variable, otherwise will throw an undefine value
// console.log(isValid);
var departments; // Generic Array 
var unionType; // Union type
unionType = "Test";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Geen"] = 1] = "Geen";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //Enums
var red = Color.Red;
console.log("Value: " + red);

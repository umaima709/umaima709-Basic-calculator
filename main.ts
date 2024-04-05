import inquirer from "inquirer"

const input = await inquirer.prompt([
    { message: "Enter 1st number", type: "number", name: "firstnumber" },
    { message: "Enter 2st number", type: "number", name: "secondnumber" },
    {
        message: "select one basic operator to perform",
        type: "list", name: "operator", choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
])
if(input.operator==="Addition"){
    console.log(input.firstnumber + input.secondnumber);}
else if(input.operator==="Substraction") {
    console.log(input.firstnumber + input.secondnumber);
} 
else if(input.operator==="Multiplication") {
    console.log(input.firstnumber * input.secondnumber);
} 
else if(input.operator==="Division") {
    console.log(input.firstnumber / input.secondnumber);
} 
else {
    console.log("Yor are using incorrect operator");
    
}
    

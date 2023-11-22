// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwo(alpha, bravo) {
  console.log(alpha, bravo);
  return alpha + bravo;
}

// invoke the function and pass in two numbers
functionWithTwo(1, 2);

// invoke the function and pass in more than two numbers
functionWithTwo(1, 2, 3, 4, 5);

// invoke the function and pass in only one number
functionWithTwo(18);

// change the function to set default values for the parameters
function functionWithTwoDefault(alpha = 3, bravo = 44) {
  console.log(alpha, bravo);
  return alpha + bravo;
}

// again, invoke the function and pass in only one number
functionWithTwoDefault(1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithTwoRest(alpha, bravo, ...charlie) {
  console.log(alpha, bravo);
  console.log(charlie);
  return alpha + bravo + charlie;
}
// again, invoke the function and pass in more than two numbers
functionWithTwoRest(1, 2, 3, 4, 5, 6);

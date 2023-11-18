let age = 25;

// Write an If Else statement

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."
if (age <=25) {
  console.log(Renting a car is more affordable.);
} else {
  console.log(Renting a car is very expensive.):
}

// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25 but greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."
const age = 25;
switch (true) {
  case age >= 25: {
    const message = "Renting a car is more affordable.";
    console.log(message);
    break;
  }
  case age >= 18 && age < 25: {
    const message = "Renting a car is very expensive."
    console.log(message);
    break;
  }
  case age < 18: {
    const message = "You cannot legally rent a car."
    console.log(message);
    break;
  }
  default: {
    console.log("invalid age");
  }
}


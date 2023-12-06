// Save the Form DOM element to a variable so we can use it later in the code.
const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  console.log("The form was submitted!");

  console.log("event", event);

  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);

  // Utilize for... of loop to show class how to access name and value from inputs
  for (let input of inputs) {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  }

  // Introducing/Previewing saving captured form inputs to object like we do in SPA
  const requestData = {
    name: inputs.name.value,
    email: inputs.email.value,
    fone: inputs.fone.value,
    msg: inputs.msg.value,
    subject: inputs.subject.value,
    optIn: inputs.optIn.checked,
    marketing: inputs.subject.value
  };

  console.log(requestData);

  // Reset the form
  form.reset();

  // Using DOM manipulation to display inputs on webpage
  const userInput = document.querySelector("#userInput");
  for (let input in requestData) {
    const newList = document.createElement("li");
    newList.textContent = `${input}: ${requestData[input]}`;
    userInput.appendChild(newList);
  }
});

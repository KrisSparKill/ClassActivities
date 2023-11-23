// create an Array using an Array literal
const jeeps = ["wrangler", "cherokee", "compass", "wagoneer"];

// access the 1st item in the Array
console.log(jeeps[0]);

// access the last item in the Array
console.log(jeeps[3]);

// print the length of the Array
console.log(jeeps.length);
//or
jeeps.length;

// use the length property to access the last item in the Array
console.log(jeeps[jeeps.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const vehicles = [];

for (let jeep of jeeps) {
  let output = `Jeep ${jeep}`;
  vehicles.push(output);
}

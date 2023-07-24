const nums = []; // Defines and initializes the nums array

// Populates the nums array with numbers from 100 to 200
for (let i = 100; i <= 200; i++) {
  nums.push(i);
}

// Now we can use the nums array in the loop
for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }

  console.log(output === "" ? num : output);
}

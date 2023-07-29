// findWaldo.js

const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(i); // Pass the index to the callback
      }
    }
  };
  
  const actionWhenFound = function(index) {
    console.log(`Found Waldo at index ${index}!`);
  };
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  
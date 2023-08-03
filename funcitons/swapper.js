const swapper = function (key1, object1, key2, object2) {
    console.log("Swap!");
  
    // Put your solution here
    // Store values in variables so they don't get deleted
    const s1 = object1[key1];
    const s2 = object2[key2];
    // Reassign property values to previously stored variables
    object1[key1] = s2;
    object2[key2] = s1;
    // Log the final results
    console.log("object1: ", object1);
    console.log("object2: ", object2);
  };
  
  // DRIVER CODE
  swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
  swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
  swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
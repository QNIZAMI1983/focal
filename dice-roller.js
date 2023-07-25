const rollDice = function(numDice) {
    let rolls = [];
    for (let i = 0; i < numDice; i++) {
      const rollResult = Math.floor(Math.random() * 6) + 1;
      rolls.push(rollResult);
    }
    return rolls.join(", ");
  };
  
  // Get the command-line argument (number of dice to roll)
  const numDice = process.argv[2];
  
  // Check if a valid number of dice is provided
  if (!isNaN(numDice) && numDice > 0) {
    const diceRolls = rollDice(numDice);
    console.log(`Rolled ${numDice} dice: ${diceRolls}`);
  } else {
    console.log("Please provide a valid positive number of dice to roll.");
  }
  
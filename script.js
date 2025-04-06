const makeChange = (c) => {
  // Convert the input to an integer
  c = parseInt(c, 10);
  
  // Initialize the result object
  const result = {
    q: 0, // Quarters
    d: 0, // Dimes
    n: 0, // Nickels
    p: 0  // Pennies
  };

  // Calculate the number of quarters
  result.q = Math.floor(c / 25);
  c %= 25; // Update the remaining amount

  // Calculate the number of dimes
  result.d = Math.floor(c / 10);
  c %= 10;

  // Calculate the number of nickels
  result.n = Math.floor(c / 5);
  c %= 5;

  // The remaining amount is the number of pennies
  result.p = c;

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

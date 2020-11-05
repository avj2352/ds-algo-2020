function decimalToBinary(testVariable) {
    // Base case
    if (testVariable <= 1) {
      return String(testVariable)
    }
  
    // Recursive case
    else {
      return decimalToBinary(Math.floor(testVariable / 2)) + decimalToBinary(testVariable % 2)
    }
  }
  
  // Driver Code
  var testVariable = 11;
  console.log(decimalToBinary(testVariable));
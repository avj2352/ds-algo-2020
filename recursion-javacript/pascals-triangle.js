const pascalsTriangle = (input) => {
    // base case
    if (input == 1) return [1];
    // recursive case
    const previousLine = pascalsTriangle(input-1);
    let currentLine = [1];
    for(let i=0; i<previousLine.length-1; i++) {
        currentLine.push(previousLine[i] + previousLine[i+1]);
    }
    currentLine.push(1);
    return currentLine;
}

const row = 5;
console.log(`Pascals Triangle for the row ${5} is: `, pascalsTriangle(5));
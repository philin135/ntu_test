/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y) {
    // Check if both x and y are numeric
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
    }
    
    // Swap the values of x and y using arithmetic operations
    x = x + y;
    y = x - y;
    x = x - y;

    // Print the swapped values in the console
    console.log('Swapped values:', 'x =', x, ', y =', y);
    
    // Return the swapped values as an array (optional)
    return [x, y];
} 

// Task 2: Invoke the function
let result = swap(5, 10);
if (result === -1) {
    console.log('x and y must be numeric');
} else {
    console.log('Function executed successfully');
}

module.exports = swap;
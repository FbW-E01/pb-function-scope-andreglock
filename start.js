function areNumbers(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        console.log('Non numeric input');
    } else {
        for (let i = 0; i < b; i++) {
            process.stdout.write(`${a ** (i + 1)} `);
        }
        console.log('');
    }
}

areNumbers(3, 5);

function printFavoriteFruit(fruit) {
    console.log(`My favorite fruit is: ${fruit}`);
};

const favoriteFruit = 'Date';

printFavoriteFruit(favoriteFruit);

let result; /* This line is required in order to access result outside the function */

function exponent(a, b) {
    result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
}

exponent(2, 3);

console.log(result);

// If result is only declared inside the function it is only available inside the function.
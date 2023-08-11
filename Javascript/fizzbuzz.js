var output = [];
var count = 1;

function fizzbuzz() {

    if (count % 3 === 0) {
        if (count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else {
            output.push("Fizz");
        }
    }
    else if (count % 5 === 0) {
        output.push("Buzz");

    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

for (var i = 1; i <= 15; i++) {
    fizzbuzz();
}
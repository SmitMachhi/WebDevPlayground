function fibonacciGenerator(n) {
    var output = [];

    var sum = 0;

    if (n == 1) {
        output.push(0);
    }
    else if (n >= 2) {
        output.push(0, 1);
    }

    for (var i = 1; i <= n; i++) {
        sum = output[i] + output[i - 1];
        output.push(sum);
    }

    console.log(output);

}

fibonacciGenerator(5);
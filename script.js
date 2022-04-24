function greetings(name) {
    console.log("greetings" + name)
}

function type(arg) {
    console.log(typeof (arg));
}

function strLength(arg) {
    console.log(arg.length);
}

function sum(arg1, arg2) {
    console.log(arg1 + arg2);
}

function addAndMultiply(arg1, arg2, arg3, arg4) {
    console.log((arg1 + arg2) * (arg3 + arg4));
}

function checkLarger(arg1, arg2) {
    if (arg1 > arg2) {
        console.log(arg1);
    } else {
        console.log(arg2);
    }
}

function sum(arg) {
    const answer = arg.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    return (answer);
}


function square(arg1) {
    console.log(arg1 ** 2)
}

function oddOrEven(arg1) {
    if (arg1 % 2 !== 0) {
        console.log("odd");
    } else {

        console.log("even")
    }
}


function fn(arg1) {
    console.log(arg1)
    let positives = arg1.filter((number) => Math.sign(number) > 0);
    positives ? console.log(positives.reduce((previous, current) => previous + current, 0)) : console.log(0)
}

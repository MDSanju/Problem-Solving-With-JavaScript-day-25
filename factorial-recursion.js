function recursion(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * recursion(n - 1);
    }
}

const recursiveFactorial = recursion(7);
console.log(recursiveFactorial);
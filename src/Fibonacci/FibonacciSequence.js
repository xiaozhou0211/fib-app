import React from "react";

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// 2 = 1 + 1
// 3 = 1 + 2 
// 5 = 2 + 3 
// fib[i] = fib[i-1] + fib[i-2]
export function Fibonacci(naturalNumber) {
    if (naturalNumber === 0) return 0
    const fib = [0, 1]
    for (let i = 2; i < naturalNumber; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
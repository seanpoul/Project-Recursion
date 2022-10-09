function fibs(n) {
    if (n <= 1) {
        return n
    }

    let num1 = 0
    let num2 = 1
    let total = n
    for (let i = 2; i <= n; i++) {
        total = num1 + num2
        num1 = num2
        num2 = total
    }
    return total
}

function fibsRec(n) {
    if (n <= 1) {
        return n
    }

    return fibsRec(n - 1) + fibsRec(n - 2)
}
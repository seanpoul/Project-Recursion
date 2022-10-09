let numbersArray = [9, 3, 7, 5, 6, 4, 8, 2, 11, 1, 10]

const mergeSortRecursion = numbersArray => {
    if (numbersArray.length < 2) {
        return numbersArray
    }

    const middle = Math.floor(numbersArray.length / 2)
    const arrayLeft = numbersArray.slice(0, middle)
    const arrayRight = numbersArray.slice(middle, numbersArray.length)

    return merge(mergeSortRecursion(arrayLeft), mergeSortRecursion(arrayRight))
}

const merge = (arrayLeft, arrayRight) => {
    const sortedArray = []
    while (arrayLeft.length && arrayRight.length) {
        if (arrayLeft[0] <= arrayRight[0]) {
            sortedArray.push(arrayLeft.shift())
        }
        else {
            sortedArray.push(arrayRight.shift())
        }
    }
    while (arrayLeft.length) {
        sortedArray.push(arrayLeft.shift())
    }
    while (arrayRight.length) {
        sortedArray.push(arrayRight.shift())
    }
    return sortedArray
}

console.log(mergeSortRecursion(numbersArray))
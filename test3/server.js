function numbersArray(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }

    let result = {
        even: 0,
        odd: 0,
        total: numbers.length
    };

    let checkedValues = {};

    numbers.forEach(number => {
        if (typeof number !== 'number' || !Number.isInteger(number)) {
            throw new Error("All elements in the array must be integers.");
        }

        if (checkedValues.hasOwnProperty(number)) {
            return;
        }

        if (number % 2 === 0) {
            result.even += 1;
        } else {
            result.odd += 1;
        }

        checkedValues[number] = true;
    });

    return result;
}


try {
    const arrayNumbers = numbersArray([6, 3, 3, 4, 13, 6, 7, 18, 7, 11]);
    console.log(arrayNumbers);
} catch (error) {
    console.error(error);
}



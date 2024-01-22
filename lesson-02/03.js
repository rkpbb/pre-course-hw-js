const giveMeRightNumbers = (value1, value2, maximum) => {
    if ((value1 <= maximum) && (value1 !== value2)) {
        console.log('Success!');
    } else {
        console.log('Что-то не так!');
    }
}
giveMeRightNumbers(100, 100, 200);
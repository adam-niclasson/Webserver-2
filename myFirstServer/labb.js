/*exports.funk1 = (name) => {
    console.log("Hej på dig " + name)
}*/

/*let name = "Niklas"

funk1("Adam")
funk1("Oliver")
funk1("Niklas")*/

exports.add = (num1, num2) => {
    let sum = num1 + num2

    return sum
};

exports.sub = (num1, num2) => {
    let dif = num1 - num2

    return dif
};

exports.multi = (num1, num2) => {
    let prod = num1 * num2

    return prod
};
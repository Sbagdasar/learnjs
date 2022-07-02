/**
 * number exp to n
 * @param{number} number number
 * @param{number} n exponent
 * @return{number} number, **n */
function exponentN(number, n){
    return number**n;
}
function getNumbers() {
   let number =  prompt("number>=1", '')
    let numberExp = prompt("numberExp>=1", '')
    return exponentN(number, numberExp)
}
console.log(getNumbers())

function exponentionN(number, n){
    return number**n;
}
function getNumbers() {
   let number =  prompt("number>=1", '')
    let numberExp = prompt("numberExp>=1", '')
    return exponentionN(number, numberExp)
}
console.log(getNumbers())
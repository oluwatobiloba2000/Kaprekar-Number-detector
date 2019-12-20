function checkIsKaprekar(checkNum){
    //changing the number to a string and
    //checking the length of the number that was passed into the function
    const num = String(checkNum).length;
    //I then squred the number
    const squaredNum = checkNum * checkNum;
    //seperated the first part of the number from the squared number and the second part of the number
    const firstNum = String(squaredNum).substring(0, String(squaredNum).length - num);
    const secondNum = String(squaredNum).substring(String(squaredNum).length - num);

    //then I added the first part of the squared number and the second part
    const sumOfNum = Number(firstNum) + Number(secondNum);

    return  sumOfNum === checkNum ? `${checkNum} is a kaprekar number` : `${checkNum} is not a kaprekar number`;
}

console.log(checkIsKaprekar(45));

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "0",
    "timeOut": "8000",
    "extendedTimeOut": "4000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
toastr.success('Welcome To Kaprekar Detector Site');
document.getElementById('title').addEventListener('click', ()=>{
    toastr.success('Welcome To Kaprekar Detector Site');
})

const container = document.querySelector('.error__container');
const numberInput = document.getElementById('check__if__karprekar__input');
numberInput.addEventListener('keyup', (e)=>{
if(e.key === 'Enter'){
    getNum()
}
})

document.querySelector('.btn').addEventListener('click', ()=>{
    getNum();
})

function getNum(){
    // getting the value of the number provided in the input
    const number = numberInput.value;
    const numberLength = number.length;

    // checking if the value is empty
    if(!number) return toastr.error('Input cannot be empty');

    // checking if the length is not greater and less than 4
    if(numberLength !== 4) return toastr.error('it must be 4 digit numbers');

        // checking if the numbers provided are identical
    if(checkIfNumIsIdentical(number)){
          return  toastr.error('Identical numbers are not allowed');
    }
        //perform the operation
        printSolution(`...................  calculating ${number} ..........`)
        performOperation(number);
}


const solutionDiv = document.createElement('div');
solutionDiv.classList.add('check__modal');
container.appendChild(solutionDiv);
function printSolution(text){
  let solutionTextDiv = document.createElement('div');
  solutionTextDiv.innerText = `${text}`;
  solutionTextDiv.classList.add('solution__div__text');
 return solutionDiv.appendChild(solutionTextDiv);
}

let count = 1

function checkIfNumIsIdentical(number){

  //converted the numbers to an array
    const num = number.split([]);

  // looped through the numbers to check if they are identical
    for(var i = 0; i < num.length - 1; i++) {
        if(num[i] !== num[i+1]) {
            return false;
        }
    }
    return true;
}


function getAscendingValues(number){
    const convertedNum = number;

  //converted the number into an array so i can be able to reorder the numbers
    const arrayNum = convertedNum.split([]);
  
  // mapped through the array and changed all the strings to numbers in the array
    const numberArray = arrayNum.map((num) => parseInt(num, 10));
  
  //sorted the array to return ascending order in the array of numbers
   return numberArray.sort(function(a, b){return a-b})
}

function getDesendingValues(number){
    const convertedNum = number;
  
   //converted the number into an array so i can be able to reorder the numbers
    const arrayNum = convertedNum.split([]);
  
  // mapped through the array and changed all the strings to numbers in the array
    const numberArray = arrayNum.map((num) => parseInt(num, 10));
  
   //sorted the array to return desending order in the array of numbers
    return numberArray.sort(function(a, b){return b-a})
}

 function performOperation(number){
   //set a false boolean value for stop
      let stop = false;
   
   //got the ascending array value from the function and changed them to numbers
      const ascending =  parseInt(getAscendingValues(number).join(''));
   
    //got the desending array value from the function and changed them to numbers
      const desending = parseInt(getDesendingValues(number).join(''));
   
   //deducted the desending from the ascending
      let minus = desending - ascending;

      printSolution(minus === 0 ? `Added 0 to the number`: `${desending} - ${ascending} = ${minus}  ........ step ${count} `)

     if(minus < 1) {
        //  converted the number to a string so i can convert it to an array
         const addZeroToNum = desending.toString();
         //converted the number into an array so i can be able to add 0
          const newNum = addZeroToNum.split([]);
          //added 0 to the number
               newNum.push('0');

            //converted the string back to numbers
           const validNum = parseInt(newNum.join(''))

           //fired the operation
       return performOperation(validNum.toString())

     }

   //checked if the deducted value is not equals to karprekar's constant and 0 and stop is false
      if(minus !== 6174 && stop === false){
        
            //increment steps count
            ++count
        
            //indicate that stop is false
            stop = false

        //performed the operation again
        return performOperation(minus.toString())

      }// checked if the deducted value is equals to the karprekar's constant
      else if(minus === 6174){
        
        //reset the value of minus and count to 0
        minus = 0;
        count = 1;

        //reset the input value
        numberInput.value = ''

        //stop is now true
        return stop = true;
    }
}




// function checkIsKaprekar(checkNum){
    //     //changing the number to a string and
    //     //checking the length of the number that was passed into the function
    //     const num = String(checkNum).length;
    //     //I then squred the number
    //     const squaredNum = checkNum * checkNum;
    //     //seperated the first part of the number from the squared number and the second part of the number
    //     const firstNum = String(squaredNum).substring(0, String(squaredNum).length - num);
    //     const secondNum = String(squaredNum).substring(String(squaredNum).length - num);
    
    //     //then I added the first part of the squared number and the second part
    //     const sumOfNum = Number(firstNum) + Number(secondNum);
    //     if(sumOfNum == checkNum) {
            //         const errordiv = document.createElement('div');
            //         errordiv.classList.add('check__modal');
            //         errordiv.innerHTML = `<i class="far fa-check-circle" id="check__icon"></i>
            //         <span class="check__span">[YES]</span> <p>${checkNum} is a karprekar number because ${checkNum}<sup>2</sup> = ${squaredNum} -> ${firstNum} + ${secondNum} = ${sumOfNum} [which is equals to ${checkNum}]</p>`
            //        return container.appendChild(errordiv);
            //     } else if(sumOfNum !== checkNum){
                //         const div = document.createElement('div');
            //         div.classList.add('error__modal');
            //         div.innerHTML = `<i class="far fa-times-circle" id="error__icon"></i>
            //         <span class="error__span">[NO]</span> <p>${checkNum} is not a karprekar number</p>`
            //        return container.appendChild(div);
            //     }
            // }



// ***************************
// OLD VERSION
// toastr.options = {
//     "closeButton": true,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-top-right",
//     "preventDuplicates": true,
//     "onclick": null,
//     "showDuration": "300",
//     "hideDuration": "0",
//     "timeOut": "8000",
//     "extendedTimeOut": "4000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// }
// toastr.success('Welcome To Kaprekar Detector Site');
// document.getElementById('title').addEventListener('click', ()=>{
//     toastr.success('Welcome To Kaprekar Detector Site');
// })

// const container = document.querySelector('.error__container');
// const numberInput = document.getElementById('check__if__karprekar__input');
// numberInput.addEventListener('keyup', (e)=>{
// if(e.key === 'Enter'){
//     getNum()
// }
// })

// document.querySelector('.btn').addEventListener('click', ()=>{
//     getNum();
// })

// function getNum(){
//     // getting the value of the number provided in the input
//     const number = numberInput.value;
//     const numberLength = number.length;
//     // checking if the value is empty
//     if(!number){
//      return toastr.error('Input cannot be empty');
        
//         // checking if the lenght is not greater and less than 4
//     }else if(numberLength >= 4 && number.length <= 4 ){
        
//         // checking if the numbers provided are identical
//         if(checkIfNumIsIdentical(number) === true){
//             toastr.error('Identical numbers are not allowed');
//         }else{
//             //perform the operation
//             performOperation(number);
//         }
 
//     }else{
//         toastr.error('it must be 4 digit numbers');
//     }
// }

// let count = 0

// function checkIfNumIsIdentical(number){
  
//   //converted the numbers to an array
//     const num = number.split([]);
  
//   // looped through the numbers to check if they are identical
//     for(var i = 0; i < num.length - 1; i++) {
//         if(num[i] !== num[i+1]) {
//             return false;
//         }
//     }
//     return true;
// }


// function getAscendingValues(number){
//     const convertedNum = number;
  
//   //converted the number into an array so i can be able to reorder the numbers
//     const arrayNum = convertedNum.split([]);
  
//   // mapped through the array and changed all the strings to numbers in the array
//     const numberArray = arrayNum.map((num) => parseInt(num, 10));
  
//   //sorted the array to return ascending order in the array of numbers
//    return numberArray.sort(function(a, b){return a-b})
// }

// function getDesendingValues(number){
//     const convertedNum = number;
  
//    //converted the number into an array so i can be able to reorder the numbers
//     const arrayNum = convertedNum.split([]);
  
//   // mapped through the array and changed all the strings to numbers in the array
//     const numberArray = arrayNum.map((num) => parseInt(num, 10));
  
//    //sorted the array to return desending order in the array of numbers
//     return numberArray.sort(function(a, b){return b-a})
// }

//  function performOperation(number){
//    //set a false boolean value for stop
//       let stop = false;
   
//    //got the ascending array value from the function and changed them to numbers
//       const ascending =  parseInt(getAscendingValues(number).join(''));
   
//     //got the desending array value from the function and changed them to numbers
//       const desending = parseInt(getDesendingValues(number).join(''));
   
//    //deducted the desending from the ascending
//       let minus = desending - ascending;
   
//    //checked if the deducted value is not equals to karprekar's constant and 0 and stop is false
//       if(minus !== 6174 && stop === false && minus !== 0){
        
//             //increment steps count
//             count++
        
//             //indicate that stop is false
//             stop = false
        
//         //performed the operation again
//         return performOperation(minus.toString())
        
//       }// checked if the deducted value is equals to the karprekar's constant
//       else if(minus === 6174 || minus < 6174){
        
//         //increment the last step
//         count++
        
//         //showed the result in a div
//         const errordiv = document.createElement('div');
//         errordiv.classList.add('check__modal');
//         errordiv.innerHTML = `<i class="far fa-check-circle" id="check__icon"></i>
//         <span class="check__span">[${numberInput.value}]:</span> <p>It took ${count} steps to get to              the karprekar's constant <span class="check__span"> --> 6174</span></p>`
//          container.appendChild(errordiv);
        
//         //reset the value of minus and count to 0
//         minus = 0;
//         count = 0;
        
//         //reset the input value
//         numberInput.value = ''
        
//         //stop is now true
//         return stop = true;
//     }
// }

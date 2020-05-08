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

    // checking if the value is empty
    if(number === ''){
        toastr.error('Input cannot be empty');
        
        // checking if the lenght is not greater and less than 4
    }else if(number.length >= 4 && number.length <= 4 ){
        
        // checking if the numbers provided are identical
        if(checkIfNumIsIdentical(number) === true){
            toastr.error('Identical numbers are not allowed');
        }else{
            //perform the operation
            performOperation(number);
        }
        // checkIsKaprekar(number);
    }else{
        toastr.error('it must be 4 digit numbers');
    }
}

let count = 0
console.log("count from top", count)

function checkIfNumIsIdentical(number){
    const num = number.split([]);
    for(var i = 0; i < num.length - 1; i++) {
        if(num[i] !== num[i+1]) {
            return false;
        }
    }
    return true;
}


function getAscendingValues(number){
    const convertedNum = number;
    const arrayNum = convertedNum.split([]);
    const numberArray = arrayNum.map((num) => parseInt(num, 10));
   return numberArray.sort(function(a, b){return a-b})
}

function getDesendingValues(number){
    const convertedNum = number;
    const arrayNum = convertedNum.split([]);
    const numberArray = arrayNum.map((num) => parseInt(num, 10));
    return numberArray.sort(function(a, b){return b-a})
}

 function performOperation(number){
      let stop = false;
      const ascending =  parseInt(getAscendingValues(number).join(''));
      const desending = parseInt(getDesendingValues(number).join(''));
      let minus = desending - ascending;
      console.log("performOperation -> minus steps", minus)
      if(minus !== 6174 && stop === false && minus !== 0){
            count++
            console.log(count, 'from the updates')
            stop = false
        return performOperation(minus.toString())
      }
      else if(minus === 6174 || minus < 6174){
        count++

        console.log('STOPPED COUNT',count);
        console.log('STOPPED MINUS', minus)
        const errordiv = document.createElement('div');
        errordiv.classList.add('check__modal');
        errordiv.innerHTML = `<i class="far fa-check-circle" id="check__icon"></i>
        <span class="check__span">[${numberInput.value}]:</span> <p>It took ${count} steps to get to the karprekar's constant <span class="check__span"> --> 6174</span></p>`
         container.appendChild(errordiv);
        minus = 0;
        count = 0;
        numberInput.value = ''
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

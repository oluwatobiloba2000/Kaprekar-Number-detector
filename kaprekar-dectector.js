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
    const number = numberInput.value;
    if(number === ''){
        toastr.error('Input cannot be empty');
    }else{
        checkIsKaprekar(number);
    }
}

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
    if(sumOfNum == checkNum) {
        const errordiv = document.createElement('div');
        errordiv.classList.add('check__modal');
        errordiv.innerHTML = `<i class="far fa-check-circle" id="check__icon"></i>
        <span class="check__span">[YES]</span> <p>${checkNum} is a karprekar number because ${checkNum}<sup>2</sup> = ${squaredNum} -> ${firstNum} + ${secondNum} = ${sumOfNum} [which is equals to ${checkNum}]</p>`
       return container.appendChild(errordiv);
    } else if(sumOfNum !== checkNum){
        const div = document.createElement('div');
        div.classList.add('error__modal');
        div.innerHTML = `<i class="far fa-times-circle" id="error__icon"></i>
        <span class="error__span">[NO]</span> <p>${checkNum} is not a karprekar number</p>`
       return container.appendChild(div);
    }
}

const submit = document.querySelector('.submit');
const firstNameInput = document.querySelector('#firstNameImput');
const lastNameInput = document.querySelector('#lastNameImput');
const emailInput = document.querySelector('#eMail');
const general = document.querySelector('#general');
const support = document.querySelector('#support');
const messageTextarea = document.querySelector('#txt');
const consentCheckbox = document.querySelector('.checks');
const customAlert = document.getElementById('customAlert');
const closeBtn = document.querySelector('.close');


const errorFun = () => {
    let isValid = true;

    if (firstNameInput.value === "") {
        const err1 = document.querySelector('.error1');
        err1.innerHTML = "This field is required*";
        err1.style.color = 'red';
        firstNameInput.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.error1').innerHTML = "";
        firstNameInput.style.border = '1px solid green';
    }

    if (lastNameInput.value === "") {
        const err2 = document.querySelector('.error2');
        err2.innerHTML = "This field is required*";
        err2.style.color = 'red';
        lastNameInput.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.error2').innerHTML = "";
        lastNameInput.style.border = '1px solid green';
    }

    if (emailInput.value === "") {
        const err3 = document.querySelector('.error3');
        err3.style.color = 'red';
        err3.innerHTML = "Please enter an email address*";
        emailInput.style.border = '1px solid red';
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            const err3 = document.querySelector('.error3');
            err3.style.color = 'red';
            err3.innerHTML = "Please enter a valid email address*";
            emailInput.style.border = '1px solid red';
            isValid = false;
        } else {
            document.querySelector('.error3').innerHTML = "";
            emailInput.style.border = '1px solid green';
        }
    }
    

    if (!general.checked && !support.checked) {
        const err4 = document.querySelector('.error4');
        err4.style.color = 'red';
        err4.innerHTML = "Please select one option*";
        isValid = false;
    } else {
        document.querySelector('.error4').innerHTML = "";
    }

    if (messageTextarea.value === "") {
        const err5 = document.querySelector('.error5');
        err5.style.color = 'red';
        messageTextarea.style.border = '1px solid red'
        err5.innerHTML = "This field is required*";
        messageTextarea.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.error5').innerHTML = "";
        messageTextarea.style.border = '1px solid green';
    }

    if (!consentCheckbox.checked) {
        const err6 = document.querySelector('.error6');
        err6.style.color = 'red';
        err6.innerHTML = "To submit this form, please consent to being contacted*";
        consentCheckbox.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.error6').innerHTML = "";
        consentCheckbox.style.border = 'none';
    }

    return isValid;
}


const showCustomAlert = () => {
    customAlert.style.display = 'block';
}

closeBtn.onclick = function() {
    customAlert.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == customAlert) {
        customAlert.style.display = 'none';
    }
}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    const formIsValid = errorFun();
    if (formIsValid) {
        showCustomAlert();
    }
});

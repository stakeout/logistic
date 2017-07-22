export const validation = () => {
    function CustomValidation() {
        this.invalidities = [];
        this.validityChecks = [];
    }

    CustomValidation.prototype = {
        addInvalidity: function (message) {
            this.invalidities.push(message);
        },

        getInvalidities: function () {
            return this.invalidities.join('. \n');
        },

    };

    let nameValidityChecks = [
        {
            isInvalid: function (input) {
                return input.value.length < 3;
            },
            invalidityMessage: 'Введите как минимум 3 символа'
            // element: document.querySelector('label[for=\'username\'] li:nth-child(1)')
        },
        {
            isInvalid: function (input) {
                let illegalCharacters = input.value.match(/[^а-яА-Яa-zA-Z -]/g);
                return illegalCharacters ? true : false;
            },
            invalidityMessage: 'Пишите только буквы, пробел и дефис'
            // element: document.querySelector('label[for=\'username\'] li:nth-child(2)')
        }
    ];

    let companyValidityChecks = [
        {
            isInvalid: function (input) {
                return input.value.length < 3;
            },
            invalidityMessage: 'Введите как минимум 3 символа'
            // element: document.querySelector('label[for=\'username\'] li:nth-child(1)')
        },
        {
            isInvalid: function (input) {
                let illegalCharacters = input.value.match(/[^а-яА-Яa-zA-Z -]/g);
                return illegalCharacters ? true : false;
            },
            invalidityMessage: 'Пишите только буквы, пробел и дефис'
            // element: document.querySelector('label[for=\'username\'] li:nth-child(2)')
        }
    ];

    let phoneValidityChecks = [
        {
            isInvalid: function (input) {
                return input.value.length < 3; // что это за проверка такая странная как пароль))
            },
            invalidityMessage: 'This password needs to match the first one'
        }
    ];

// почему бы тут не вешать все классы
    function checkInput(inputValidation) {
        inputValidation.CustomValidation.invalidities = [];
        let input = inputValidation.input;
        let isInvalid = false;
        for (let i = 0; i < inputValidation.CustomValidation.validityChecks.length; i++) {
            isInvalid = inputValidation.CustomValidation.validityChecks[i].isInvalid(input);
            if (isInvalid) {
                break;
            }
        }
        if (isInvalid) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
        }
        return isInvalid;

    }

    let usernameInput = {};
    usernameInput.input = document.querySelector('#name');
    let companyInput = {};
    companyInput.input = document.querySelector('#company');
    let phoneInput = {};
    phoneInput.input = document.querySelector('#phone');

    usernameInput.CustomValidation = new CustomValidation();
    usernameInput.CustomValidation.validityChecks = nameValidityChecks;

    companyInput.CustomValidation = new CustomValidation();
    companyInput.CustomValidation.validityChecks = companyValidityChecks;

    phoneInput.CustomValidation = new CustomValidation();
    phoneInput.CustomValidation.validityChecks = phoneValidityChecks;

    const inputValidation = [usernameInput, companyInput, phoneInput];

    let submit = document.querySelector('input[type=\'submit\']');
    const form = document.querySelector('.request-form');
    function validationForm() {
        let isAllValid = true;
        for ( let i = 0; i < inputValidation.length; i++ ) {
            let isInvalidCurrent = checkInput(inputValidation[i]);
            if (isInvalidCurrent && isAllValid) {
                isAllValid = false;
            }
        }
        return isAllValid;
    }
    form.addEventListener('submit', function (e) {
        if (!validationForm()) {
            e.preventDefault();    // stop form from submitting
        }
    });
};
export const showForm = () => {
    const btn = $('#request-btn');
    const overlay = $('.overlay');
    const form = $('.request-form');
    btn.click(function (e) {
        e.preventDefault();
        form.toggleClass('hide');
        overlay.toggleClass('hide');
    });
    overlay.click(function () {
        $(this).toggleClass('hide');
        form.toggleClass('hide');
    });
};

export const validation = () => {
    const requestForm = $('.request-form');
    const requestBtn = $('.request-form__submit');
    $('.request-form__form').validate({
        onfocusout: false,
        onsubmit: true,
        debug: true,
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 3
            },
        },
        messages: {
            email: {
                required: 'Поле обязательно к заполнению'
            },
            name: {
                required: 'Поле обязательно к заполнению'
            }
        },
        validClass: 'success',
        errorPlacement: function (error, element) {
            console.log(error.appendTo(element.parent().next('ul')));
        },
        errorElement: 'li',
        submitHandler: function () {
            alert('Submitted!');
        }

    });
};

$(document).ready(function () {

    $('#button-question').click(function () {
        $('.modal-form').toggleClass('visible');
        $('body').toggleClass('overlay');
    });

    $('.form-close-button').click(function () {
        $('.modal-form').toggleClass('visible');
        $('body').toggleClass('overlay');
    });


    $("#form").validate({
        rules: {
            user_name: {
                required: true,
            },
            user_email: {
                required: true,
                email: true
            },
            user_message: {
                required: true,
            },
        },
        messages: {
            user_name: {
                required: "Это поле обязательно для заполнения",
            },
            user_email: {
                required: "Это поле обязательно для заполнения",
                email: "Не правильный адрес",
            },
            user_message: {
                required: "Заполните форму",
            },
        },

        submitHandler: function(form) {
            $.ajax({
                url: 'https://enca877xn1qkmz6.m.pipedream.net', //исправить здесь
                type: 'POST',
                dataType: 'json',
                success: function () {
                    $('.form-content').addClass('hidden');
                    $('.form-content-success').addClass('visible');
                },
                error: function () {
                    $('.form-content').addClass('hidden');
                    $('.form-content-error').addClass('visible');
                }
            });
            console.log
        }
    });

});


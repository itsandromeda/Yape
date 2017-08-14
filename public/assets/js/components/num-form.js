/*global $, Promise, alert, console, settings*/
const numForm = (update) => {
    const container = $('<section class="row wrap num-form center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/phone.png" height="75" alt="Phone"><h3>Para comenzar validaremos tu número</h3><p>Recibirás un SMS con un código de validación</p></div>'),
        row = $('<div class="row"></div>'),
        input_field = $('<div class="input-field col s12"></div>'),
        input = $('<input id="phone" class="center-align no-shadow form" type="text" maxlength="9" required>'),
        icon = $('<label class="label-icon" for="phone"><img src="img/icons/phoneandnumber.png" alt="phone" height="25"></label>'),
        checkbox_field = $('<div class="col s12 left-align"></div>'),
        checkbox = $('<input id="filled-in-box" type="checkbox" class="terms filled-in" />'),
        label = $('<label for="filled-in-box">Acepto los <a href="#">Términos y condiciones.</a></label>'),
        continuar_btn = $('<button class="continue btn amber accent-2 no-shadow" disabled>Continuar</button>');

    container.append(header);
    container.append(row);
    container.append(continuar_btn);

    row.append(input_field);
    row.append(checkbox_field);

    input_field.append(icon, input);
    checkbox_field.append(checkbox, label);

    $(_ => {
        input.on('blur', () => {
            if (input.val().length === 9) {
                settings.validation = true;

                var check,
                    celRegex = /[0-9]{9}/;

                $("#filled-in-box").click(_ => {
                    check = $("#filled-in-box").is(":checked");
                    if (check && settings.validation === true && celRegex.test(input.val())) {

                        $('.continue').prop("disabled", false);
                        $(".continue").click(_ => {
                            if (settings.validation === true) {
                                const user = {
                                    phone: input.val(),
                                    terms: true
                                };

                                getNum(user)
                                    .then((response) => {
                                        if (response.data === null) {
                                            console.log("ERROR");
                                        } else {
                                            settings.screen = 1;
                                            update();
                                        }
                                    });
                            }

                            update();
                        });
                    }
                });
            } else if (input.val().length < 9) {
                settings.validation = false;
                $('.continue').prop("disabled", true);
            }
        });
    });

    return container;
};

const getNum = (user) => {
    return new Promise((resolve, reject) => {
        $.post('api/registerNumber/', user, (response, res, req) => {
            if (response.success) {
                settings.phone = response.data.phone;
                settings.code = response.data.code;
                console.log("Número: " + settings.phone);
                console.log("Código: " + settings.code);
                resolve(response);
            } else {
                resolve(response);
            }
        });
    });
};
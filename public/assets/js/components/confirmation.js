/*global setInterval, $, console, settings, phone, alert*/
const confirmation = (update) => {
    const container = $('<section class="row wrap confirm-form center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/message.png" height="75" alt="Phone"><h3>Ahora ingresa tu código</h3><p>Enviamos un SMS con el código de validación al número <b>' + settings.phone + '</b></p></div>'),
        row = $('<div class="row"></div>'),
        input_field = $('<div class="input-field col s12"></div>'),
        input = $('<input id="confirmation" class="center-align form no-shadow" maxlength="6" type="text" placeholder="-  -  -  -  -"required>'),
        icon = $('<label class="label-icon" for="confirmation"><img src="img/icons/lock.png" alt="Lock" height="25"></label>'),
        label = $('<label>Reintentar en <img src="img/icons/clock.png" alt="Lock" height="15"> <span class="timer">21</span></label>'),
          newCode = $('<p>Por favor ingresa este código <strong class="code">' + settings.code + '</strong></p>');


    container.append(header);
    container.append(row);

    input_field.append(icon, input);

    row.append(input_field);
    row.append(label, newCode);

    $(_ => {
        $('#confirmation').keyup(_ => {
            if ($('#confirmation').val() == settings.code) {
                confirm({
                    phone: settings.phone
                });
                settings.validation = true;
                settings.screen = 2;
                update();
            }
        });

        var interval = 1000;

        var counter = setInterval(_ => {
            var timer = $('.timer').html();
            timer -= 1;
            if (timer < 0) {
                confirm({
                    phone: settings.phone
                });
                interval = 21000;
                timer = 21;
            };
            $('.timer').html(timer);
            $('.code').html(settings.code);
        }, interval);
    });

    return container;
};

const confirm = (phone) => {
    $.post('api/resendCode/', phone, (res, req) => {
        settings.code = res.data;
        console.log("Tu nuevo código es: " + settings.code);
    });
};
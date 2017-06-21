const confirmation = (update) => {
    const container = $('<section class="row wrap confirm-form center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/message.png" height="75" alt="Phone"><h3>Ahora ingresa tu código</h3><p>Enviamos un SMS con el código de validación al número <b></b></p></div>'),
        row = $('<div class="row"></div>'),
        input_field = $('<div class="input-field col s12"></div>'),
        input = $('<input id="confirmation" class="center-align no-shadow" type="text" placeholder="-  -  -  -  -"required>'),
        icon = $('<label class="label-icon" for="confirmation"><img src="img/icons/lock.png" alt="Lock" height="25"></label>'),
        label = $('<label>Reintentar en <img src="img/icons/clock.png" alt="Lock" height="15"> <span class="timer">21</span></label>');


    container.append(header);
    container.append(row);

    input_field.append(icon, input);

    row.append(input_field);
    row.append(label);

    $(_ => {
        $('#confirmation').keyup(_ => {
            if ($('#confirmation').val()) {
                //If confirmation number is correct, redirect to "Create an account" screen
                settings.screen = 2;
                update();
            }
        });

        setInterval(_ => {
            var timer = $('.timer').html();
            timer -= 1;
            if (timer < 0) return;
            $('.timer').html(timer);
        }, 1000);
    });

    return container;
};
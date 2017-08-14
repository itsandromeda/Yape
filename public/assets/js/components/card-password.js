const cardPassword = (update) => {
    const container = $('<div class="center row num-form"></div>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/bcp-logo.png" height="75" alt="Phone"><h3>Ingresa la clave de tu tarjeta</h3><p>Enviamos un SMS con el código de validación al número <strong>****' + settings.card.slice(-4) + '</strong></p></div>'),
        input_field = $('<div class="pass-field center container"></div>'),
        input = $('<input id="card-num" class="center form no-shadow" type="password" maxlength="4" placeholder="* * * *" required>'),
        icon = $('<label class="label-icon" for="card-num"><img class="icono-password" src="img/icons/lock.png" alt="phone" width="20"></label>'),
        btn_register = $('<button class="create-account btn amber accent-2 no-shadow" disabled>registrar</button>');

    input_field.append(input, icon);
    container.append(header);
    container.append(input_field, btn_register);

    var regex = /[0-9]{4}/;

    input.on('keyup', (e) => {
        if (input.val().length === 4 && regex.test(input.val())) {
            btn_register.attr('disabled', false);
        } else {
            btn_register.attr('disabled', true);
        }
    });

    btn_register.on('click', (e) => {
        settings.cardPassword = input.val();
        const newUser = {
            "phone": settings.phone,
            "cardNumber": settings.card,
            "cardMonth": settings.month,
            "cardYear": settings.year,
            "cardPassword": settings.cardPassword
        }
        createUser(newUser)
        settings.screen = 6;
        update();
    });
    return container;
};

const createUser = (newUser) => {
    return new Promise((resolve, reject) => {
        $.post("api/registerCard", newUser, (response, res, req) => {
            if (response.success) {
                settings.phone = response.data.phone;
                settings.name = response.data.name;
                settings.email = response.data.email;
                settings.cardPassword = response.data.cardPassword;
            } else {
                resolve(response);
            }
        });
    });

};
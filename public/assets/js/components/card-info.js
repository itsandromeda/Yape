const card = (update) => {
    const container = $('<section class="card-info row wrap num-form center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/bcp-logo.png" height="75" alt="Phone"><h3>Registra tu tarjeta de débito BCP</h3><p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p></div>'),
        row = $('<div class="row"></div>'),
        card_field = $('<div class="input-field col s12"></div>'),
        card_input = $('<input id="numero-tarjeta" maxlength="16" class="form no-shadow center-align" type="text" required>'),
        icon = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>'),
        fieldset = $('<fieldset class="expiration"></fieldset'),
        expiration_field = $('<label for="expiration-date">Fecha de vencimiento</label>'),
        expiration = $('<div class="expiration-block">/</div>'),
        month = $('<input id="month" class="form no-shadow center-align" maxlength="2" type="text" placeholder="Mes" required>'),
        year = $('<input id="year" class="form no-shadow center-alignr" maxlength="2" type="text" placeholder="Año" required>'),
        p = $('<p><img src="img/icons/scan.png" alt="phone" width="20"><a class="scan" href="#"> Escanear tarjeta</a></p>'),
        continuar_btn = $('<button class="create-account btn amber accent-2 no-shadow" disabled>CREAR CUENTA</button>');

    container.append(header);
    container.append(row);

    row.append(card_field);
    row.append(p);
    row.append(fieldset);

    fieldset.append(expiration_field);
    fieldset.append(expiration);
    fieldset.append(continuar_btn);

    expiration.prepend(month);
    expiration.append(year);

    card_field.append(icon, card_input);

    var regex = /^[0-9]+$/;

    card_input.on("keyup", function (e) {
        if (regex.test($(this).val()) && $(this).val().length === 16) {
            settings.card = $(this).val();
            validate();
        } else {
            settings.card = null;
            validate();
        }
    });

    month.on("keyup", function (e) {
        if (regex.test($(this).val()) && $(this).val().length <= 2 && $(this).val() > 0 && $(this).val() < 13) {
            settings.month = $(this).val();
            validate();
        } else {
            settings.month = null;
            validate();
        }
    });

    year.on("keyup", function (e) {
        if (regex.test($(this).val()) && $(this).val().length <= 2 && $(this).val() > 16 && $(this).val() < 25) {
            settings.year = $(this).val();
            validate();
        } else {
            settings.year = null;
            validate();
        }
    });

    const validate = function () {
        if (settings.card && settings.month && settings.year) {
            continuar_btn.prop("disabled", false);
        } else {
            continuar_btn.prop("disabled", true);
        }
    };

    continuar_btn.click(_ => {
        settings.screen = 5;
        update();
    });

    return container;
};
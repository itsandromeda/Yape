const card = (update) => {
    const container = $('<section class="row wrap num-form center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/bcp-logo.png" height="75" alt="Phone"><h3>Registra tu tarjeta de débito BCP</h3><p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p></div>'),
        row = $('<div class="row"></div>'),
        card_field = $('<div class="input-field col s12"></div>'),
        card_input = $('<input id="numero-tarjeta" class="form no-shadow center-align" type="text" required>'),
        icon = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>'),
        fieldset = $('<fieldset class="expiration"></fieldset'),
        expiration_field = $('<label for="expiration-date">Fecha de vencimiento</label>'),
        expiration_input = $('<input class="form" aria-labelledby="expiration-date" placeholder="Mes"/>/<input class="form" aria-labelledby="expiration-date" placeholder="Año"/>'),
        month = $('<input id="month" class = "center" type="text" placeholder="" required>'),
        year = $('<input id="year" class = "center" type="text" placeholder="" required>'),
        p = $('<p><img src="img/icons/scan.png" alt="phone" width="20"><a href="#">Escanear tarjeta</a></p>'),
        continuar_btn = $('<button class="create-account btn amber accent-2 no-shadow" disabled>CREAR CUENTA</button>');

    container.append(header);
    container.append(row);
    container.append(continuar_btn);

    row.append(card_field);
    row.append(p);
    row.append(fieldset);
    
    fieldset.append(expiration_field);
    fieldset.append(expiration_input);

    card_field.append(icon, card_input);
    //checkbox_field.append(label);

    return container;
};
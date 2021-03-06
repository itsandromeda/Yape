const account = (update) => {
    const container = $('<section class="row wrap create-account center-align"></section>'),
        header = $('<div class="col s12"><img class="img-responsive" src="img/icons/lockone.png" height="75" alt="Lock"><h3>Crea tu usuario Yape</h3><p>Ingresa un nombre, email y clave de usuario.</p></div>'),
        row = $('<div class="row"></div>'),
        input_field1 = $('<div class="input-field col s12"></div>'),
        name_input = $('<input id="name" class="form-check center-align form no-shadow" type="text" placeholder="Nombre" required>'),
        name_icon = $('<label class="label-icon" for="name"><img src="img/icons/user.png" alt="Lock" height="20"></label>'),
        input_field2 = $('<div class="form-check input-field col s12"></div>'),
        email_input = $('<input id="email" class="center-align form no-shadow" type="email" placeholder="correo@ejemplo.com" required>'),
        email_icon = $('<label class="label-icon" for="email"><img src="img/icons/message-gray.png" alt="Lock" height="20"></label>'),
        input_field3 = $('<div class="form-check input-field col s12"></div>'),
        pass_input = $('<input id="pass" class="center-align form no-shadow" type="password" placeholder="Ingresa clave de 6 dígitos" required>'),
        pass_icon = $('<label class="label-icon" for="pass"><img src="img/icons/lock.png" alt="Lock" height="20"></label>'),
        p = $('<p>Cuida esta clave como oro, es tu acceso a Yape.</p>'),
        continuar_btn = $('<button id="create" class="create btn amber accent-2 no-shadow" disabled>CREAR CUENTA</button>');


    container.append(header);
    container.append(row);

    input_field1.append(name_icon, name_input);
    input_field2.append(email_icon, email_input);
    input_field3.append(pass_icon, pass_input);

    row.append(input_field1);
    row.append(input_field2);
    row.append(input_field3);
    row.append(p);
    row.append(continuar_btn);

    $(_ => {
        $('.form-check').keyup(_ => {
            var name = $('#name').val(),
                email = $('#email').val(),
                password = $('#pass').val(),
                nameRegex = /^[a-zA-Z]+$/,
                emailRegex = /\S+@\S+\.\S+/;

            if (nameRegex.test(name_input.val()) && emailRegex.test(email_input.val()) && password.length > 5) {
                $('#create').prop("disabled", false);
                $("#create").click(_ => {
                    const user = {
                        phone: settings.phone,
                        name: name_input.val(),
                        email: email_input.val(),
                        password: pass_input.val()
                    };

                    newUser(user)
                        .then((response) => {
                            if (response.data === null) {
                                console.log("ERROR");
                            } else {
                                settings.screen = 3;
                                update();
                            }
                        });
                });
            } else {
                $('#create').prop("disabled", true);
            }
        });
    });

    return container;
};

const newUser = (user) => {
    return new Promise((resolve, reject) => {
        $.post('api/createUser/', user, (response, res, req) => {
            if (response.success) {
                settings.name = response.data.name;
                settings.email = response.data.email;
                settings.password = response.data.password;
                resolve(response);
            } else {
                resolve(response);
            }
        });
    });
}
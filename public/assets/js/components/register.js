/*global $*/
const register = (update) => {
    const container = $('<div class="register center-align"></div>'),
        wrap = $('<div class="carousel row"></div>'),
        row = $('<div class="carousel-wrap col s12"></div>'),
        carousel = $('<div class="owl-carousel owl-theme"></div>'),
        slide_1 = $('<div class="item"><img src="../img/icons/icon-people.png" alt="People"><h3>Paga a tus amigos</h3><p class="grey-text text-darken-2">Paga a quien quieras desde donde quieras, sin usar efectivo.</p></div>'),
        slide_2 = $('<div class="item"><img src="../img/icons/happy-person.png" alt="Happy person"><h3>Sin número de cuenta</h3><p class="grey-text text-darken-2">Elige a quién pagar desde tu lista de contactos.</p></div>'),
        slide_3 = $('<div class="item"><img src="../img/icons/group-people.png" alt="Group of people"><h3>Gratis y Seguro</h3><p class="grey-text text-darken-2">La transferencia es inmediata y gratuita de una cuenta a otra.</p></div>'),
        register_btn = $('<button id="sign-up" class="amber lighten-2 white-text btn full-btn no-shadow">REGISTRARME</button>');

    carousel.append(slide_1);
    carousel.append(slide_2);
    carousel.append(slide_3);
    row.append(carousel);
    wrap.append(row);
    wrap.append(register_btn);
    container.append(wrap);

    register_btn.click(_ => {
        settings.screen = 0;
        update();
    });

    return container;
};
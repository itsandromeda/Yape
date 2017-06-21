/*global $, settings, setInterval*/
const success = (update) => {
    const container = $('<div class="row success yellow-bg center-align"></div>'),
        content = $('<div class="col s12"><img src="../img/icons/check.png" alt="Success!" height="60"></div><p>¡Bien!<br>Ahora puedes usar Yape</p>');

    container.append(content);
    $(_ => {
        setInterval(_ => {
            settings.screen = 4;
            update();
        }, 3000);
    });

    return container;
};
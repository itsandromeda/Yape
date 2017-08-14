/*global $, settings, setInterval*/
const success = (update) => {
    const container = $('<div class="success center-align"></div>'),
        content = $('<div class="col s12"><img src="../img/icons/check.png" alt="Success!" height="80"></div><p><b>¡Bien!</b><br>Ahora puedes usar Yape</p>');

    container.append(content);
    $(_ => {        
        $('.container:has(.success)').removeClass('container');
        var interval = setInterval(_ => {
            settings.screen = 4;
            clearInterval(interval);
            update();
        }, 3000);
    });

    return container;
};
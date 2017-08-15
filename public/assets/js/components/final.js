const Final = () => {
    const container = (`<div class="container-fluid final">
                            <div class="lightest-purple center">
                                <img src="img/icons/engine.png" height="25" alt="Engine">
                                <img src="img/icons/happy-face.png" height="85" alt="Happy face">
                                <h3 class="white-text">Hola</h3>
                                <img src="img/icons/eye.png" height="15" alt="eye">
                                <a class="teal-text" href="#">Mostrar saldo</a>
                            </div>
                            <div class="darkest-purple">
                                <div class="darkest-header">
                                    <p class="white-text">ÚLTIMOS MOVIMIENTOS</p>
                                    <img src="img/icons/right-arrow-circular-button.png" height="20" alt="Arrow">
                                </div>
                                <div class="action-call">                                    
                                    <img class="left" src="img/icons/icon.png" height="110" alt="icon">
                                    <p class="white-text">¿Aún no realizas tu primer pago?</p>
                                    <p class="white-text">Es rápido y sencillo</p>
                                </div>
                                <div class="action">
                                    <div class="center">
                                        <img src="img/icons/send.png" height="60" alt="Send">
                                        <p class="white-text">ENVIAR PAGO</p>
                                    </div>
                                    <div class="center">
                                        <img src="img/icons/code-qr.png" height="60" alt="code qr">
                                        <p class="white-text">RECIBIR PAGO</p>
                                    </div>
                                </div>
                            </div>
                        </div>`);

    $(_ => {
        $('.container:has(.final)').removeClass('container');
    });

    return container;
};
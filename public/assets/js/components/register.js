/*global $*/
const register = () => {
    const wrapper = $('<section class="register white"></section>'),
        container = $('<div class="container"></div>'),
        row = $('<div id="carousel" class="row owl-carousel owl-theme center-align"></div>'),
        slide_1 = $('<img src="../img/icons/icon-people.png" alt="People">'),
        slide_2 = $('<img src="../img/icons/happy-person.png" alt="Happy person">'),
        slide_3 = $('<img src="../img/icons/group-people.png" alt="Group of people">'),
        register_button = $('<button class="amber lighten-2">REGISTRARME</button>');

    row.append(slide_1);
    row.append(slide_2);
    row.append(slide_3);
    container.append(row);
    container.append(register_button);
    wrapper.append(container);

    return wrapper;
};
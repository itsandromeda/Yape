/*global $, register*/
const render = (root) => {
    root.empty();
    root.append(register());
};

const root = $('#root');
render(root);
function updateFormURL () {
    var inputs = document.querySelectorAll("#ribbon-form input");
    inputs = Array.prototype.slice.call(inputs);
    var template_parts = inputs.filter(function (element) {
        return element.checked;
    }).map(function (element) {
        return element.value.split('_');
    });
    template_parts = [].concat.apply([], template_parts);
    var color_spans = Array.prototype.slice.call(document.getElementsByClassName("template-color"));
    var vertical_spans = Array.prototype.slice.call(document.getElementsByClassName("template-vertical"));
    var horizontal_spans = Array.prototype.slice.call(document.getElementsByClassName("template-horizontal"));
    color_spans.forEach(assignValue(template_parts[0]));
    vertical_spans.forEach(assignValue(template_parts[1]));
    horizontal_spans.forEach(assignValue(template_parts[2]));
}

function assignValue (value) {
    return function assignValueHelper (element) {
        element.innerHTML = value;
    }
}

ready(updateFormURL);

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

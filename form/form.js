function updateFormURL () {
    var inputs = document.querySelectorAll(".ribbons input");
    inputs = Array.prototype.slice.call(inputs);
    var selectedInputs = inputs.filter(function (element) {
        return element.checked;
    })
    var selectedInputsValues = selectedInputs.map(function (element) {
        return element.value;
    })
    var concatValues = selectedInputsValues.reduce(function (acc, el) {
        return acc += el;
    }, "");
    window.concatValeus = concatValues;
    document.getElementById("output_value").innerHTML = concatValues;
}

ready(updateFormURL);

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
// add listener for btn
document.querySelector('calc-button').addEventListener('click', function computeTip(e) {
    if (formCheck()) {

    }

})


//displays error messages and returns false if any error appears
function formCheck() {
    var elem = document.querySelector('#bill')
    var ret = true

    if (! (elem.value >= 0)) {
        // display appropriate err
        ret = false
    }

    elem = document.querySelector('#people')

    if (! (elem.value.isInteger())) {
        // display appropriate err
        ret = false
    }

    if (! (elem.value >= 1)) {
        // display appropriate err
        ret = false
    }

    elem = document.querySelector('#service')

    if (! elem.value) {
        // display appropriate err
        ret = false
    }

    if (ret == false) {
        // settimeout to hide all errors.
    }
}

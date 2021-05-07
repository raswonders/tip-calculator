// add listener for btn
document.querySelector('.calc-button').addEventListener('click', function computeTip(e) {
    if (formCheck()) {

    }
    e.preventDefault()
})


//displays error messages and returns false if any error appears
function formCheck() {
    // delay after which errors disappear
    var delay = 3000
    var elem = document.querySelector('#bill')
    var ret = true

    if (elem.value == "" || ! (elem.value >= 0)) {
        showErrorMsg(0)
        ret = false
    }

    elem = document.querySelector('#people')

    if (! (Number.isInteger(parseInt(elem.value)))) {
        showErrorMsg(1)
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
        refreshErrorBox()
        setTimeout(hideErrorMsgs, delay)
    }
}

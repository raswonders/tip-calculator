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
    var bill = document.querySelector('#bill').value
    var people = document.querySelector('#people').value
    var service = document.querySelector('#service').value
    var ret = true

    if (bill == "" || !(bill >= 0)) {
        showErrorMsg(0)
        ret = false
    }

    if (people == "" || !(people >= 1) || (people % 1 != 0)) {
        showErrorMsg(1)
        ret = false
    }

    if (!service) {
        showErrorMsg(2)
        ret = false
    }

    if (ret == false) {
        refreshErrorBox()
        setTimeout(hideErrorMsgs, delay)
    }
}

// add listener for btn
document.querySelector('.calc-button').addEventListener('click', function computeTip(e) {
    var billVal = document.querySelector('#bill').value
    var peopleVal = document.querySelector('#people').value
    var serviceVal = document.querySelector('#service').value

    if (formCheck(billVal, peopleVal, serviceVal)) {

    }
    e.preventDefault()
})


//displays error messages and returns false if any error appears
function formCheck(bill, people, service) {
    // delay after which errors disappear
    var delay = 3000
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

// add listener for btn
document.querySelector('.calc-button').addEventListener('click', function computeTip(e) {
    var billVal = document.querySelector('#bill').value
    var peopleVal = document.querySelector('#people').value
    var serviceVal = document.querySelector('#service').value
    var loaderGif = document.querySelector('.loader-gif')

    clearResults()

    if (formCheck(billVal, peopleVal, serviceVal)) {
        hideErrorMsgs()
        showElem(loaderGif)
        setTimeout(function() {
            hideElem(loaderGif)
            showResults(compute(billVal, peopleVal, serviceVal))
        }, 5000)
    }

    e.preventDefault()
})

function showResults(results) {
    var resultBox = document.querySelector('.result-box')
    var tip, people, service
    [tip, total, eachPerson] = results
    resultBox.innerHTML = `<p>TIP: ${tip}<br>TOTAL: ${total}<br>Each: ${eachPerson}</p>`
}

function clearResults() {
    var resultBox = document.querySelector('.result-box')
    resultBox.innerHTML = ""
}

function compute(bill, people, service) {
    tip = (bill * service) / 100
    total = Number(bill) + tip
    each = total / people

    return [tip.toFixed(2), total.toFixed(2), each.toFixed(2)]
}
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

    return ret
}

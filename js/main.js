(function() {
    // add eventHandler
    document.querySelector('.calc-button').addEventListener('click', function computeTip(e) {
        const billVal = document.querySelector('#bill').value
        const peopleVal = document.querySelector('#people').value
        const serviceVal = document.querySelector('#service').value
        const loaderGif = document.querySelector('.loader-gif')

        clearResults()

        if (formCheck(billVal, peopleVal, serviceVal)) {
            hideErrorMsgs()
            showElem(loaderGif)
            setTimeout(function () {
                hideElem(loaderGif)
                showResults(compute(billVal, peopleVal, serviceVal))
            }, 5000)
        }

        e.preventDefault()
    })

    function showResults(results) {
        const resultBox = document.querySelector('.result-box')
        var tip, people, service
        [tip, total, eachPerson] = results
        resultBox.innerHTML = `<p>Tip: $ ${tip}</p>`
        resultBox.innerHTML += `<p>Total: $ ${total}</p>`
        resultBox.innerHTML += `<p>Each: $ ${eachPerson}</p>`
    }

    function clearResults() {
        const resultBox = document.querySelector('.result-box')
        resultBox.innerHTML = ""
    }

    function compute(bill, people, service) {
        var tip = (bill * service) / 100
        var total = Number(bill) + tip
        var each = total / people

        return [tip.toFixed(2), total.toFixed(2), each.toFixed(2)]
    }

//displays error messages and returns false if any error appears
    function formCheck(bill, people, service) {
        // delay after which errors disappear
        const delay = 3000
        var errorsHidden = true

        if (bill == "" || !(bill >= 0)) {
            showErrorMsg(0)
            errorsHidden = false
        }

        if (people == "" || !(people >= 1) || (people % 1 != 0)) {
            showErrorMsg(1)
            errorsHidden = false
        }

        if (!service) {
            showErrorMsg(2)
            errorsHidden = false
        }

        if (errorsHidden == false) {
            refreshErrorBox()
            setTimeout(hideErrorMsgs, delay)
        }

        return errorsHidden
    }
})();

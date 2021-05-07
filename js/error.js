var errorBox = document.querySelector('.error-box')
var errorMsgs = errorBox.children

// turns on particular error msg
function showErrorMsg(index) {
    showElem(errorMsgs[index])
}

// shows errorBox element if at least one child is visible
function refreshErrorBox() {
    for (let msgElem of errorMsgs) {
        if (elementVisible(msgElem)) {
            showElem(errorBox)
            return
        }
    }
}

// turns off each error msg and errorBox as well
function hideErrorMsgs() {
    for (let element of errorMsgs) {
        hideElem(element)
    }
    hideElem(errorBox)
}

function hideElem(el) {
    el.classList.add('hide-elem')
}

function showElem(el) {
    el.classList.remove('hide-elem')
}

function elementVisible(el) {
    return !el.classList.contains('hide-elem')
}
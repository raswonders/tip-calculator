var errorBox = document.querySelector('.error-box')
var errorMsgs = errorBox.children

// turns on particular error msg
function showErrorMsg(index) {
    showBlockElem(errorMsgs[index])
}

// shows errorBox element if any of its children are showing
// function refreshErrorBox() {
//     for (let element of errorMsgs) {
//         if
//     }
// }

// turns off each error msg and errorBox as well
function hideErrorMsgs() {
    for (let element of errorMsgs) {
        hideElem(element)
    }
    hideElem(errorBox)
}

function hideElem(el) {
    el.style.display = "none"
}

function showBlockElem(el) {
    el.style.display = "block"
}

function elementVisible(el) {
    if (el.style.display != "none") {
        return true
    } else {
        return false
    }
}
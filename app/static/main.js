function showErrorMessage(input, message) {
    const error = input.nextElementSibling;
    error.className = 'error';
    error.innerText = message;

    return false;
}

function sendData(data) {
    const XHR = new XMLHttpRequest();

    XHR.open("POST", "http://127.0.0.1:8000/calc", true)
    XHR.setRequestHeader("Content-Type", "application/json");
    XHR.onreadystatechange = function () {
        let responseObject;

        if (this.readyState === 4) {
            let response = this.responseText
            responseObject = JSON.parse(response)
        }

        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("total").value = responseObject['result'];
        } else if (this.readyState === 4 && this.status === 422) {
            let errorObject = responseObject['detail'];
            errorObject.forEach(function (detail) {
                    let input = document.getElementsByName(detail['loc'][1])[0]
                    showErrorMessage(input, detail.msg)
                }
            )
        }
    };

    return XHR.send(data)
}

let form = document.getElementById("calculate");

form.addEventListener('submit', function (event) {
    // stop form submission
    event.preventDefault();

    // hide the error message
    let nodes = document.querySelectorAll(".error");
    nodes.forEach(function (node) {
        node.innerHTML = ''
    })

    let firstNumber = form.elements["firstNumber"].value;
    let secondNumber = form.elements["secondNumber"].value;
    let data = JSON.stringify({"number1": firstNumber, "number2": secondNumber});

    sendData(data);
});

const resultArea = document.getElementById('result');
const screenArea = document.getElementById('screen');
const buttons = document.getElementsByClassName('c');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (event.target.innerText == '=') {
            const result = eval(screenArea.innerText)
            resultArea.innerText = parseFloat(result.toFixed(3))
        }
        else if (event.target.innerText == 'c') {
            screenArea.innerText = '';
            resultArea.innerText = '';
        }
        else if (event.target.innerText == 'DEL') {
            screenArea.innerText = screenArea.innerText.substring(0, screenArea.innerText.length - 1)
            if (screenArea.innerText == '') {
                resultArea.innerText = resultArea.innerText.substring(0, resultArea.innerText.length - 1)
            }
        }
        else {
            screenArea.innerText = screenArea.innerText + event.target.innerText;
        }
    })

}
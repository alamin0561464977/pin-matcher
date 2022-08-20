document.getElementById('btn-generate-pin').addEventListener('click', function () {
    const randomNum = Math.round(Math.random() * 10000) + '';
    function generatePin() {
        if (randomNum.length === 4) {
            return randomNum;
        }
        else {
            return generatePin();
        }
    }
    const random = generatePin()
    const pinInput = document.getElementById('pin-input');
    pinInput.value = random;

});
// ===================================================
document.getElementById('calculator-parent').addEventListener('click', function (event) {
    const num = event.target.innerText;
    const calculatorInput = document.getElementById('calculator-input');
    const calculatorInputValue = calculatorInput.value;
    if (isNaN(num)) {
        if (num === 'C') {
            calculatorInput.value = '';
        }
        else if (num === '<') {
            const digits = calculatorInputValue.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calculatorInput.value = remainingDigits;
        }
    }
    else {
        calculatorInput.value = calculatorInputValue + num;
    };
});
document.getElementById('submit').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input');
    const pinInputValue = pinInput.value;
    const calculatorInput = document.getElementById('calculator-input');
    const calculatorInputValue = calculatorInput.value;
    const PinDidntMatch = document.getElementById('Pin-Didnt-Match');
    const PinMatched = document.getElementById('Pin-Matched');
    if (pinInputValue === calculatorInputValue) {
        PinDidntMatch.style.display = "none";
        PinMatched.style.display = "block";
    }
    else {
        PinDidntMatch.style.display = "block";
        PinMatched.style.display = "none";
    }
})
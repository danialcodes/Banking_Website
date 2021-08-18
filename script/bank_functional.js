function getInputValue(id) {
    const element = document.getElementById(id);
    const textValue = element.value;
    element.value = '';
    return parseFloat(textValue);
}
function getElement(id) {
    const ele = document.getElementById(id);
    const eleValue = parseFloat(ele.innerText);
    const eleInfo = [ele, eleValue];
    return eleInfo;
}

function updateValue(currentId, inputId) {
    const inputValue = getInputValue(inputId);
    const balanceElementInfo = getElement('balance_box');
    if (inputValue >= 0) {
        const currentElementInfo = getElement(currentId);

        if (inputId == 'deposit_input' || (inputId == 'withdraw_input' && inputValue <= balanceElementInfo[1])) {
            currentElementInfo[0].innerText = currentElementInfo[1] + inputValue;

            if (inputId == 'deposit_input') {
                balanceElementInfo[0].innerText = balanceElementInfo[1] + inputValue;
            }
            else if (inputId == 'withdraw_input') {
                balanceElementInfo[0].innerText = balanceElementInfo[1] - inputValue;
            }
        }

    }

}

document.getElementById('deposit_btn').addEventListener('click', function () {
    updateValue('deposit_box', 'deposit_input');
});

document.getElementById('withdraw_btn').addEventListener('click', function () {
    updateValue('withdraw_box', 'withdraw_input');
});
const deposit_show = document.getElementById('deposit_box');
const withdraw_show = document.getElementById('withdraw_box');
const balance_show = document.getElementById('balance_box');

document.getElementById('deposit_btn').addEventListener('click', function () {
    const deposit_ammount = parseFloat(document.getElementById('deposit_input').value);

    const updated_deposite = parseFloat(deposit_show.innerText) + deposit_ammount;
    deposit_show.innerText = updated_deposite;

    const updated_balance = parseFloat(balance_show.innerText) + deposit_ammount;
    balance_show.innerText = updated_balance;
    document.getElementById('deposit_input').value = '';


});
document.getElementById('withdraw_btn').addEventListener('click', function () {
    const withdraw_ammount = parseFloat(document.getElementById('withdraw_input').value);

    const updated_withdraw = parseFloat(withdraw_show.innerText) + withdraw_ammount;
    withdraw_show.innerText = updated_withdraw;

    const updated_balance = parseFloat(balance_show.innerText) - withdraw_ammount;
    balance_show.innerText = updated_balance;
    document.getElementById('withdraw_input').value = '';
});
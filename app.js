const amountInput = document.getElementById('amount-input');
const interestRateInput = document.getElementById('interest-rate-input');
const lengthOfLoanInput = document.getElementById('length-of-loan-input');

function calculateMortgagePayment() {
    const borrowedMoney = amountInput.ariaValueMax;
    const lengthOfLoan = lengthOfLoanInput.value * 12;
    const interestRate = interestRateInput.value;
    const calculatedInterest = interestRate / 100;
    const interestReady = calculatedInterest /12;
}
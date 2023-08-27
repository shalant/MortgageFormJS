const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const lengthOfMortgage = document.getElementById('length-of-mortgage');

const form = document.getElementById("mortgage");

function calculateMortgage(loanAmount, interestRate, numberMonthlyPayments) {
    function percentageToDecimal(percent) {
        return percent / 12 / 100;
    }

    interestRate = percentageToDecimal(interestRate);

    function yearsToMonths(year) {
        return year * 12;
    }

    numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

    let mortgage = (interestRate * loanAmount) / (1 - Math.pow(1 + interestRate, -numberMonthlyPayments))

    return parseFloat(mortgage.toFixed(2));
}

function calculateTotalPayment(loanAmount, interestRate, numberMonthlyPayments) {
    function percentageToDecimal(percent) {
        return percent / 12 / 100;
    }

    interestRate = percentageToDecimal(interestRate);

    function yearsToMonths(year) {
        return year * 12;
    }

    numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

    let totalPayment = (interestRate * loanAmount) / (1 - Math.pow(1 + interestRate, -numberMonthlyPayments)) * numberMonthlyPayments;

    return parseFloat(totalPayment.toFixed(2));
}

function calculateTotalInterestPaid(loanAmount, interestRate, numberMonthlyPayments) {
    function percentageToDecimal(percent) {
        return percent / 12 / 100;
    }

    interestRate = percentageToDecimal(interestRate);

    function yearsToMonths(year) {
        return year * 12;
    }

    numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

    let totalInterestPaid = ((interestRate * loanAmount) / (1 - Math.pow(1 + interestRate, -numberMonthlyPayments)) * numberMonthlyPayments) - loanAmount
    ;

    return parseFloat(totalInterestPaid.toFixed(2));
}

form.onsubmit = (e) => {
    e.preventDefault();
    validate();

    let monthlyPayment = calculateMortgage(loanAmount.value, interestRate.value, lengthOfMortgage.value);
    let totalPayment = calculateTotalPayment(loanAmount.value, interestRate.value, lengthOfMortgage.value);
    let totalInterestPaid = calculateTotalInterestPaid(loanAmount.value, interestRate.value, lengthOfMortgage.value);

    document.getElementById("monthlyPayment").innerHTML = `${monthlyPayment}`;
    document.getElementById("totalPayment").innerHTML = `${totalPayment}`;
    document.getElementById("totalInterestPaid").innerHTML = `${totalInterestPaid}`;
}
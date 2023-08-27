// Inputs / DOM elements

const homeValue = document.getElementById("homeValue");
const downPayment = document.getElementById("downPayment");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanDuration = document.getElementById("loanDuration");

const form = document.getElementById("mortgage");

// console.log(homeValue)

downPayment.addEventListener("keyup", () => {
    loanAmount.value = homeValue.value - downPayment.value;

    let loanAmountValue = loanAmount.value;
    return loanAmountValue;
})

function calculateMortgage(loanAmount, interestRate, numberMonthlyPayments) {
    function percentageToDecimal(percent) {
        return percent /12 / 100;
    }

    interestRate = percentageToDecimal(interestRate);

    function yearsToMonths(year) {
        return year * 12;
    }

    numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

    let mortgage = (interestRate * loanAmount) / (1 - Math.pow(1 + interestRate, -numberMonthlyPayments))

    return parseFloat(mortgage.toFixed(2));
}

form.onsubmit = (e) => {
    e.preventDefault();
    validate();
    let loanAmount = homeValue.value - downPayment.value;

    let monthlyPayment = calculateMortgage(loanAmount, interestRate.value, loanDuration.value);

    document.getElementById("monthlyPayment").innerHTML = `${monthlyPayment}`;
}

function validate() {
    
}
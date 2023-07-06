function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  intretRateVaue = document.getElementById("intrest-rate").value;
  MonthsToPayValue = document.getElementById("months").value;

   intrest = (loanAmountValue * (intretRateVaue * 0.01)) / MonthsToPayValue;

   monthlyPayment = (loanAmountValue / MonthsToPayValue + intrest).toFixed(2)
  
   document.getElementById(
    "payment"
  ).innerHTML = `Monthly  Payment: ${monthlyPayment}`;
}

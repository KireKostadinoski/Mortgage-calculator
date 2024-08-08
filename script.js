document.addEventListener("DOMContentLoaded", function () {
  const mortgageAmountInput = document.getElementById("mortgageAmount");
  const mortgageTermInput = document.getElementById("mortgageTerm");
  const interestRateInput = document.getElementById("interestRate");
  const repaymentRadio = document.getElementById("repayment");
  const interestOnlyRadio = document.getElementById("interestOnly");

  const mortgageAmountError = document.getElementById("mortgageAmountError");
  const mortgageTermError = document.getElementById("mortgageTermError");
  const interestRateError = document.getElementById("interestRateError");
  const radiosError = document.getElementById("radiosError");

  const mortgageAmountDiv = document.getElementById("mortgageAmountDiv");
  const mortgageTermDiv = document.getElementById("mortgageTermDiv");
  const interestRateDiv = document.getElementById("interestRateDiv");

  const amountInputDiv = document.getElementById("amountInputDiv");
  const termInputDiv = document.getElementById("termInputDiv");
  const interestInputDiv = document.getElementById("interestInputDiv");

  const clearAllBtn = document.getElementById("clearAll");
  const calculateMortgageButton = document.getElementById("calculateMortgage");

  function checkForm() {
    let isValid = true;

    // Clear previous error messages
    mortgageAmountError.innerHTML = "";
    mortgageTermError.innerHTML = "";
    interestRateError.innerHTML = "";
    radiosError.innerHTML = "";

    // Validate Mortgage Amount3
    if (!mortgageAmountInput.value) {
      mortgageAmountError.innerHTML = "Please enter a mortgage amount";
      mortgageAmountDiv.classList.remove("bg-Slate100", "text-Slate700");
      amountInputDiv.classList.remove("border-Slate700");
      amountInputDiv.style.borderColor ="hsl(4, 69%, 50%)";
      mortgageAmountDiv.style.backgroundColor = "hsl(4, 69%, 50%)"; // Equivalent to bg-red-500
      mortgageAmountDiv.style.color = "#ffffff"; // Equivalent to text-white
      isValid = false;
    }

    // Validate Mortgage Term
    if (!mortgageTermInput.value) {
      mortgageTermError.innerHTML = "Please enter a mortgage term";
      mortgageTermDiv.classList.remove("bg-Slate100", "text-Slate700");
      mortgageTermDiv.style.backgroundColor = "hsl(4, 69%, 50%)";
      mortgageTermDiv.style.color ='#ffffff'
      termInputDiv.classList.remove("border-Slate700");
      termInputDiv.style.borderColor ="hsl(4, 69%, 50%)";
      isValid = false;
    }

    // Validate Interest Rate
    if (!interestRateInput.value) {
      interestRateError.innerHTML = "Please enter an interest rate";
      interestRateDiv.classList.remove("bg-Slate100", "text-Slate700");
      interestRateDiv.style.backgroundColor = "hsl(4, 69%, 50%)";
      interestRateDiv.style.color  ='#ffffff';
      interestInputDiv.classList.remove("border-Slate700");
      interestInputDiv.style.borderColor ="hsl(4, 69%, 50%)";
      isValid = false;
    }

    // Validate Mortgage Type
    if (!repaymentRadio.checked && !interestOnlyRadio.checked) {
      radiosError.innerHTML = "Please select a mortgage type";
      isValid = false;
    }

    // If the form is valid, proceed with further processing
    if (isValid) {
      calculateMortgage();
    }
  }

  function calculateMortgage() {
    const noResultsDiv = document.getElementById("noResultsDiv");
    const resultsDiv = document.getElementById("resultsDiv");

    // Get input values
    const mortgageAmount = parseFloat(
      document.getElementById("mortgageAmount").value
    );
    const mortgageTerm = parseFloat(
      document.getElementById("mortgageTerm").value
    );
    const interestRate = parseFloat(
      document.getElementById("interestRate").value
    );

    // Convert annual interest rate to a monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate the number of payments
    const numberOfPayments = mortgageTerm * 12;

    // Calculate the monthly payment using the formula
    const monthlyPayment =
      (mortgageAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Calculate the total payment
    const totalPayment = monthlyPayment * numberOfPayments;

    // Toggle visibility of the divs
    noResultsDiv.classList.add("hidden");
    resultsDiv.classList.remove("hidden");
    resultsDiv.classList.add("flex");

    const monthlyPaymentResult = document.getElementById("monthlyPayment");
    const totalPaymentResult = document.getElementById("totalPaymentResult");

    monthlyPaymentResult.innerHTML = `<span>&#163;</span> ${monthlyPayment.toFixed(
      2
    )}`;
    totalPaymentResult.innerHTML = `<span>&#163;</span> ${totalPayment.toFixed(
      2
    )}`;
  }

  function clearAllInputs() {
    // Clear input values
    mortgageAmountInput.value = "";
    mortgageTermInput.value = "";
    interestRateInput.value = "";
    repaymentRadio.checked = false;
    interestOnlyRadio.checked = false;

    // Clear error messages
    mortgageAmountError.innerHTML = "";
    mortgageTermError.innerHTML = "";
    interestRateError.innerHTML = "";
    radiosError.innerHTML = "";

    // Reset styles to default
    mortgageAmountDiv.classList.remove("bg-Red", "text-white");
    mortgageAmountDiv.classList.add("bg-Slate100", "text-Slate700");
    amountInputDiv.classList.remove("border-Red");
    amountInputDiv.classList.add("border-Slate700");

    mortgageTermDiv.classList.remove("bg-Red", "text-white");
    mortgageTermDiv.classList.add("bg-Slate100", "text-Slate700");
    termInputDiv.classList.remove("border-Red");
    termInputDiv.classList.add("border-Slate700");

    interestRateDiv.classList.remove("bg-Red", "text-white");
    interestRateDiv.classList.add("bg-Slate100", "text-Slate700");
    interestInputDiv.classList.remove("border-Red");
    interestInputDiv.classList.add("border-Slate700");
  }

  calculateMortgageButton.addEventListener("click", checkForm);
  clearAllBtn.addEventListener("click", clearAllInputs);
});

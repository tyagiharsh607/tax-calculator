const grossIncome = document.querySelector("#grossIncome");
const extraIncome = document.querySelector("#extraIncome");
const ageGroup = document.querySelector("#age-group");
const deductions = document.querySelector("#deductions");
const submitButton = document.querySelector("#submit-button");
const form = document.querySelector("#taxCalculatorForm");
const result = document.querySelector("#result");
const detail = document.querySelectorAll(".detail");
const warning = document.querySelectorAll(".warning");
const textFields = document.querySelectorAll("input");

let isFormValid = {};

warning.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const formGroup = item.parentElement;
    const div = document.createElement("p");
    div.innerHTML = "Please enter a valid number";
    div.classList.add("warning-text");
    formGroup.appendChild(div);
  });
});

warning.forEach((item) => {
  item.addEventListener("mouseout", () => {
    const formGroup = item.parentElement;
    const div = formGroup.querySelector(".warning-text");
    formGroup.removeChild(div);
  });
});

textFields.forEach((item) => {
  item.addEventListener("input", () => {
    const value = item.value;
    const warning = item.parentElement.querySelector(".warning");

    if (isNaN(value)) {
      warning.style.visibility = "visible";
      isFormValid[item.name] = false;
    } else {
      warning.style.visibility = "hidden";
      isFormValid[item.name] = true;
    }
  });
});

detail.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const element = item.parentElement.parentElement.childNodes[3].id;
    const formGroup = item.parentElement.parentElement;
    const div = document.createElement("p");
    if (element === "grossIncome") {
      div.innerHTML = "Gross Annual Income is your total salary in a year";
    }
    if (element === "extraIncome") {
      div.innerHTML = "This is any extra income you have";
    }
    if (element === "age-group") {
      div.innerHTML = "Select your age group";
    }
    if (element === "deductions") {
      div.innerHTML = "This is any deductions you have";
    }
    div.classList.add("info");
    formGroup.appendChild(div);
  });
});

detail.forEach((item) => {
  item.addEventListener("mouseout", () => {
    const formGroup = item.parentElement.parentElement;
    const div = formGroup.querySelector(".info");
    formGroup.removeChild(div);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const totalIncome =
    Number(grossIncome.value) +
    Number(extraIncome.value) -
    Number(deductions.value);
  let incomeAfterTax;
  let tax = 0;

  if (totalIncome >= 800000) {
    if (ageGroup.value === "1") {
      tax = 0.3 * (totalIncome - 800000);
    } else if (ageGroup.value === "2") {
      tax = 0.4 * (totalIncome - 800000);
    } else {
      tax = 0.1 * (totalIncome - 800000);
    }
  }

  incomeAfterTax = totalIncome - tax;

  result.style.display = "flex";
  if (
    isFormValid.deductions === false ||
    isFormValid.extraIncome === false ||
    isFormValid.grossIncome === false
  ) {
    result.innerHTML = `
        <span id="above-text" >Please fill in all fields with valid numbers</span>
        <button id="close-button">Close</button>
    `;
  } else {
    result.innerHTML = `
        <span id="above-text">Your overall income will be</span>
        <span id="amount">${incomeAfterTax}</span>
        <span id="below-text">after tax deductions</span>
        <button id="close-button">Close</button>
    `;
  }
  console.log(isFormValid);
  form.style.visibility = "hidden";
  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", () => {
    result.style.display = "none";
    form.style.visibility = "visible";
    form.reset();
  });
});

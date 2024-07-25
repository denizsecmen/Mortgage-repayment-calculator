let selected = undefined;
let button = document.querySelector("#button");
let amount = document.querySelector("#value");
let yearInput = document.querySelector("#year");
let percent = document.querySelector("#percent");
let radioSelection = document.querySelectorAll(".radio");
let amountError = document.querySelector("#amountError");
let yearError = document.querySelector("#yearError");
let perError = document.querySelector("#perError");
let radioSelectionError = document.querySelector("#radioSelectionError");
let clear = document.querySelector("#clear");
let resultValue = document.querySelector("#result");
let entranceScreen = document.querySelector("#result-screen");
let resultScreen = document.querySelector("#calculation-result");
for (let i = 0; i < radioSelection.length; i++){
  radioSelection[i].addEventListener('click', function(){
    selected = this.children[0];
    selected.checked = true;
  });
}
clear.addEventListener('click', () => {
  amount.value = "";
  yearInput.value = "";
  percent.value = "";
  selected.value = "";
  for (let i = 0; i < radioSelection.length; i++) {
    selected.checked = false;
  }
});
button.addEventListener('click', () => {
  if (!amount.value) {
    amountError.style.display = "block";
  }
  else {
    amountError.style.display = "none";

  }
  if (!yearInput.value) {
    yearError.style.display = "block";
  }
  else {
    yearError.style.display = "none";

  }
  if (!percent.value) {
    perError.style.display = "block";
  }
  else {
    perError.style.display = "none";

  }
  if (!selected) {
    radioSelectionError.style.display = "block";
  }
  else {
    radioSelectionError.style.display = "none";

  }
  try {
    let mAmount = parseInt(amount.value);
    let yInput = parseInt(yearInput.value)*12;
    let perc = parseFloat(percent.value) / (100 * 12);
    let repayment = parseFloat((mAmount * yInput) / (1 - Math.pow(1 + perc, -perc))).toFixed(2);
    console.log(repayment);
    resultValue.innerHTML = repayment.toString();
    entranceScreen.style.display = "none";
    resultScreen.style.display = "block";
    alert("Hello");
  }
  catch (e) {
    console.log(e);
  }
});

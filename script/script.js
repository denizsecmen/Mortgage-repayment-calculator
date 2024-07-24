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
for (let i = 0; i < radioSelection.length; i++){
  radioSelection[i].addEventListener('click', function(){
    selected = this.children[0];
    selected.checked = true;
  });
}
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
});

let selected = undefined;
let button = document.querySelector("#button");
let amount = document.querySelector("#amount");
let yearInput = document.querySelector("#yearinput");
let percent = document.querySelector("#percent");
let radioSelection = document.querySelectorAll(".radio");
let amountError = document.querySelector("#amountError");
let yearError = document.querySelector("#yearError");
let perError = document.querySelector("#perError");
let radioSelectionError = document.querySelector("#radioSelectionError");
for (let i = 0; i < radioSelection.length; i++){
  radioSelection[i].addEventListener('click', function(){
    selected = this.children[0];
  });
}
button.addEventListener('click', () => {
  if (amount) {
    amountError.style.display = "block";
  }
  if (yearInput) {
    yearError.style.display = "block";
  }
  if (percent) {
    perError.style.display = "block";
  }
  if (radioSelectionError) {
    radioSelectionError.style.display = "block";
  }
});

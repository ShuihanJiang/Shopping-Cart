document.querySelector("#name").addEventListener("blur", function () {
  if (this.value !== "") {
    document.querySelector("#nameWarning").innerHTML = "";
  }
});
document.querySelector("#email").addEventListener("blur", function () {
  if (this.value !== "") {
    document.querySelector("#emailWarning").innerHTML = "";
  }
});
document.querySelector("#address").addEventListener("blur", function () {
  if (this.value !== "") {
    document.querySelector("#addressWarning").innerHTML = "";
  }
});
document.querySelector("#province").addEventListener("blur", function () {
  if (this.value !== "") {
    document.querySelector("#provinceWarning").innerHTML = "";
  }
});

// Add an event to the form on submit to validate input
document.cartForm.addEventListener("submit", validate);

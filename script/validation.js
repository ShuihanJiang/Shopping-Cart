function validate(e) {
  e.preventDefault();
  var valid = true;
  if (cartForm.name.value === "") {
    document.querySelector("#nameWarning").textContent =
      "*Please enter a name*";
    valid = false;
  }

  if (cartForm.email.value === "") {
    document.querySelector("#emailWarning").textContent =
      "*Please enter an email*";
    valid = false;
  }

  if (cartForm.address.value === "") {
    document.querySelector("#addressWarning").textContent =
      "*Please enter an address*";
    valid = false;
  }

  if (cartForm.province.value === "") {
    document.querySelector("#provinceWarning").textContent =
      "*Please select a province*";
    valid = false;
  }

  if (
    cartForm.deliveryDate === "" ||
    new Date(cartForm.deliveryDate.value) < new Date()
  ) {
    document.querySelector("#dateWarning").textContent =
      "*Please select a delivery data later than today*";
    valid = false;
  }
  if (valid) {
    location.href = "summary.html?" + buildUrlParams();
  }
}

function onAmountChange(id, val) {
  const itemId = id.substring("amount".length, id.length);
  const subTotal = document.getElementById("subTotal" + itemId);
  const price = document.getElementById("price" + itemId).innerText;
  subTotal.value = price * val;
  subTotal.innerText = price * val;
  const allSubTotals = document.getElementsByClassName("subTotal");
  let totalPrice = 0;
  for (const subTotal of allSubTotals) {
    totalPrice += Number(subTotal.value);
  }
  updateTotal(totalPrice);
}

function updateTotal(value) {
  const total = document.getElementById("total");
  total.value = value;
  total.innerText = value;
}

function buildUrlParams() {
  // Collect contact info
  var para = new URLSearchParams();
  const radios = document.querySelectorAll('input[name="title"]');
  for (const radio of radios) {
    if (radio.checked) {
      para.append("title", radio.value);
      break;
    }
  }
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const province = document.getElementById("province").value;
  const total = document.getElementById("total").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  para.append("name", name);
  para.append("email", email);
  para.append("address", address);
  para.append("province", province);
  para.append("total", total);
  para.append("deliveryDate", deliveryDate);

  // Collect items info
  const itemNames = document.getElementsByClassName("itemName");
  const amount = document.getElementsByClassName("amountSetter");
  for (let i = 0; i < itemNames.length; i++) {
    if (amount[i].value) {
      para.append("itemName", itemNames[i].innerText);
      para.append("amount", amount[i].value);
    }
  }
  return para.toString();
}

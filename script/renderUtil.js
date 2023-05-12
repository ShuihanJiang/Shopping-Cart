const reuqestURL = "data.json";
const request = new XMLHttpRequest();
request.open("GET", reuqestURL);
request.responseType = "text";
request.send();
request.onload = function () {
  displayHeader();
  const dataText = request.response;
  const data = JSON.parse(dataText);
  for (const item of data.items) {
    displayItem(item);
  }
};
function displayHeader() {
  const p = document.createElement("p");
  p.setAttribute("class", "header");
  const name = document.createElement("label");
  const image = document.createElement("label");
  const price = document.createElement("label");
  const category = document.createElement("label");
  const amount = document.createElement("label");
  const subTotal = document.createElement("label");
  name.innerText = "name";
  image.innerText = "image";
  price.innerText = "price(CAD)";
  category.innerText = "category";
  amount.innerText = "amount";
  subTotal.innerText = "subTotal(CAD)";
  p.append(image, name, price, category, amount, subTotal);
  const items = document.getElementById("items");
  items.appendChild(p);
}
function displayItem(item) {
  const p = document.createElement("p");
  const name = document.createElement("label");
  const image = document.createElement("img");
  const price = document.createElement("label");
  const category = document.createElement("label");
  const amount = document.createElement("input");
  p.setAttribute("class", "itemCard");
  name.setAttribute("class", "itemName");
  amount.setAttribute("type", "number");
  amount.setAttribute("min", 0);
  amount.setAttribute("name", item.name);
  amount.setAttribute("id", "amount" + item.id);
  amount.setAttribute("class", "amountSetter");
  amount.onchange = () => onAmountChange(amount.id, amount.value);
  price.setAttribute("id", "price" + item.id);
  const subTotal = document.createElement("input");
  subTotal.setAttribute("readonly", "true");
  subTotal.setAttribute("id", "subTotal" + item.id);
  subTotal.setAttribute("class", "subTotal");
  name.innerText = item.name;
  image.src = item.image;
  price.innerText = item.price;
  category.innerText = item.category;
  subTotal.value = 0;
  subTotal.innerText = 0;
  p.append(image, name, price, category, amount, subTotal);
  const items = document.getElementById("items");
  items.appendChild(p);
}

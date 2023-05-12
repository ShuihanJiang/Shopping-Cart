const order = buildOrderFromParm();
render(order);
function buildOrderFromParm() {
  const para = new URLSearchParams(window.location.search);
  const name = para.get("name");
  const email = para.get("email");
  const address = para.get("address");
  const province = para.get("province");
  const total = para.get("total");
  const itemNames = para.getAll("itemName");
  const amounts = para.getAll("amount");
  const deliveryDate = para.get("deliveryDate");
  const items = [];
  for (let i = 0; i < itemNames.length; i++) {
    items.push({ [itemNames[i]]: amounts[i] });
  }
  const order = new Order(
    name,
    email,
    address,
    province,
    total,
    items,
    deliveryDate
  );
  return order;
}

function render(order) {
  const ul = document.getElementById("baseInfo");
  const ol = document.getElementById("itemInfo");

  const nameLi = document.createElement("li");
  const addressLi = document.createElement("li");
  const emailLi = document.createElement("li");
  const provinceLi = document.createElement("li");
  const totalLi = document.createElement("li");
  const deliveryDateLi = document.createElement("li");

  nameLi.innerText = `name: ${order.getName()}`;
  addressLi.innerText = `address: ${order.getAddress()}`;
  emailLi.innerText = `email: ${order.getEmail()}`;
  provinceLi.innerText = `province: ${order.getProvince()}`;
  totalLi.innerText = `total(CAD): ${order.getTotal()}`;
  deliveryDateLi.innerText = `Will be delivered on ${order.getDeliveryDate()}`;
  ul.append(nameLi, addressLi, emailLi, provinceLi, totalLi, deliveryDateLi);

  for (let item of order.getItems()) {
    const li = document.createElement("li");
    const itemName = Object.keys(item)[0];
    const itemAmount = item[itemName];
    li.innerText = `${itemAmount} ${itemName}`;
    ol.append(li);
  }
}

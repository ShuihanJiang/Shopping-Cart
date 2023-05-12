class Order {
  #name;
  #email;
  #address;
  #province;
  #total;
  #items;
  #deliveryDate;
  constructor(name, email, address, province, total, items, deliveryDate) {
    this.#name = name;
    this.#email = email;
    this.#address = address;
    this.#province = province;
    this.#total = total;
    this.#items = items;
    this.#deliveryDate = deliveryDate;
  }
  getName() {
    return this.#name;
  }
  getEmail() {
    return this.#email;
  }
  getAddress() {
    return this.#address;
  }
  getProvince() {
    return this.#province;
  }
  getTotal() {
    return this.#total;
  }
  getItems() {
    return this.#items;
  }
  getDeliveryDate() {
    return this.#deliveryDate;
  }
}

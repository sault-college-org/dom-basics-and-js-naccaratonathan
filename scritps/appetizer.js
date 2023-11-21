class AppetizerItem {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  createItem() {
    const item = document.createElement("div");
    item.setAttribute("class", `appetizer-item text-center ${this.id}`);

    const itemContent = document.createElement("div");
    itemContent.setAttribute("class", "appetizer-content");

    const itemTitle = document.createElement("h1");
    itemTitle.innerHTML = this.title;
    itemTitle.setAttribute("class", "appetizer-title");

    const itemDescription = document.createElement("p");
    itemDescription.innerHTML = this.description;
    itemDescription.setAttribute("class", "appetizer-description");

    itemContent.appendChild(itemTitle);
    itemContent.appendChild(itemDescription);

    item.appendChild(itemContent);

    return item;
  }
}

const Appetizer = () => {
  const appetizerContent = document.createElement("div");
  appetizerContent.setAttribute("class", "appetizer container");

  const appetizerHeader = document.createElement("h1");
  appetizerHeader.setAttribute("class", "text-center my-3 pt-5 mb-5");
  appetizerHeader.innerHTML = "Appetizer Menu";
  appetizerContent.appendChild(appetizerHeader);

  const appetizerFlexBox = document.createElement("div");
  appetizerFlexBox.setAttribute("class", "appetizer-flexbox");

  const cheeseFries = new AppetizerItem(
    "cheese-fries",
    "Cheese Fries",
    "Loaded cheese fries"
  );
  appetizerFlexBox.appendChild(cheeseFries.createItem());

  const onionRings = new AppetizerItem(
    "onion-rings",
    "Onion Rings",
    "ONION RINGS ONION RINGS ONION RINGS ONION RINGS."
  );
  appetizerFlexBox.appendChild(onionRings.createItem());

  const nachos = new AppetizerItem(
    "nachos",
    "Nachos",
    "NACHOS AND CHEESE BABY."
  );
  appetizerFlexBox.appendChild(nachos.createItem());

  appetizerContent.appendChild(appetizerFlexBox);

  return appetizerContent;
};

export default Appetizer;

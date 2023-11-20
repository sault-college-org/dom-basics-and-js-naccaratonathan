const Appetizer = () => {
  const appetizerContent = document.createElement("div");
  appetizerContent.setAttribute("class", "container");

  const appetizerHeader = document.createElement("h1");
  appetizerHeader.setAttribute("class", "text-center my-3 pt-5 mb-5");
  appetizerHeader.innerHTML = "Appetizer Menu";

  const appetizerList = document.createElement("ul");
  appetizerList.setAttribute("class", "appetizerList");

  const appetizerItems = [
    {
      name: "Cheese Fries",
      description:
        "Our freshly cooked fries, lightly salted and topped with some of the best cheese.",
      imageSrc: "imgs/cheese_fries.jpg",
    },
    {
      name: "Onion Rings",
      description: "Crispy onion rings served with a special dipping sauce.",
      imageSrc: "imgs/onion_rings.jpg",
    },
    {
      name: "Nachos",
      description: "Crunchy nachos n cheese",
      imageSrc: "imgs/nachos.jpg",
    },
  ];

  appetizerItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "appetizer-item");

    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", item.imageSrc);
    itemImage.setAttribute("alt", item.name);
    listItem.appendChild(itemImage);

    const itemTitle = document.createElement("h2");
    itemTitle.innerHTML = item.name;
    listItem.appendChild(itemTitle);

    const itemDescription = document.createElement("p");
    itemDescription.innerHTML = item.description;
    listItem.appendChild(itemDescription);

    appetizerList.appendChild(listItem);
  });

  appetizerContent.appendChild(appetizerHeader);
  appetizerContent.appendChild(appetizerList);

  return appetizerContent;
};

export default Appetizer;

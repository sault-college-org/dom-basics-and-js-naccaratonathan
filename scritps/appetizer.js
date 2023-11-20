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
    },
    {
      name: "Onion Rings",
      description: "Onion rings onion rings onion rings onion rings",
    },
    {
      name: "Nachos",
      description: "Nachos and cheese the best of all.",
    },
  ];

  appetizerItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "appetizer-item");

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

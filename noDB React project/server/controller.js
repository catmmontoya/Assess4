// import data from "./data-mockup";

let data = [
  { id: 0, item: "k1234", description: "Black Boots", quantity: 7, notes: "" },
  {
    id: 1,
    item: "kj432",
    description: "Brown Twist Belt",
    quantity: 12,
    notes: "",
  },
  {
    id: 2,
    item: "j1243",
    description: "Bell Bottom Indigo Pants",
    quantity: 16,
    notes: "",
  },
  { id: 3, item: "jk4321", description: "Knit top", quantity: 8, notes: "" },
];

let globalId = 4;

const handlerFunctions = {
  getInventory: (req, res) => {
    res.send({
      message: "Here is all the inventory",
      inventory: data,
    });
  },

  addRow: (req, res) => {
    const { description } = req.body;

    const newItem = {
      id: globalId,
      item: item,
      description: description,
      quantity: 0,
      notes: notes,
    };

    data.push(newItem);
    globalId++;

    res.send({
      message: "New item added to inventory data",
      newItem: newItem,
    });
  },

  deleteItem: (req, res) => {
    const { id } = req.params;

    data = data.filter((inventoryItem) => {
      return inventoryItem.id !== +id;
    });
    res.send({
      message: "Row deleted",
      status: true,
    });
  },

  updateItem: (req, res) => {
    const { id } = req.params;
    const { item, description, quantity, notes } = req.body;

    const index = data.findIndex((inventoryItem) => {
      return inventoryItem.id === +id;
    });
    const inventoryToUpdate = data[index];

    inventoryToUpdate.item = item;
    inventoryToUpdate.description = description;
    inventoryToUpdate.quantity = +quantity;
    inventoryToUpdate.notes = notes;

    res.send({
      message: "Updated Item",
      updatedItem: inventoryToUpdate,
    });
  },
};

export default handlerFunctions;

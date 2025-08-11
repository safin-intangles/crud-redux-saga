let items = [{ id: 1, name: "Item 1" }];

export const api = {
  fetchItems: () =>
    new Promise((resolve) => setTimeout(() => resolve([...items]), 1000)),

  addItem: (item) =>
    new Promise((resolve) =>
      setTimeout(() => {
        const newItem = { id: Date.now(), ...item };
        items.push(newItem);
        resolve(newItem);
      }, 1000)
    ),

  updateItem: (id, newItem) =>
    new Promise((resolve) =>
      setTimeout(() => {
        items = items.map((item) =>
          item.id === id ? { ...item, ...newItem } : item
        );
        resolve({ id, ...newItem });
      }, 1000)
    ),

  deleteItem: (id) =>
    new Promise((resolve) =>
      setTimeout(() => {
        items = items.filter((item) => item.id !== id);
        resolve(id);
      }, 1000)
    ),
};

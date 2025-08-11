import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
} from "../redux/itemSlice";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";

const ItemList = () => {
  const { list, loading, error } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const handleSubmit = () => {
    if (text === "") return;

    if (editingId) {
      dispatch(updateItem({ id: editingId, data: { name: text } }));
      setEditingId(null);
    } else {
      dispatch(addItem({ name: text }));
    }
    setText("");
  };

  const handleEdit = (item) => {
    setText(item.name);
    setEditingId(item.id);
  };

  const handleDelete = (id) => dispatch(deleteItem(id));

  return (
    <View>
      <TextInput
        placeholder="Enter item"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "green" : "gray", alignItems: "center" },
        ]}
      >
        <Text>{editingId ? "Update Item" : "Add Item"}</Text>
      </Pressable>

      {loading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.name}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  itemRow: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});

export default ItemList;

import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ItemList from "./src/users/ItemList";
import { SafeAreaView, StyleSheet, Text } from "react-native";

if (__DEV__) {
  require("./ReactotronConfig");
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ItemList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default App;

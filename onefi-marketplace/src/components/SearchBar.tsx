import React from "react";
import {
  TextInput,
  StyleSheet,
} from "react-native";

export default function SearchBar() {
  return (
    <TextInput
      placeholder="Search ..."
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    margin: 16,
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
});
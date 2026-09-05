import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function EmptyState({
  title,
}: {
  title: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        No implementation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 40,
    borderRadius: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    color: "#666",
    textAlign: "center",
  },
});
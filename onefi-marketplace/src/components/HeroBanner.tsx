import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HeroBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>
        ✨ NO-COST EMIs
      </Text>

      <Text style={styles.title}>
        Shop today,
      </Text>

      <Text style={styles.title}>
        Pay later using
      </Text>

      <Text style={styles.title}>
        Mutual Funds.
      </Text>

      <Text style={styles.desc}>
        No credit score required.
      </Text>

      <Text style={styles.desc}>
        Backed by your investments.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5B21B6",
    padding: 24,
    paddingTop: 60,
    paddingBottom: 70,
  },

  badge: {
    color: "#fff",
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "800",
  },

  desc: {
    color: "#ddd",
    marginTop: 4,
  },
});
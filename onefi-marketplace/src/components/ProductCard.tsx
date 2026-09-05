import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Product } from "../types/products";
interface ProductCardProps { item: Product; onPress: () => void; }

export default function ProductCard({
  item,
  onPress,
}: ProductCardProps) {
  const lowestEmiPlan = item.emiPlans?.reduce( 
    (lowest, current) => {
      if (!lowest) return current;
      return current.monthlyEmi < lowest.monthlyEmi ? current : lowest;
    },
    item.emiPlans[0] );
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.price}>
        {item.price}
      </Text>

      <Text style={styles.emi}>
        EMI from ₹{lowestEmiPlan.monthlyEmi.toLocaleString("en-IN")}/mo
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 18,
  },

  image: {
    height: 180,
    width: "100%",
    borderRadius: 12,
  },

  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
  },

  price: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: "800",
  },

  emi: {
    marginTop: 4,
    color: "#666",
  },

  button: {
    marginTop: 14,
    backgroundColor: "#6D28D9",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
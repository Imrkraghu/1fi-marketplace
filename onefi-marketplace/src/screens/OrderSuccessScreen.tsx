import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

interface OrderSuccessScreenProps {
  navigation: any;
  route: {
    params?: {
      orderId?: string;
    };
  };
}

export default function OrderSuccessScreen({
  navigation,
  route,
}: OrderSuccessScreenProps) {
  const orderId =
    route?.params?.orderId || "1FI-" + Date.now();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.successCircle}>
          <Text style={styles.checkmark}>✓</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Order Successful!
        </Text>

        <Text style={styles.subtitle}>
          Your order has been placed successfully.
          {"\n"}
          We'll keep you updated about your delivery.
        </Text>

        {/* Order Card */}
        <View style={styles.orderCard}>
          <View style={styles.orderRow}>
            <Text style={styles.label}>
              Order ID
            </Text>

            <Text style={styles.value}>
              {orderId}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderRow}>
            <Text style={styles.label}>
              Status
            </Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                Confirmed
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderRow}>
            <Text style={styles.label}>
              Payment
            </Text>

            <Text style={styles.value}>
              EMI
            </Text>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            What's next?
          </Text>

          <View style={styles.step}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>
                1
              </Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Order confirmed
              </Text>

              <Text style={styles.stepText}>
                Your order is being processed.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>
                2
              </Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Order dispatched
              </Text>

              <Text style={styles.stepText}>
                You'll receive tracking details once
                your order ships.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>
                3
              </Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Delivered
              </Text>

              <Text style={styles.stepText}>
                Your product will be delivered to your
                registered address.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Marketplace");
          }}
        >
          <Text style={styles.primaryButtonText}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    alignItems: "center",
  },

  // Success
  successCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "700",
  },

  title: {
    marginTop: 24,
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    textAlign: "center",
  },

  // Order card
  orderCard: {
    width: "100%",
    marginTop: 28,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },

  orderRow: {
    minHeight: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    maxWidth: "60%",
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 8,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#DCFCE7",
  },

  statusText: {
    color: "#15803D",
    fontSize: 12,
    fontWeight: "700",
  },

  // What's next
  infoCard: {
    width: "100%",
    marginTop: 16,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 16,
  },

  step: {
    flexDirection: "row",
    marginBottom: 16,
  },

  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  stepNumber: {
    color: "#6D28D9",
    fontSize: 13,
    fontWeight: "800",
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  stepText: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    color: "#6B7280",
  },

  // Bottom
  bottomBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  primaryButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  secondaryButton: {
    height: 48,
    marginTop: 10,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: "#6D28D9",
    fontSize: 15,
    fontWeight: "700",
  },
});
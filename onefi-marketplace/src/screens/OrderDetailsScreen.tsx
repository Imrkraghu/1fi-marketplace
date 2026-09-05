import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";

import { Product } from "../types/products";
import { ProductVariant, EmiPlan } from "../types/products";

interface OrderSummaryScreenProps {
  route: {
    params: {
      product: Product;
      selectedVariant: ProductVariant;
      selectedEmiPlan: EmiPlan;
    };
  };
  navigation: any;
}

export default function OrderSummaryScreen({
  route,
  navigation,
}: OrderSummaryScreenProps) {
  const {
    product,
    selectedVariant,
    selectedEmiPlan,
  } = route.params;

  const [address, setAddress] = useState("");

  const productPrice =
    selectedVariant?.price || product.price;

  const handleContinue = () => {
    if (!address.trim()) {
      Alert.alert(
        "Address Required",
        "Please enter your delivery address before continuing."
      );
      return;
    }

    navigation.navigate("OrderSuccess", {
      orderId: `1FI-${Date.now()}`,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Order Summary
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Status */}
        <View style={styles.statusCard}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkText}>✓</Text>
          </View>

          <View style={styles.statusContent}>
            <Text style={styles.statusTitle}>
              Almost there!
            </Text>

            <Text style={styles.statusSubtitle}>
              Review your order and add your delivery
              address.
            </Text>
          </View>
        </View>

        {/* Product */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Product
          </Text>

          <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.productInfo}>
              <Text
                style={styles.productName}
                numberOfLines={2}
              >
                {product.name}
              </Text>

              {selectedVariant && (
                <Text style={styles.variantText}>
                  Variant: {selectedVariant.name}
                </Text>
              )}

              <Text style={styles.productPrice}>
                {productPrice}
              </Text>
            </View>
          </View>
        </View>

        {/* Order Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Order Details
          </Text>

          <View style={styles.detailsCard}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Product
              </Text>

              <Text
                style={styles.detailValue}
                numberOfLines={1}
              >
                {product.name}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Variant
              </Text>

              <Text style={styles.detailValue}>
                {selectedVariant.name}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Product Price
              </Text>

              <Text style={styles.detailValue}>
                {productPrice}
              </Text>
            </View>
          </View>
        </View>

        {/* EMI Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            EMI Details
          </Text>

          <View style={styles.emiCard}>
            <View style={styles.emiMain}>
              <Text style={styles.emiLabel}>
                Monthly EMI
              </Text>

              <Text style={styles.emiAmount}>
                ₹
                {selectedEmiPlan.monthlyEmi.toLocaleString(
                  "en-IN"
                )}
                /mo
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Tenure
              </Text>

              <Text style={styles.detailValue}>
                {selectedEmiPlan.tenure} months
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Interest Rate
              </Text>

              <Text
                style={[
                  styles.detailValue,
                  styles.greenText,
                ]}
              >
                {selectedEmiPlan.interestRate === 0
                  ? "0% Interest"
                  : `${selectedEmiPlan.interestRate}%`}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Total Payable
              </Text>

              <Text style={styles.detailValue}>
                ₹
                {selectedEmiPlan.totalPayable.toLocaleString(
                  "en-IN"
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Delivery Address
          </Text>

          <View style={styles.addressCard}>
            <Text style={styles.inputLabel}>
              Full Delivery Address
            </Text>

            <TextInput
              value={address}
              onChangeText={setAddress}
              placeholder="House no., street, area, city, state, PIN"
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              style={styles.addressInput}
            />

            <Text style={styles.addressHint}>
              Please provide the complete address where
              you want your order delivered.
            </Text>
          </View>
        </View>

        {/* Price Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Price Details
          </Text>

          <View style={styles.priceCard}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Product Price
              </Text>

              <Text style={styles.detailValue}>
                {productPrice}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>
                Delivery
              </Text>

              <Text style={styles.freeText}>
                FREE
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Total Payable
              </Text>

              <Text style={styles.totalAmount}>
                ₹
                {selectedEmiPlan.totalPayable.toLocaleString(
                  "en-IN"
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* Terms */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to the applicable
            terms and conditions of your purchase and EMI
            plan.
          </Text>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomAmount}>
          <Text style={styles.bottomLabel}>
            Monthly EMI
          </Text>

          <Text style={styles.bottomPrice}>
            ₹
            {selectedEmiPlan.monthlyEmi.toLocaleString(
              "en-IN"
            )}
            /mo
          </Text>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>
            Place Order
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
    paddingBottom: 20,
  },

  // Header
  topBar: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontSize: 32,
    lineHeight: 34,
    color: "#111",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  headerSpacer: {
    width: 42,
  },

  // Status
  statusCard: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#EDE9FE",
    flexDirection: "row",
    alignItems: "center",
  },

  checkCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  checkText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  statusContent: {
    flex: 1,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#5B21B6",
  },

  statusSubtitle: {
    marginTop: 3,
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },

  // Sections
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
    marginBottom: 12,
  },

  // Product
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
  },

  productImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 14,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  productImage: {
    width: "90%",
    height: "90%",
  },

  productInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  productName: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
  },

  variantText: {
    marginTop: 5,
    color: "#666",
    fontSize: 13,
  },

  productPrice: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  // Details
  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 34,
  },

  detailLabel: {
    color: "#6B7280",
    fontSize: 14,
    flex: 1,
  },

  detailValue: {
    color: "#111",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    maxWidth: "60%",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  greenText: {
    color: "#16A34A",
  },

  // EMI
  emiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  emiMain: {
    alignItems: "center",
    paddingBottom: 6,
  },

  emiLabel: {
    fontSize: 13,
    color: "#6B7280",
  },

  emiAmount: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: "800",
    color: "#5B21B6",
  },

  // Address
  addressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  addressInput: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#111827",
  },

  addressHint: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 17,
    color: "#9CA3AF",
  },

  // Price
  priceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
  },

  freeText: {
    color: "#16A34A",
    fontSize: 14,
    fontWeight: "800",
  },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  // Terms
  termsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  termsText: {
    color: "#888",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },

  // Bottom
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
  },

  bottomAmount: {
    flex: 1,
  },

  bottomLabel: {
    color: "#777",
    fontSize: 11,
  },

  bottomPrice: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  continueButton: {
    height: 52,
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },

  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
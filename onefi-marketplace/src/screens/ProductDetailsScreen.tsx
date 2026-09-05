import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Product } from "../types/products";

interface ProductDetailsScreenProps {
  route: {
    params: {
      product: Product;
    };
  };
  navigation: any;
}

export default function ProductDetailsScreen({
  route,
  navigation,
}: ProductDetailsScreenProps) {
  const { product } = route.params;

  // Selected variant ID
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants?.[0]?.id
  );

  // Get the selected variant object
  const selectedVariant = useMemo(() => {
    return product.variants?.find(
      (variant) => variant.id === selectedVariantId
    );
  }, [product.variants, selectedVariantId]);

  // EMI plans belonging ONLY to the selected variant
  const emiPlans = selectedVariant?.emiPlans ?? [];

  // Find lowest EMI for the selected variant
  const lowestEmiPlan = useMemo(() => {
    if (emiPlans.length === 0) {
      return null;
    }

    return emiPlans.reduce((lowest, current) =>
      current.monthlyEmi < lowest.monthlyEmi
        ? current
        : lowest
    );
  }, [emiPlans]);

  // Selected EMI
  const [selectedEmi, setSelectedEmi] = useState<string | undefined>(
    undefined
  );

  // Whenever the variant changes, automatically select
  // the lowest EMI belonging to the NEW variant.
  useEffect(() => {
    setSelectedEmi(lowestEmiPlan?.id);
  }, [lowestEmiPlan]);

  // Currently selected EMI plan
  const selectedEmiPlan = emiPlans.find(
    (plan) => plan.id === selectedEmi
  );

  // Change variant
  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
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
            Product Details
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Product Information */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            {product.name}
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>

          {/* Selected variant price */}
          <Text style={styles.price}>
            {selectedVariant?.price || product.price}
          </Text>

          {/* Lowest EMI for selected variant */}
          {lowestEmiPlan && (
            <View style={styles.emiHighlight}>
              <Text style={styles.emiLabel}>
                EMI starting from
              </Text>

              <Text style={styles.emiAmount}>
                ₹
                {lowestEmiPlan.monthlyEmi.toLocaleString(
                  "en-IN"
                )}
                /mo
              </Text>

              <Text style={styles.emiTenure}>
                Lowest monthly EMI •{" "}
                {lowestEmiPlan.tenure} months
              </Text>
            </View>
          )}
        </View>

        {/* Variants */}
        {product.variants?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Select Variant
            </Text>

            <View style={styles.variantContainer}>
              {product.variants.map((variant) => {
                const isSelected =
                  selectedVariantId === variant.id;

                return (
                  <TouchableOpacity
                    key={variant.id}
                    style={[
                      styles.variant,
                      isSelected &&
                        styles.selectedVariant,
                    ]}
                    onPress={() =>
                      handleVariantChange(variant.id)
                    }
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.variantText,
                        isSelected &&
                          styles.selectedVariantText,
                      ]}
                    >
                      {variant.name}
                    </Text>

                    <Text
                      style={[
                        styles.variantPrice,
                        isSelected &&
                          styles.selectedVariantText,
                      ]}
                    >
                      {variant.price}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* EMI Plans */}
        {emiPlans.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Choose EMI Plan
              </Text>

              <Text style={styles.sectionHint}>
                Flexible payment options
              </Text>
            </View>

            {emiPlans.map((plan) => {
              const isSelected =
                selectedEmi === plan.id;

              return (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.emiCard,
                    isSelected &&
                      styles.selectedEmiCard,
                  ]}
                  onPress={() =>
                    setSelectedEmi(plan.id)
                  }
                  activeOpacity={0.8}
                >
                  {/* Radio */}
                  <View style={styles.radioContainer}>
                    <View
                      style={[
                        styles.radio,
                        isSelected &&
                          styles.radioSelected,
                      ]}
                    >
                      {isSelected && (
                        <View
                          style={styles.radioDot}
                        />
                      )}
                    </View>
                  </View>

                  {/* EMI Details */}
                  <View style={styles.emiDetails}>
                    <Text style={styles.emiMonthly}>
                      ₹
                      {plan.monthlyEmi.toLocaleString(
                        "en-IN"
                      )}
                      /mo
                    </Text>

                    <Text style={styles.emiDuration}>
                      {plan.tenure} months
                    </Text>
                  </View>

                  {/* Interest / Total */}
                  <View style={styles.emiRight}>
                    <Text style={styles.interest}>
                      {plan.interestRate === 0
                        ? "0% Interest"
                        : `${plan.interestRate}% Interest`}
                    </Text>

                    <Text style={styles.total}>
                      Total ₹
                      {plan.totalPayable.toLocaleString(
                        "en-IN"
                      )}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* No EMI Plans */}
        {selectedVariant &&
          emiPlans.length === 0 && (
            <View style={styles.section}>
              <View style={styles.noEmiCard}>
                <Text style={styles.noEmiText}>
                  No EMI plans available for this variant.
                </Text>
              </View>
            </View>
          )}

        {/* Selected Plan Summary */}
        {selectedEmiPlan && (
          <View style={styles.summaryCard}>
            <View>
              <Text style={styles.summaryLabel}>
                Your EMI
              </Text>

              <Text style={styles.summaryEmi}>
                ₹
                {selectedEmiPlan.monthlyEmi.toLocaleString(
                  "en-IN"
                )}
                /mo
              </Text>
            </View>

            <View style={styles.summaryRight}>
              <Text style={styles.summaryLabel}>
                Tenure
              </Text>

              <Text style={styles.summaryValue}>
                {selectedEmiPlan.tenure} months
              </Text>
            </View>
          </View>
        )}

        {/* Bottom spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.buyButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("OrderSummary", {
              product,
              selectedVariant,
              selectedEmiPlan,
            })
          }}
        >
          <Text style={styles.buyButtonText}>
            Continue
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

  // Image
  imageContainer: {
    marginHorizontal: 16,
    height: 300,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  image: {
    width: "90%",
    height: "90%",
  },

  // Product information
  productInfo: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  productName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },

  price: {
    marginTop: 14,
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
  },

  // EMI Highlight
  emiHighlight: {
    marginTop: 14,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#EDE9FE",
  },

  emiLabel: {
    fontSize: 13,
    color: "#6D28D9",
    fontWeight: "600",
  },

  emiAmount: {
    marginTop: 3,
    fontSize: 22,
    fontWeight: "800",
    color: "#5B21B6",
  },

  emiTenure: {
    marginTop: 3,
    color: "#6B7280",
    fontSize: 12,
  },

  // Sections
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },

  sectionHeader: {
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  sectionHint: {
    marginTop: 3,
    color: "#777",
    fontSize: 13,
  },

  // Variants
  variantContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    gap: 10,
  },

  variant: {
    minWidth: 110,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  selectedVariant: {
    backgroundColor: "#6D28D9",
    borderColor: "#6D28D9",
  },

  variantText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },

  variantPrice: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
  },

  selectedVariantText: {
    color: "#FFFFFF",
  },

  // EMI
  emiCard: {
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
  },

  selectedEmiCard: {
    borderColor: "#6D28D9",
    backgroundColor: "#FAF8FF",
  },

  radioContainer: {
    marginRight: 12,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#BDBDBD",
    alignItems: "center",
    justifyContent: "center",
  },

  radioSelected: {
    borderColor: "#6D28D9",
  },

  radioDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#6D28D9",
  },

  emiDetails: {
    flex: 1,
  },

  emiMonthly: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111",
  },

  emiDuration: {
    marginTop: 3,
    color: "#666",
    fontSize: 13,
  },

  emiRight: {
    alignItems: "flex-end",
  },

  interest: {
    fontSize: 12,
    fontWeight: "700",
    color: "#16A34A",
  },

  total: {
    marginTop: 4,
    color: "#666",
    fontSize: 11,
  },

  // No EMI
  noEmiCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  noEmiText: {
    color: "#666",
    fontSize: 14,
  },

  // Summary
  summaryCard: {
    marginTop: 24,
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#111827",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryLabel: {
    color: "#9CA3AF",
    fontSize: 12,
  },

  summaryEmi: {
    marginTop: 4,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  summaryRight: {
    alignItems: "flex-end",
  },

  summaryValue: {
    marginTop: 4,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  // Bottom CTA
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
  },

  buyButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },

  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
import React, { useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";


import HeroBanner from "../components/HeroBanner";
import ShopTabs from "../components/MarketPlaceTabs";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import EmptyState from "../components/EmptyState";

import { products } from "../data/MarketPlaceData";

export default function MarketplaceScreen() {
  const [activeTab, setActiveTab] = useState("Marketplace");

  const showMarketplace = activeTab === "Marketplace";
  const showTopBrands = activeTab === "Top Brands";
  const showNearbyStores = activeTab === "Nearby Stores";
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={showMarketplace ? products : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item}  
        onPress={() => navigation.navigate("ProductDetails", { product: item, }) }/>}
        ListHeaderComponent={
          <>
            <HeroBanner />

            <ShopTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <SearchBar />

            <View style={styles.header}>
              <Text style={styles.title}>
                {activeTab}
              </Text>

              <Text style={styles.subtitle}>
                Top Picks For You
              </Text>
            </View>

            {showTopBrands && (
              <EmptyState title="Top Brands" />
            )}

            {showNearbyStores && (
              <EmptyState title="Nearby Stores" />
            )}
          </>
        }
        ListEmptyComponent={
          showMarketplace ? null : null
        }
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    paddingBottom: 24,
  },

  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111",
  },

  subtitle: {
    color: "#666",
    marginTop: 4,
    fontSize: 15,
  },
});
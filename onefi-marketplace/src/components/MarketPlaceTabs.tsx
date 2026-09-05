import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ShopTabs({
  activeTab,
  setActiveTab,
}: Props) {
  const tabs = [
    "Top Brands",
    "Nearby Stores",
    "Marketplace",
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab &&
              styles.active,
          ]}
          onPress={() =>
            setActiveTab(tab)
          }
        >
          <Text
            style={
              activeTab === tab
                ? styles.activeText
                : {}
            }
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 6,
    backgroundColor: "#EEE8FF",
    marginHorizontal: 16,
    marginTop: -30,
    borderRadius: 20,
  },

  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 16,
  },

  active: {
    backgroundColor: "#fff",
  },

  activeText: {
    color: "#6D28D9",
    fontWeight: "700",
  },
});
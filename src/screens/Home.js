import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { colors } from "../themes/colors";
import PlanetHeader from "../components/PlanetHeader";
import { PLANET_LIST } from "../components/data/planet-list";
import Text from "../components/text/Text";
import { spacing } from "../themes/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        data={PLANET_LIST}
        renderItem={({ item }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details");
              }}
              style={styles.planetItem}
            >
              <View style={styles.planetLeft}>
                <View
                  style={[styles.circle, { backgroundColor: color }]}
                ></View>
                <Text style={styles.planetText}>{name}</Text>
              </View>
              <AntDesign name="right" size={20} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.balck,
  },
  planetItem: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  planetLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: spacing[3],
  },
  planetText: {
    textTransform: "uppercase",
  },
  separator: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
});

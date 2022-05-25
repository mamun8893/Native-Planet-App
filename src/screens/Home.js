import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../themes/colors";
import PlanetHeader from "../components/PlanetHeader";
import { PLANET_LIST } from "../components/data/planet-list";
import Text from "../components/text/Text";
import { spacing } from "../themes/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);
  const searchFilter = (text) => {
    const filterList = PLANET_LIST.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setList(filterList);
  };
  const RenderItem = ({ item }) => {
    const { name, color } = item;
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", { planet: item });
        }}
        style={styles.planetItem}
      >
        <View style={styles.planetLeft}>
          <View style={[styles.circle, { backgroundColor: color }]}></View>
          <Text style={styles.planetText}>{name}</Text>
        </View>
        <AntDesign name="right" size={20} color="white" />
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        style={styles.searchInput}
        placeholder="Type The Planet Name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        data={list}
        renderItem={RenderItem}
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
  searchInput: {
    paddingVertical: spacing[2],
    borderBottomColor: colors.white,
    borderWidth: 1,
    marginHorizontal: spacing[4],
    marginVertical: spacing[5],
    marginBottom: spacing[7],
    color: colors.white,
  },
});

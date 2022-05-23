import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/Text";
import { colors } from "../themes/colors";
import PlanetHeader from "../components/PlanetHeader";

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <Text>Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.balck,
  },
});

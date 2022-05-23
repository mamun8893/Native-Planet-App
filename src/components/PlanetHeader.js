import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./text/Text";
import { spacing } from "../themes/spacing";
import { colors } from "../themes/colors";

export default function PlanetHeader() {
  return (
    <View style={styles.planetHeader}>
      <Text preset="h2">The Planets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  planetHeader: {
    paddingHorizontal: spacing[4],
    padding: spacing[3],
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
});

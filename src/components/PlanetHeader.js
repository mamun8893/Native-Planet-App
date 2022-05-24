import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./text/Text";
import { spacing } from "../themes/spacing";
import { colors } from "../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backIon }) {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.planetHeader}>
      {backIon && (
        <Pressable onPress={handleBack}>
          <Ionicons
            style={styles.backIcon}
            name="arrow-back-sharp"
            size={20}
            color="white"
          />
        </Pressable>
      )}

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
    flexDirection: "row",
    alignItems: "center",
  },

  backIcon: {
    marginRight: spacing[3],
  },
});

import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import Text from "../components/text/Text";
import { colors } from "../themes/colors";
import PlanetHeader from "../components/PlanetHeader";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";
import { spacing } from "../themes/spacing";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text style={styles.secTitle}>{title}</Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    color,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;

      default:
        break;
    }
  };

  const pressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backIon={true} />
      <ScrollView>
        <View>
          <View style={styles.planetImage}>{renderImage(name)}</View>
          <View style={styles.planetInfo}>
            <Text preset="h1" style={styles.planetName}>
              {name}
            </Text>
            <Text style={styles.planetDescription}>{description}</Text>
            <Pressable onPress={pressLink} style={styles.planetSource}>
              <Text>Source:</Text>
              <Text style={styles.wikipidia}>Wikipidia</Text>
            </Pressable>
          </View>
          <PlanetSection title="Rotation Time" value={rotationTime} />
          <PlanetSection title="revolution Time" value={revolutionTime} />
          <PlanetSection title="radius" value={radius} />
          <PlanetSection title="avgTemp" value={avgTemp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.balck,
  },
  planetImage: {
    flex: 1,
    alignItems: "center",
    marginTop: spacing[7],
  },
  planetInfo: {
    marginTop: spacing[7],
    paddingHorizontal: spacing[4],
    alignItems: "center",
  },
  planetName: {
    textTransform: "uppercase",
    marginBottom: spacing[3],
  },
  planetDescription: {
    textAlign: "center",
    lineHeight: 24,
  },
  planetSource: {
    flexDirection: "row",
    marginTop: spacing[4],
    marginBottom: spacing[5],
  },
  wikipidia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: spacing[1],
  },
  planetSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    marginHorizontal: spacing[4],
    marginBottom: spacing[3],
    borderColor: colors.white,
    borderWidth: 1,
    alignItems: "center",
  },
  secTitle: {
    textTransform: "uppercase",
    fontSize: 12,
  },
});

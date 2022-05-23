import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/Text";
import { colors } from "./src/themes/colors";
import { spacing } from "./src/themes/spacing";
import { typography } from "./src/themes/typography";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    AntonioMedium: require("./assets/fonts/Antonio-Medium.ttf"),
    spartanRegular: require("./assets/fonts/Spartan-Regular.ttf"),
    spartanBold: require("./assets/fonts/Spartan-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.balck,
  },
});

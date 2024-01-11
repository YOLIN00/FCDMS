import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Appearance,
} from "react-native";

// import { AppearanceProvider } from "react-native-appearance";

// function AppContainer() {
//   return (
//     <AppearanceProvider>
//       <App />
//     </AppearanceProvider>
//   );
// }

export default function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  console.log(colorScheme);
  return (
    <View style={styles.container}>
      <Text>Welcome to FCDMS!</Text>
      <StatusBar
        style="auto"
        backgroundColor={isDarkMode ? "#000000" : "#ffffff"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
});

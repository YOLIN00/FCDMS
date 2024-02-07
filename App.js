import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Appearance,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Signin from "./Screens/Signin";

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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Signin />
       </SafeAreaView>
     </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffff00",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

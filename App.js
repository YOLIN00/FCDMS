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
import { useState, useEffect } from "react";
import { app, getAuth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import OrganizationList from "./Screens/OrganizationList";
import CampaignList from "./Screens/CampaignList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signout from "./Screens/Signout";

const Stack = createNativeStackNavigator();

// import { AppearanceProvider } from "react-native-appearance";

// function AppContainer() {
//   return (
//     <AppearanceProvider>
//       <App />
//     </AppearanceProvider>
//   );
// }
const firebaseAuth = getAuth(app);
export default function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("FROM APP.js..........", user);
      setUser(user);
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);
  console.log(colorScheme);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {user == null ? (
              <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            ) : (
              <>
                <Stack.Screen name="Organization list" component={Signout} />
                {/* <Stack.Screen name="Signup" component={Signup} /> */}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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
import { useState, useEffect, useLayoutEffect } from "react";
import { app, getAuth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import OrganizationList from "./Screens/OrganizationList";
import CampaignList from "./Screens/CampaignList";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signout from "./Screens/Signout";
import Campaign from "./Screens/Campaign";
import Collections from "./Screens/Collections";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Collections" component={Collections} />
      <Drawer.Screen name="Organizations" component={OrganizationList} />
      <Drawer.Screen name="Campaigns" component={CampaignList} />
      <Drawer.Screen name="Signout" component={Signout} />
      <Drawer.Screen name="Campaign" component={Campaign} />
    </Drawer.Navigator>
  );
}

// function AppContainer() {
//   return (
//     <AppearanceProvider>
//       <App />
//     </AppearanceProvider>
//   );
// }
const firebaseAuth = getAuth(app);
export default function App() {
  // const colorScheme = useColorScheme();
  // console.log(colorScheme);
  // const isDarkMode = colorScheme === "dark";
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("FROM APP.js..........", user);
      setUser(user);
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user == null ? (
              <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            ) : (
              <>
                <Stack.Screen name="Drawer" component={DrawerNavigator} />
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

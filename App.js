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
import { onAuthStateChanged, db } from "firebase/auth";
import { get, ref, child, getDatabase } from "firebase/database";
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
import Payment from "./Screens/Payment";
import CreateCampaign from "./Screens/CreateCampaign";
import AddRecipient from "./Screens/AddRecipient";
import Donations from "./Screens/Donations";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="CampaignCreate" component={CreateCampaign} /> */}
      {/* <Drawer.Screen name="Payment" component={Payment} /> */}
      <Drawer.Screen name="Donations" component={Donations} />
      <Drawer.Screen name="AddRecipient" component={AddRecipient} />
      <Drawer.Screen name="Organizations" component={OrganizationList} />
      <Drawer.Screen name="Collections" component={Collections} />
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
  const [userInfo, setUserInfo] = useState(null);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("FROM APP.js..........", user?.uid);
      setUser(user);
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (user) {
      get(child(ref(getDatabase()), `users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            // setUserInfo(snapshot.val());
          } else {
            console.log("No data available");
            // setUserInfo(null);
          }
        })
        .catch((error) => {
          console.error(error);
          // setUserInfo(null);
        });
    } else {
      // setUserInfo(null);
    }
  }, [user]);
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

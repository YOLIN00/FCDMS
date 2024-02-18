import { View, Text } from "react-native";
import { app, getAuth } from "../config/firebase";
import { signOut } from "firebase/auth";
const firebaseAuth = getAuth(app);
export default () => {
  console.log("Sign out\n", firebaseAuth);
  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>{firebaseAuth.currentUser.uid}</Text>
      <Text>{firebaseAuth.currentUser.email}</Text>
      <Text onPress={handleSignOut}>Sign out</Text>
    </View>
  );
};

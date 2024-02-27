import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { app, getAuth } from "../config/firebase";
import { useRoute, useNavigation } from "@react-navigation/native";
const firebaseAuth = getAuth(app);
const baseUrl = "https://sslpayment.vercel.app/";
export default () => {
  const router = useRoute();
  const navigator = useNavigation();
  const { campaignId, amount } = router.params;
  // const { id: campaignId } = Math.floor(Math.random() * 1000);
  // const amount = Math.floor(Math.random() * 1000);
  const handleNavigationStateChange = (navState) => {
    // Do something with the navigation state
    // console.log("Navigation state changed:", navState);
    if (
      navState.url.startsWith("https://sslpayment.vercel.app/payment/success")
    ) {
      navigator.navigate("Collections", { id: campaignId });
    }
  };
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `${baseUrl}/payment/init/${firebaseAuth.currentUser.uid}/${campaignId}/${amount}`,
        }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

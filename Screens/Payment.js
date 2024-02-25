import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { app, getAuth } from "../config/firebase";
const firebaseAuth = getAuth(app);
const baseUrl = "https://sslpayment.vercel.app/";
export default () => {
  const campaignId = Math.floor(Math.random() * 1000);
  const amount = Math.floor(Math.random() * 1000);
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `${baseUrl}/payment/init/${firebaseAuth.currentUser.uid}/${campaignId}/${amount}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInputBase,
  TextInput,
  Animated,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TypingAnimation from "../components/TypeAnimation";
import { useEffect, useState, useRef } from "react";

import { app, getAuth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const firebaseAuth = getAuth(app);
export default ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const translateY = useRef(new Animated.Value(500)).current;

  const handleSignin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        phone + "@app.com",
        password
      );
      console.log("User ....", user.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={style.container}>
      <LinearGradient style={style.background} colors={["#4568DC", "#B06AB3"]}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 150,
          }}
        >
          <Text style={{ ...style.text, letterSpacing: 10 }}>FCDS</Text>
        </View>
        <Animated.View style={[style.main, { transform: [{ translateY }] }]}>
          <TypingAnimation style={style.header} text="Welcome Back!" />
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Phone:</Text>
            <TextInput
              style={style.input}
              keyboardType="phone-pad"
              Value={phone}
              placeholder="+8801234567890"
              onChangeText={(val) => setPhone(val)}
            ></TextInput>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Password:</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={{
                  ...style.input,
                  flex: 1,
                  paddingRight: 28,
                  // underlineColorAndroid: "transparent",
                }}
                secureTextEntry={!passwordShow}
                Value={password}
                placeholder="Your Password"
                onChangeText={(val) => setPassword(val)}
              ></TextInput>
              {passwordShow ? (
                <Pressable
                  onPress={() => {
                    setPasswordShow((prevState) => !prevState);
                  }}
                >
                  <Icon
                    name="eye-off-outline"
                    size={20}
                    color="black"
                    style={style.passwordIcon}
                  />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    setPasswordShow((prevState) => !prevState);
                  }}
                >
                  <Icon
                    name="eye-off"
                    size={20}
                    color="black"
                    style={style.passwordIcon}
                  />
                </Pressable>
              )}
            </View>
          </View>
          <View style={{ flexDirection: "row-reverse", paddingTop: 10 }}>
            <Text style={{ fontSize: 12, color: "blue" }}>
              Forget Password?
            </Text>
          </View>
          <Pressable onPress={handleSignin}>
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  paddingVertical: 5,
                  color: "white",
                  letterSpacing: 2,
                }}
              >
                Login
              </Text>
            </View>
          </Pressable>
          <View style={{ paddingTop: 50 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={style.hr}></View>
              <View>
                <Text style={{ color: "black", paddingHorizontal: 10 }}>
                  or continue with
                </Text>
              </View>
              <View style={style.hr}></View>
            </View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={style.hr}></View>
              <View style={{width:"30%"}}>
                <Text style={{width:"100%",color: "black" }}>OR</Text>
                <Icon name="google" size={40} color="yellow" />
              </View>
              <View style={style.hr}></View>
            </View> */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Icon name="google" size={60} color="#fbbc05" />
              <Icon name="facebook" size={60} color="#0866ff" />
              <Icon name="twitter" size={60} color="#3baef3" />
            </View>
          </View>
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Text>
              Don't have an account?{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => navigation.replace("Signup")}
              >
                SignUp
              </Text>
            </Text>
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  background: {
    flex: 1,
    // paddingTop: 100,

    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // height: 600,
  },
  main: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 15,
    padding: 15,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 30,
    color: "#ffff00",
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
    paddingTop: 30,
    paddingBottom: 40,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 5,
    letterSpacing: 2,
  },
  inputText: {
    fontSize: 15,
    paddingVertical: 5,
    letterSpacing: 2,
  },
  inputContainer: {},
  hr: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    // width: "auto",
    // width: "40%",
    height: 10,
    marginBottom: 10, // Optional spacing
  },
  passwordIcon: {
    position: "absolute",
    right: 5,
    top: "10%",
  },
});

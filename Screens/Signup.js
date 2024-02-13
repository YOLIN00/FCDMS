import {
  View,
  Text,
  StyleSheet,
  TextInputBase,
  TextInput,
  Animated,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TypingAnimation from "../components/TypeAnimation";
import { useEffect, useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
} from "bd-divisions-to-unions";
import { auth } from "../config/firebase";

function capitalizeEveryWord(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

const Divisions = getAllDivision("en");
const Districts = getAllDistrict("en");
const Upazillas = getAllUpazila("en");
const Unions = getAllUnion("en");

const AllAreas = [
  { value: 0, title: "Bangladesh" },
  ...Divisions.map((item) => {
    return { ...item, title: capitalizeEveryWord(item.title + " Divison") };
  }),
  ...Object.values(Districts)
    .flat()
    .map((item) => {
      return { ...item, title: capitalizeEveryWord(item.title + " District") };
    }),
  ...Object.values(Upazillas)
    .flat()
    .map((item) => {
      return { ...item, title: capitalizeEveryWord(item.title + " Upazilla") };
    }),
  ...Object.values(Unions)
    .flat()
    .map((item) => {
      return { ...item, title: capitalizeEveryWord(item.title + " Union") };
    }),
];

// console.log(AllAreas[AllAreas.length - 1], AllAreas.length);

const accountType = [
  { label: "User", value: "user" },
  { label: "Organization", value: "organization" },
];

export default ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("user");

  const [type, setType] = useState(null);
  const [isTypeFocus, setIsTypeFocus] = useState(false);

  const [area, setArea] = useState(null);
  const [isAreaFocus, setIsAreaFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        console.log("Signed up", userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("Error...", error);
      });
  };

  const translateY = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
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
        {/* <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="height"
          keyboardVerticalOffset={20}
        > */}
        <Animated.ScrollView
          style={[style.main, { transform: [{ translateY }] }]}
          //   ref={elementRef}
          keyboardDismissMode={"on-drag"}
        >
          <TypingAnimation
            style={{ ...style.header, letterSpacing: 3 }}
            text="Sign Up!!"
          />
          {/* <KeyboardAvoidingView
            behavior="height"
            keyboardVerticalOffset={20}
          > */}
          <View style={{ ...style.inputContainer }}>
            <Text style={style.inputText}>Account Type:</Text>

            <Dropdown
              style={[style.input, isTypeFocus && { borderColor: "blue" }]}
              placeholderStyle={{ letterSpacing: 2 }}
              selectedTextStyle={{ letterSpacing: 2 }}
              // inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              data={accountType}
              // search
              // maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isTypeFocus ? "Select item" : "..."}
              // searchPlaceholder="Search..."
              value={type}
              onFocus={() => setType(true)}
              onBlur={() => setIsTypeFocus(false)}
              onChange={(item) => {
                setType(item.value);
                setIsTypeFocus(false);
              }}
            />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Fullname:</Text>
            <TextInput style={style.input} keyboardType="default"></TextInput>
          </View>
          {type == "organization" && (
            <>
              <View style={style.inputContainer}>
                <Text style={style.inputText}>License No:</Text>
                <TextInput
                  style={style.input}
                  keyboardType="default"
                ></TextInput>
              </View>
              <View style={style.inputContainer}>
                <Text style={style.inputText}>Service Area:</Text>
                <Dropdown
                  style={[style.input]}
                  placeholderStyle={{ letterSpacing: 2 }}
                  selectedTextStyle={{ letterSpacing: 2 }}
                  // inputSearchStyle={styles.inputSearchStyle}
                  // iconStyle={styles.iconStyle}
                  data={AllAreas}
                  search
                  // maxHeight={300}
                  labelField="title"
                  valueField="value"
                  placeholder={!isAreaFocus ? "Select area" : "..."}
                  searchPlaceholder="Search..."
                  value={area}
                  onFocus={() => setArea(true)}
                  onBlur={() => setIsAreaFocus(false)}
                  onChange={(item) => {
                    setArea(item.value);
                    setIsAreaFocus(false);
                  }}
                />
              </View>
            </>
          )}

          <View style={style.inputContainer}>
            <Text style={style.inputText}>Address:</Text>
            <TextInput style={style.input} keyboardType="numeric"></TextInput>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Email:</Text>
            <TextInput
              style={style.input}
              keyboardType="email-address"
            ></TextInput>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Phone:</Text>
            <TextInput style={style.input} keyboardType="phone-pad"></TextInput>
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

          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={handleSignup}
          >
            <Text
              style={{
                fontSize: 20,
                paddingVertical: 5,
                color: "white",
                letterSpacing: 2,
              }}
            >
              Sign Up
            </Text>
          </View>

          <View
            style={{ alignItems: "center", paddingTop: 30, paddingBottom: 50 }}
          >
            <Text>
              Have an account?{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => navigation.replace("Signin")}
              >
                Signin
              </Text>
            </Text>
          </View>
          {/* </KeyboardAvoidingView> */}
        </Animated.ScrollView>
        {/* </KeyboardAvoidingView> */}
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
    paddingHorizontal: 15,
    // padding: 15,
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

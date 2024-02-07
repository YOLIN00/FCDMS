import { View, Text, StyleSheet, TextInputBase, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TypingAnimation from "../components/TypeAnimation";
export default () => {
  return (
    <View style={style.container}>
      

      <LinearGradient style={style.background} colors={["#4568DC", "#B06AB3"]}>
      <View style={{ justifyContent: "center", alignItems: "center" ,height:150}}>
          <Text style={{...style.text,letterSpacing:10}}>FCDS</Text>
        </View>
        <View style={style.main}>
          <TypingAnimation style={style.header}/>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Phone:</Text>
            <TextInput style={style.input} keyboardType="phone-pad"></TextInput>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputText}>Password:</Text>
            <TextInput style={style.input} secureTextEntry={true}></TextInput>
          </View>
          <View style={{ flexDirection: "row-reverse", paddingTop: 10 }}>
            <Text style={{ fontSize: 12, color: "blue" }}>
              Forget Password?
            </Text>
          </View>
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
              <Text style={{ textDecorationLine: "underline" }}>SignUp</Text>
            </Text>
          </View>
        </View>
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
});

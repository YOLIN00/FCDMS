import { View, Text, StyleSheet, Pressable } from "react-native";

export default () => {
  return (
    <View style={style.constainer}>
      <View style={style.cardContainer}>
        <View style={style.card}>
          <View>
            <Text style={style.text}>Location</Text>
            <Text style={style.text}>No. of people will get help</Text>
            <Text style={style.text}>Target to Collect Fund</Text>
            <Text style={style.text}>Fund raised</Text>
            <Text style={style.text}>Status</Text>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={style.text}> Sylhet</Text>
            <Text style={style.text}> 55</Text>
            <Text style={style.text}> 40,00$</Text>
            <Text style={style.text}> 20,00$</Text>
            <Text style={style.text}> Active</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          paddingVertical: 5,
          marginVertical: 40,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          Want to donate? Press me!!
        </Text>
      </View>

      <Pressable style={style.boxContainer}>
        <View style={style.box}>
          <Text style={style.boxText}>Collections</Text>
        </View>
        <View style={style.box}>
          <Text style={style.boxText}>Donations</Text>
        </View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    alignContent: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  cardContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderBlockColor: "black",
    backgroundColor: "rgba(0,0,0,.75)",
  },
  card: {
    flexDirection: "row",
    padding: 15,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  boxContainer: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-around",
    // backgroundColor:"red"
  },
  box: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  boxText: {
    color: "white",
  },
});

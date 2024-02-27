import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigator = useNavigation();
  const router = useRoute();
  const { campaign } = router.params;

  const [amount, setAmount] = useState("");

  return (
    <View style={style.constainer}>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View
          style={{ flex: 1, justifyContent: "center", paddingHorizontal: 40 }}
        >
          <Text style={{ fontSize: 30, fontWeight: "500" }}>Enter Amount:</Text>
          <TextInput
            style={{
              fontSize: 30,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              paddingHorizontal: 5,
            }}
            value={amount}
            onChangeText={setAmount}
          />
          <Button
            onPress={() => {
              navigator.navigate("Payment", {
                campaignId: campaign.id,
                amount,
              });
              setIsModalVisible(false);
              setAmount("");
            }}
            title="Continue"
            color="black"
          />
        </View>
      </Modal>
      <View style={style.cardContainer}>
        <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
          <View style={style.header}>
            <Text style={style.headerText}>{campaign.name}</Text>
          </View>
          <View style={style.description}>
            <Text style={style.descriptionText}>{campaign.description}</Text>
          </View>
        </View>
        <View style={style.card}>
          <View>
            <Text style={style.text}>Location</Text>
            <Text style={style.text}>No. of people will get help</Text>
            <Text style={style.text}>Target to Collect Fund</Text>
            <Text style={style.text}>Fund raised</Text>
            <Text style={style.text}>Status</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
            <Text style={style.text}>: </Text>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text style={style.text}> {campaign.location}</Text>
            <Text style={style.text}> {campaign.numberOfPeople}</Text>
            <Text style={style.text}> {campaign.target} ৳</Text>
            <Text style={style.text}> 20,00 ৳</Text>
            <Text style={style.text}>
              {" "}
              {campaign.active ? "Active" : "Inactive"}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "black",
          alignItems: "center",
          paddingVertical: 5,
          marginVertical: 40,
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          Want to donate? Press me!!
        </Text>
      </Pressable>

      <Pressable style={style.boxContainer}>
        <Pressable
          style={style.box}
          onPress={() => {
            navigator.navigate("Collections", { id: campaign.id });
          }}
        >
          <Text style={style.boxText}>Collections</Text>
        </Pressable>
        <Pressable
          style={style.box}
          onPress={() => {
            navigator.navigate("Donations", { id: campaign.id });
          }}
        >
          <Text style={style.boxText}>Donations</Text>
        </Pressable>
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
  headerText: {
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  descriptionText: {
    fontSize: 20,
    color: "white",
  },
  card: {
    flexDirection: "row",
    padding: 15,
  },
  text: {
    fontSize: 16,
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

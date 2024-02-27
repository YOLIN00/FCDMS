import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Switch,
  Pressable,
  ToastAndroid,
} from "react-native";
import { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import { Dropdown } from "react-native-element-dropdown";
import { set, ref } from "firebase/database";
import { db } from "../config/firebase";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

const groupList = [
  { label: "Help Poor", value: "helpPoor" },
  { label: "Sylhet Flood", value: "sylhetFlood" },
];

export default ({ isModalVisible, setIsModalVisible, org }) => {
  const [isEnabled, setIsEnabled] = useState(true); //active
  const [group, setGroup] = useState("");
  const [isGroupFocus, setIsGroupFocus] = useState(false);
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [targetFund, setTargetFund] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    if (
      !name ||
      !group ||
      !numberOfPeople ||
      !targetFund ||
      !description ||
      !location
    ) {
      return ToastAndroid.showWithGravity(
        "Fill all require fields",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    try {
      await set(ref(db, `campaigns/${uuid()}`), {
        org,
        name,
        location,
        description,
        target: targetFund,
        numberOfPeople,
        group,
        active: true,
      });
      ToastAndroid.showWithGravity(
        "Campgaign Created Successfully",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsModalVisible(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Craete Campaign</Text>
          <View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(val) => setName(val)}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>People will get fund</Text>
              <TextInput
                style={styles.input}
                value={numberOfPeople}
                onChangeText={setNumberOfPeople}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Location</Text>
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Target fund</Text>
              <TextInput
                style={styles.input}
                value={targetFund}
                onChangeText={setTargetFund}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Description</Text>
              <TextInput
                style={styles.input}
                multiline={true}
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Group</Text>
              <Dropdown
                style={[styles.input, isGroupFocus && { borderColor: "blue" }]}
                placeholderStyle={{ letterSpacing: 2 }}
                selectedTextStyle={{ letterSpacing: 2 }}
                // inputSearchStyle={styles.inputSearchStyle}
                // iconStyle={styles.iconStyle}
                data={groupList}
                // search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isGroupFocus ? "Select item" : "..."}
                // searchPlaceholder="Search..."
                value={group}
                onFocus={() => setGroup(true)}
                onBlur={() => setIsGroupFocus(false)}
                onChange={(item) => {
                  setGroup(item.value);
                  setIsGroupFocus(false);
                }}
              />
            </View>
            <View
              style={[
                styles.inputBox,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Text
                style={[styles.inputText, { position: "relative", top: 10 }]}
              >
                Active
              </Text>
              <Switch
                trackColor={{ false: "#000", true: "#000" }}
                thumbColor={isEnabled ? "#000" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
              />
            </View>
          </View>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  modalContainer: {
    marginHorizontal: 50,
    marginTop: 50,
  },
  modalHeader: {
    fontSize: 30,
    fontWeight: "500",
    paddingBottom: 20,
  },
  button: {
    width: 300,
    backgroundColor: "rgba(0,0,0,.7)",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: { color: "white" },
  inputBox: {
    paddingBottom: 15,
  },
  inputText: {
    fontSize: 15,
    paddingBottom: 5,
  },
  input: {
    fontSize: 12,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

import { View, Text, StyleSheet, Modal, TextInput, Switch } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>Start a Campaign</Text>
      </View>
      <Modal>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Craete Campaign</Text>
          <View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Name</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>People will get fund</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Location</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Target fund</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Description</Text>
              <TextInput style={styles.input} multiline={true} />
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
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  box: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 10,
  },
  boxText: {
    color: "white",
    fontSize: 20,
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
    backgroundColor: "black",
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

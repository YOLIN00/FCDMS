import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Reciepient</Text>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>NID/BIN:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Amount/Quantity:</Text>
        <TextInput style={styles.input} multiline={true} />
      </View>
      <View style={styles.submitBox}>
        <Text style={styles.submitText}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 20,
  },
  inputBox: {
    paddingBottom: 15,
  },
  inputText: {
    fontSize: 20,
    paddingBottom: 5,
  },
  input: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  submitBox: {
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    paddingVertical: 10,
    fontSize: 15,
  },
});

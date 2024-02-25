import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor="white"
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  searchBox: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  search: {
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  table: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  tableTitle: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  tableHeader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  tableHeaderText: {
    fontWeight: "bold",
    color: "white",
  },
  tableRow: {
    // width: "11%",
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingVertical: 5,
    // backgroundColor: "pink",
    paddingHorizontal: 10,
  },
  tableRowText: {
    alignSelf: "flex-start",
    color: "white",
  },
});

import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  return (
    <View style={styles.container}>
      <Text>Donations</Text>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Add Reciepient</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="white"
      />
      <View style={styles.table}>
        <Text style={styles.tableTitle}>
          Transaction list for all collection :
        </Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { width: "50%" }]}>
            NID/BIN
          </Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>
            Amount/Quantity
          </Text>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>Date</Text>
        </View>
        {[0, 0.1, 2, 300, 4, 5].map((item) => {
          return (
            <View style={styles.tableRow}>
              <Text style={{ ...styles.tableRowText, width: "50%" }}>
                {9847894 * item}
              </Text>
              <Text style={[styles.tableRowText, { width: "30%" }]}>50</Text>
              <Text style={[styles.tableRowText, { width: "20%" }]}>
                12-3-34
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    color: "black",
    fontSize: 20,
    padding: 5,
  },
  titleBox: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  searchInput: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: 20,
    fontSize: 15,
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

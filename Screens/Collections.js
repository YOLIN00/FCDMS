import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  return (
    <View>
      <View style={styles.searchBox}>
        <TextInput style={styles.search} placeholder="Search" />
      </View>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>
          Transaction list for all collection :
        </Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { width: "35%" }]}>TrxId</Text>
          <Text style={[styles.tableHeaderText, { width: "22%" }]}>Amount</Text>
          <Text style={[styles.tableHeaderText, { width: "18%" }]}>Method</Text>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>Date</Text>
        </View>
        {[0, 0.1, 2, 300, 4, 5].map((item) => {
          return (
            <View style={styles.tableRow}>
              <Text style={{ ...styles.tableRowText, width: "35%" }}>
                {9847894 * item}
              </Text>
              <Text
                style={[
                  styles.tableRowText,
                  { width: "22%", backgroundColor: "red" },
                ]}
              >
                50
              </Text>
              <Text
                style={[
                  styles.tableRowText,
                  { width: "18%", backgroundColor: "green" },
                ]}
              >
                bkash
              </Text>
              <Text
                style={[
                  styles.tableRowText,
                  { width: "20%", backgroundColor: "blue" },
                ]}
              >
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
  },
  searchBox: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  search: {
    borderColor: "black",
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
  },
  tableHeader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  tableHeaderText: {
    fontWeight: "bold",
  },
  tableRow: {
    // width: "11%",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
    paddingVertical: 5,
    backgroundColor: "pink",
    paddingHorizontal: 10,
  },
  tableRowText: {
    alignSelf: "flex-start",
  },
});

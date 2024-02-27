import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default () => {
  const router = useRoute();
  const { id } = router.params; //campaignid
  console.log("collections  ", id);
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>
          Transaction list for all collection :
        </Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { width: "40%" }]}>Name</Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>Amount</Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>Date</Text>
        </View>
        {[0, 0.1, 2, 300, 4, 5].map((item) => {
          return (
            <View style={styles.tableRow}>
              <Text style={{ ...styles.tableRowText, width: "40%" }}>
                {9847894 * item}
              </Text>
              <Text style={[styles.tableRowText, { width: "30%" }]}>50</Text>
              <Text style={[styles.tableRowText, { width: "30%" }]}>
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

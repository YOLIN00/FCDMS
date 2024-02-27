import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { UserContext } from "../context/UserContext";
import { useRoute } from "@react-navigation/native";

export default () => {
  const { userInfo } = useContext(UserContext);
  const [data, setData] = useState([1, 2, 22, 100, 45, 40000, 3, 4, 5]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);

  const router = useRoute();
  const { id } = router.params;
  console.log("donations ",id)
  return (
    <View style={styles.container}>
      {userInfo.type == "organization" && (
        <View style={styles.titleBox}>
          <Text style={styles.title}>Add Reciepient</Text>
        </View>
      )}

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="white"
        value={searchText}
        onChangeText={(val) => {
          setSearchText(val);
          const filter = [];
          data.map((item) => {
            console.log(item.toString(), item.toString().includes(val));
            if (item.toString().includes(val)) {
              filter.push(item);
            }
          });
          setFilteredData([...filter]);
        }}
      />
      <View style={styles.table}>
        <Text style={styles.tableTitle}>
          Transaction list for all Donations :
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
        {filteredData.map((item) => {
          return (
            <View style={styles.tableRow}>
              <Text style={{ ...styles.tableRowText, width: "50%" }}>
                {item}
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
    marginTop: 20,
    alignItems: "center",
  },
  searchInput: {
    color: "white",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: 20,
    fontSize: 15,
    marginTop: 20,
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

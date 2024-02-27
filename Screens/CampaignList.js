import { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CreateCampaign from "./CreateCampaign";
import { UserContext } from "../context/UserContext";
import { child, get, ref, getDatabase } from "firebase/database";

export default () => {
  const route = useRoute();
  const { id: orgId } = route.params;
  const navigator = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userInfo } = useContext(UserContext);

  const [campaignListData, setCampaignListData] = useState([]);
  // const [filterCampaignListData, setFilterCampaignListData] = useState([]);
  const campaignssRef = child(ref(getDatabase()), "campaigns");
  useEffect(() => {
    get(campaignssRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const campaigns = [];
          // console.log(snapshot);
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().org == orgId) {
              campaigns.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
              });
            }
          });

          // // Do something with organizationUsers array
          // console.log("Organization users:", organizationUsers);
          setCampaignListData(campaigns);
        } else {
          console.log("No users found");
          setCampaignListData([]);
        }
      })
      .catch((error) => {
        console.error(error);
        setCampaignListData([]);
      });
  }, []);

  // console.log(route.params?.id);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userInfo.type == "organization" && (
        <Pressable style={styles.box} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.boxText}>Start a Campaign</Text>
        </Pressable>
      )}
      <CreateCampaign
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        org={route.params?.id}
      />
      {campaignListData.map((item) => {
        return (
          <Pressable
            onPress={() => {
              navigator.navigate("Campaign", { campaign: item });
            }}
          >
            <View style={styles.card}>
              <View style={{ paddingBottom: 20 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text>Location</Text>
                  <Text>No. of people will get help</Text>
                  <Text>Target to Collect Fund</Text>
                  <Text>Fund raised</Text>
                  <Text>Status</Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text>: </Text>
                  <Text>: </Text>
                  <Text>: </Text>
                  <Text>: </Text>
                  <Text>: </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text> Sylhet</Text>
                  <Text> {item.numberOfPeople}</Text>
                  <Text> {item.target} ৳</Text>
                  <Text> 20,00 ৳</Text>
                  <Text> {item.active ? "Active" : "Inactive"}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 25,
    // paddingBottom: 0,
  },
  card: {
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
    padding: 15,
    marginBottom: 25,
  },
  box: {
    backgroundColor: "rgba(0,0,0,.8)",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  boxText: {
    color: "white",
    fontSize: 20,
  },
});

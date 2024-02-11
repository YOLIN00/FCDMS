import { Text, View, StyleSheet,ScrollView } from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default () => {
  return (
    <ScrollView style={styles.container}>
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <View style={styles.card}>
            <View style={styles.upperCard}>
              <View>
                <Image
                  style={styles.image}
                  source={require("../assets/images/ngo.png")}
                  // placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                ></Image>
              </View>

              <View style={styles.info}>
                <View style={{ flexGrow: 1 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      letterSpacing: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Organization Name
                  </Text>
                </View>
                <View
                  style={{
                    // flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // backgroundColor: "blue",
                    // alignItems:"flex-start"
                    alignItems: "flex-end",
                    paddingTop: 5,
                  }}
                >
                  <View>
                    <Text>Since 2021</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialIcons
                      name="location-pin"
                      size={20}
                      color="black"
                    />
                    <Text>Service Area</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.descriptionBox}>
              <Text style={styles.description}>
                In Expo Image, the transition prop provides a way to add
                animation effects while loading or swapping images. It accepts a
                numerical value in milliseconds that represents the duration of
                the transition. Here's how it works:
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",

    padding: 20,
  },
  image: {
    // flex: 1,
    width: 100,
    height: 50,
    // transform: scale(0.5),
    backgroundColor: "#0553",
  },
  card: {
    // flex:1,
    // backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
    marginBottom: 20,
  },
  upperCard: {
    // flex: 1,
    flexDirection: "row",
  },
  info: {
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 20,
    // flex: 1,
    // maxHeight: 300,
    flexGrow: 1,
    paddingLeft: 10,
    // backgroundColor: "yellow",
  },
  nameBox: {},
  nameText: {},
  infoLower: { flexDirection: "row", alignItems: "space-between" },
  sinceBox: {},
  sinceText: {},
  serviceAreaBox: {},
  serviceAreaText: {},
  descriptionBox: {
    paddingTop: 10,
  },
  description: {
    letterSpacing: 1.5,
  },
});

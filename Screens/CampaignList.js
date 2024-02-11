import { View, StyleSheet, Text, ScrollView } from "react-native";

export default () => {
  return (
    <ScrollView contentContainerStyle ={styles.container}>
      {[1, 2, 3, 4, 5].map(() => {
        return (
          <View style={styles.card}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontSize: 20 }}>Campaign Name</Text>
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
                <Text> 55</Text>
                <Text> 40,00$</Text>
                <Text> 20,00$</Text>
                <Text> Active</Text>
              </View>
            </View>
          </View>
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
});

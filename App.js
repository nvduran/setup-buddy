import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(useDeviceOrientation());
  //destructuring orientation obj
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("booped");

  return (
    <View style={styles1.container}>
      {/* //green background view */}
      <View style={styles1.container}>
        <View style={styles2.container}></View>
      </View>

      <View style={styles1.container}>
        <View style={styles2.container}></View>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View
    //     style={{
    //       backgroundColor: "#028000",
    //       width: "100%",
    //       flex: 1,
    //       height: "10%",
    //     }}
    //   >
    //     <Text style={styles1.container}>Title</Text>
    //   </View>

    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       flex: 1,
    //       // if landscape: 10%, otherwise: 20%
    //       height: landscape ? "10%" : "20%",
    //     }}
    //   >
    //     <Text numberOfLines={1} onPress={handlePress}>
    //       boop
    //     </Text>
    //   </View>

    //   <TouchableHighlight onPress={() => console.log("img tapped")}>
    //     <Image
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableHighlight>
    //   <Button
    //     color="#03CD00"
    //     title="click"
    //     onPress={() =>
    //       Alert.alert("Cool title", "Cool message", [
    //         { text: "btn 1", onPress: () => console.log("btn 1") },
    //         { text: "btn 2", onPress: () => console.log("btn 2") },
    //       ])
    //     }
    //   />

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    // padding top if android, otheriwse 0
    // paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#028000",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,

    // paddingTop: Platform.OS === "ios" ? "10%" : "10%",
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 0.2,
    color: "white",
    backgroundColor: "#FFC300",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    width: "80%",
    paddingTop: Platform.OS === "ios" ? "10%" : "10%",
  },
});

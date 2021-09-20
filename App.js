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
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          // if landscape: 10%, otherwise: 20%
          height: landscape ? "10%" : "20%",
        }}
      ></View>

      <Text numberOfLines={1} onPress={handlePress}>
        boop
      </Text>
      <TouchableHighlight onPress={() => console.log("img tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="#03CD00"
        title="click"
        onPress={() =>
          Alert.alert("Cool title", "Cool message", [
            { text: "btn 1", onPress: () => console.log("btn 1") },
            { text: "btn 2", onPress: () => console.log("btn 2") },
          ])
        }
      />

      <StatusBar style="auto" />
    </SafeAreaView>
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

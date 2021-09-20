import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function App() {
  const handlePress = () => console.log("booped");
  return (
    <SafeAreaView style={styles.container}>
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
        color="red"
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
    justifyContent: "center",
    // padding top if android, otheriwse 0
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

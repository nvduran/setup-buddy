import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React, { useState } from "react";
import Tip from "./components/Tip";
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
  // console.log(useDeviceOrientation());

  const [mode, setMode] = useState(null);
  const [topText, setText] = useState("I am experiencing:");
  var usArr = [
    "Front toe out: Increase",
    "Front anti-roll bar: Soften",
    "Front springs: Soften",
    "Rear springs: Stiffen",
    "Front tire pressure: Lower",
    "Rear anti-roll bar: Stiffen",
    "Front wing: Increase",
    "Rear wing: Decrease",
    "Brake balance: Rearward",
  ];
  var osArr = [
    "Front toe out: Decrease",
    "Front anti-roll bar: Stiffen",
    "Front springs: Stiffen",
    "Rear springs: Soften",
    "Rear tire pressure: Lower",
    "Front wing: Decrease",
    "Rear wing: Increase",
  ];
  const [testArr, setArr] = useState(usArr);

  const handleUS = () => {
    setMode("Understeer");
    setText("Understeer");
  };

  const handleOS = () => {
    setMode("Oversteer");
    setText("Oversteer");
    styles.mainButton;
  };

  const mainMenu = () => {
    setMode(null);
    setText("I am experiencing:");
  };

  return (
    <View style={styles.greenBack}>
      <View>
        <Text style={styles.topText}>{topText}</Text>
      </View>
      <View style={mode != null ? styles.hidden : styles.mainButton}>
        <Text
          style={styles.btnText}
          numberOfLines={1}
          onPress={() => handleUS()}
        >
          Understeer
        </Text>
      </View>

      <View style={mode != null ? styles.hidden : styles.mainButton}>
        <Text
          style={styles.btnText}
          numberOfLines={1}
          onPress={() => handleOS()}
        >
          Oversteer
        </Text>
      </View>

      <View style={mode === "Understeer" ? styles.tips : styles.hidden}>
        {usArr.map((item, index) => {
          return (
            <View key={index}>
              <Tip text={item} />
            </View>
          );
        })}
      </View>

      <View style={mode === "Oversteer" ? styles.tips : styles.hidden}>
        {osArr.map((item, index) => {
          return (
            <View key={index}>
              <Tip text={item} />
            </View>
          );
        })}
      </View>

      <View style={mode === null ? styles.hidden : styles.exitButton}>
        <Text
          style={styles.btnText}
          numberOfLines={1}
          onPress={() => mainMenu()}
        >
          Exit
        </Text>
      </View>
    </View>
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
  greenBack: {
    flex: 1,
    color: "white",
    backgroundColor: "#028000",
    textAlign: "center",
    justifyContent: "space-around",
    fontSize: 30,
  },
  mainButton: {
    flex: 0.2,
    color: "white",
    backgroundColor: "#3DA934",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    width: "80%",
  },
  btnText: {
    // flex: 1,
    color: "white",
    // backgroundColor: "#FFC300",
    // textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    width: "80%",
  },
  topText: {
    color: "white",
    fontSize: 30,
    paddingLeft: 20,
  },
  hidden: {
    display: "none",
  },
  exitButton: {
    // position: "absolute",
    // bottom: 20,
    // left: 10,
    // width: 100,
    // paddingTop: 500,
  },
  tips: {
    color: "white",
    fontSize: 30,
    // alignSelf: "center",
  },
});

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
  ScrollView,
} from "react-native";

export default function App() {
  // console.log(useDeviceOrientation());

  const [mode, setMode] = useState(null);
  const [topText, setText] = useState("Issue:");
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
    "Rear anti-roll bar: Soften",
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
    setText("Issue:");
  };

  return (
    <View style={styles.greenBack}>
      <View>
        <Text style={styles.topLogo}>Setup Buddy</Text>
      </View>
      <View>
        <Text style={styles.topText}>{topText}</Text>
      </View>
      <TouchableOpacity
        style={mode != null ? styles.hidden : styles.mainButton}
        onPress={() => handleUS()}
      >
        <Text style={styles.btnText} numberOfLines={1}>
          Understeer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={mode != null ? styles.hidden : styles.mainButton}
        onPress={() => handleOS()}
      >
        <Text style={styles.btnText} numberOfLines={1}>
          Oversteer
        </Text>
      </TouchableOpacity>

      <ScrollView style={mode === "Understeer" ? styles.tips : styles.hidden}>
        {usArr.map((item, index) => {
          return (
            <View key={index}>
              <Tip text={item} />
            </View>
          );
        })}
      </ScrollView>

      <ScrollView style={mode === "Oversteer" ? styles.tips : styles.hidden}>
        {osArr.map((item, index) => {
          return (
            <View key={index}>
              <Tip text={item} />
            </View>
          );
        })}
      </ScrollView>

      <View style={mode === null ? styles.hidden : styles.exitButtonContainer}>
        <Text
          style={styles.exitButtonText}
          numberOfLines={1}
          onPress={() => mainMenu()}
        >
          Back
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
    // justifyContent: "space-around",
    fontSize: 30,
  },
  mainButton: {
    // flex: 0.2,
    color: "white",
    backgroundColor: "#3DA934",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 24,
    width: "60%",
    maxHeight: "8%",
    minHeight: "8%",
    borderRadius: 100,
    marginTop: "30%",
  },
  btnText: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 24,
  },
  topText: {
    // fontFamily: "Calibri",
    color: "white",
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  hidden: {
    display: "none",
  },
  exitButtonContainer: {
    paddingBottom: 20,
    justifyContent: "center",
  },
  exitButtonText: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
  },
  tips: {
    color: "white",
    fontSize: 30,
    // alignSelf: "center",
  },
  topLogo: {
    color: "white",
    fontSize: 60,
    paddingLeft: 20,
    paddingTop: 80,
  },
});

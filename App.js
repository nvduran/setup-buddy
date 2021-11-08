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
  Modal,
  Pressable,
} from "react-native";

export default function App() {
  const [mode, setMode] = useState(null);
  const [topText, setText] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  var usArr2 = [
    "Rear springs: Stiffen",
    "Front wing: Increase",
    "Rear wing: Decrease",
    "Rear anti-roll bar: Stiffen",
    "Brake balance: Rearward",
    "Front springs: Soften",
    "Front anti-roll bar: Soften",
    "Front tire pressure: Lower",
    "Front toe out: Increase",
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

  var osArr2 = [
    "Rear springs: Soften",
    "Front wing: Decrease",
    "Rear wing: Increase",
    "Rear anti-roll bar: Soften",
    "Brake balance: Forward",
    "Front springs: Stiffen",
    "Front anti-roll bar: Stiffen",
    "Front toe out: Decrease",
  ];

  const [Arr, setArr] = useState(usArr);

  const handleUS = () => {
    setMode("Understeer");
    setText("Understeer");
    setArr(usArr);
  };

  const handleOS = () => {
    setMode("Oversteer");
    setText("Oversteer");
    setArr(osArr);
    styles.mainButton;
  };

  const handleHL = () => {
    setModalVisible(false);
    let modeVar;
    if (mode === "Understeer") {
      modeVar = usArr;
    } else {
      modeVar = osArr;
    }
    setArr(modeVar);
  };

  const handleCN = () => {
    let modeVar;
    setModalVisible(false);
    if (mode === "Understeer") {
      modeVar = usArr2;
    } else if (mode === "Oversteer") {
      modeVar = osArr2;
    }
    setArr(modeVar);
  };

  const mainMenu = () => {
    setMode(null);
    setText(null);
  };

  return (
    <View style={styles.greenBack}>
      <View style={styles.logoContainer}>
        <Text style={styles.topLogoText}>Setup Buddy</Text>
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

      {/* Filter modal */}
      <View>
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterBtnText} onPress={() => handleHL()}>
                  High to Low Speed
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterBtnText} onPress={() => handleCN()}>
                  Corner Entry to Exit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <ScrollView style={mode ? styles.tips : styles.hidden}>
        {Arr.map((item, index) => {
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
        <Text
          style={styles.filterButtonText}
          numberOfLines={1}
          onPress={() => setModalVisible(true)}
        >
          Filter
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
  },
  greenBack: {
    flex: 1,
    color: "white",
    backgroundColor: "#186A3B",
    fontSize: 30,
  },
  mainButton: {
    color: "white",
    backgroundColor: "#239B56",
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
    fontFamily: Platform.OS === "android" ? "sans-serif-thin" : "Futura",
  },
  topText: {
    color: "white",
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  hidden: {
    display: "none",
  },
  exitButtonContainer: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  exitButtonText: {
    color: "white",
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Futura",
    fontSize: 24,
    paddingLeft: 20,
  },
  tips: {
    color: "white",
    fontSize: 30,
  },
  topLogoText: {
    color: "white",
    fontSize: 56,
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Futura",
    letterSpacing: 0,
    paddingLeft: 10,
    paddingBottom: 0,
    paddingTop: Platform.OS === "android" ? 40 : 80,
  },
  logoContainer: {
    backgroundColor: "#186A3B",
  },
  filterButtonText: {
    color: "white",
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Futura",
    fontSize: 24,
    paddingLeft: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#186A3B",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  filterButton: {
    backgroundColor: "#239B56",
    borderRadius: 10,
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  filterBtnText: {
    color: "white",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Futura",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

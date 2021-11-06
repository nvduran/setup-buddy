import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tip = (props) => {
  return (
    <View style={styles.tipContainer}>
      <Text style={styles.tipText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tipContainer: {
    backgroundColor: "#239B56",
    borderRadius: 4,
    padding: 8,
    margin: 12,
  },
  tipText: {
    color: "white",
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "sans-serif-thin" : "Futura",
  },
});

export default Tip;

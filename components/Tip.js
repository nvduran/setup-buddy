import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tip = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tipText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tipText: { color: "white", alignSelf: "center" },
});

export default Tip;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Logo = ({ image, text }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.logo} />
    <Text style={styles.txt}>{text}</Text>
  </View>
);
export default Logo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.05)",
    shadowOffset: {
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    alignItems: "center",
    marginHorizontal: 8,
  },
  logo: {
    height: 36,
    width: 36,
    resizeMode: "contain",
  },
  txt: {
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 8,
  },
});

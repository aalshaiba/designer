import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = (props) => (
  <View style={styles.container}>
    <View style={styles.cover}>
      <Image
        source={require("../assets/background2.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Styled Component</Text>
    </View>
    <View style={styles.content}>
      <Image source={require("../assets/logo-react.png")} style={styles.logo} />
      <View style={styles.wrapper}>
        <Text style={styles.caption}>React Native</Text>
        <Text style={styles.subTitle}>5 of 12 sections</Text>
      </View>
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 10,
  },
  content: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  logo: {
    width: 44,
    height: 44,
  },
  caption: {
    color: "#3c4560",
    fontSize: 20,
    fontWeight: "600",
  },
  subTitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15,
    textTransform: "uppercase",
    marginTop: 4,
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    width: 170,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "white",
    height: 280,
    width: 315,
    borderRadius: 14,
    marginLeft: 20,
    marginTop: 20,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 15,
  },
});

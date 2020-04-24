import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Image source={require("./assets/avatar.jpg")} style={styles.avatar} />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.name}>Abdulla</Text>
      </View>
      <Text style={styles.subTitle}>Continue Learning</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
  },
  title: {
    fontSize: 16,
    color: "#b8bece",
    fontWeight: "500",
  },
  name: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold",
  },
  titleBar: {
    width: "100%",
    marginTop: 50,
    paddingLeft: 80,
  },
  avatar: {
    height: 44,
    width: 44,
    backgroundColor: "black",
    marginLeft: 20,
    borderRadius: 22,
    position: "absolute",
    top: 0,
    left: 0,
  },
  subTitle: {
    color: "#b8b3ce",
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 50,
    textTransform: "uppercase",
  },
});

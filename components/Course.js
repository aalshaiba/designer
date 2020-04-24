import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Course = ({ image, logo, subtitle, title, avatar, caption, author }) => (
  <View style={styles.container}>
    <View style={styles.cover}>
      <Image source={image} style={styles.image} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.content}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  </View>
);
export default Course;

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 335,
    borderRadius: 14,
    marginHorizontal: 20,
    backgroundColor: "white",
    shadowOpacity: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginVertical: 10,
  },
  cover: {
    height: 260,
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 48,
    height: 48,
    position: "absolute",
    top: 90,
    left: "50%",
    marginLeft: -24,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    marginTop: 4,
    width: 170,
    marginBottom: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
    textTransform: "uppercase",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 62,
    justifyContent: "center",
    height: 75,
  },
  avatar: {
    width: 32,
    height: 32,
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: 16,
  },
  caption: {
    fontSize: 14,
    color: "#3c4560",
    fontWeight: "500",
    maxWidth: 260,
  },
  author: {
    fontSize: 13,
    color: "#b8bece",
    fontWeight: "500",
    marginTop: 4,
  },
});

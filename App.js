import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleBar}>
            <Image
              source={require("./assets/avatar.jpg")}
              style={styles.avatar}
            />
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.name}>Abdulla</Text>
            <View style={{ position: "absolute", right: 20, top: 5 }}>
              <NotificationIcon />
            </View>
          </View>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((item, index) => (
              <Logo key={index} image={item.image} text={item.text} />
            ))}
          </ScrollView>
          <Text style={styles.subTitle}>Continue Learning</Text>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((item, index) => (
              <Card
                title={item.title}
                image={item.image}
                key={index}
                logo={item.logo}
                caption={item.caption}
                subtitle={item.subtitle}
              />
            ))}
          </ScrollView>
          <Text style={styles.subTitle}>Popular Courses</Text>
          {courses.map((course, index) => (
            <Course
              key={index}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
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
    marginTop: 20,
    textTransform: "uppercase",
  },
});

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Frame X",
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "sketch",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];

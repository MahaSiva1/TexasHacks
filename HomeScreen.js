import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import { theme } from "../core/theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Green Header Section */}
      <View style={styles.header}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.titleText}>AgriVision</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Plant Icon */}
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        {/* Options Section */}
        <Text style={styles.optionsText}>OPTIONS:</Text>

        {/* Button Group */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("UploadScreen")}
          >
            <Text style={styles.buttonText}>UPLOAD FILE</Text>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color={theme.colors.primary} 
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("UploadScreen")}
          >
            <Text style={styles.buttonText}>TAKE PICTURE</Text>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color={theme.colors.primary} 
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("StartScreen")}
          >
            <Text style={styles.buttonText}>VIEW INSIGHTS</Text>
            <MaterialCommunityIcons 
              name="chevron-right" 
              size={24} 
              color={theme.colors.primary} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="camera" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="chart-bar" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="account" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  homeText: {
    color: "#fff",
    fontSize: 16,
  },
  titleText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  optionsText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonGroup: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
});

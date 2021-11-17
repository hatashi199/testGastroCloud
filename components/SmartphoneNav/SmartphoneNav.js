import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LI, UL } from "@expo/html-elements";
import { StyleSheet } from "react-native";

const SmartphoneNav = ({ navigation }) => {
  return (
    <UL style={styles.list}>
      <LI>
        <MaterialCommunityIcons
          name="rocket-launch-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("launches")}
        />
      </LI>
      <LI>
        <Ionicons
          name="logo-react"
          size={24}
          color="black"
          onPress={() => navigation.navigate("history")}
        />
      </LI>
    </UL>
  );
};

const styles = StyleSheet.create({
  list: {
    position: "fixed",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: `${1}rem`,
    paddingBottom: `${1}rem`,
    backgroundColor: "#f2f2f2",
  },
});

export default SmartphoneNav;

// @generated: @expo/next-adapter@2.1.52
import React from "react";
import "@expo/match-media";
import MainContentButton from "../components/MainContentButton/MainContentButton";
import Launches from "./launches";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "./history";
import LaunchInfo from "./launches/launchInfo";

const Home = ({ navigation }) => {
  return (
    <>
      <MainContentButton navigation={navigation} />
    </>
  );
};

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="launches" component={Launches} />
        <Stack.Screen name="launchInfo" component={LaunchInfo} />
        <Stack.Screen name="history" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;

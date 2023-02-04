// import {createSwitchNavigator } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopTabNavigator from "./TopTabNavigator";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ReikiScreen from "../screens/ReikiScreen";
import YogaScreen from "../screens/YogaScreen";
import MeditationScreen from "../screens/MeditationScreen";
import TherapistScreen from "../screens/TherapistScreen";
import CreatePost from "../screens/CreatePost";
const Stack = createNativeStackNavigator();

function SwitchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TopTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reiki"
        component={ReikiScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Yoga"
        component={YogaScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Meditation"
        component={MeditationScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Therapist"
        component={TherapistScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Create Post"
        component={CreatePost}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export default SwitchNavigator;

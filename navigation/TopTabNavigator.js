import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import LetsHealScreen from "../screens/LetsHealScreen";
import StoriesScreen from "../screens/PrashantStoriesScreen";
import CompanionScreen from "../screens/CompanionScreen";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    //<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Stories" component={StoriesScreen} />
        <Tab.Screen name="LetsHeal" component={LetsHealScreen} />
        <Tab.Screen name="Companion" component={CompanionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
   // </NavigationContainer>
  );
}
export default TopTabNavigator;

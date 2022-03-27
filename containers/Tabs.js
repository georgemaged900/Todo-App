import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import icons from "../constants/icons";
import RegisterationPage from "../Screens/RegisterationPage";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../constants/theme";
import {
  Ionicons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
});

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          backgroundColor: "yellow",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home-sharp"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Booking"
        component={Home} // when you click the user icon , it goes to home page/component
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="book-open"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Home} // when you click the user icon , it goes to home page/component
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubbles"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={Home} // when you click the user icon , it goes to home page/component
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DSSocialProfile from "./components/DSSocialProfile";
import COMPOSER from "./components/COMPOSER";
import ChiTitRoom from "./components/ChiTitRoom";
import DSNhn from "./components/DSNhn";
import Calendar from "./components/Calendar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tipusok from "./Tipusok"
import Konyv from "./Konyv"

function Tipuslap({ navigation }) {
  return (
   <Tipusok />
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <Konyv />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Könyvek">
        <Drawer.Screen name="Tipusok" component={Tipuslap} />
        <Drawer.Screen name="Könyvek" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

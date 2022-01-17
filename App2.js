import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Konyvek from './Konyvek';
import Konyv from './Konyv';


function Konyvlap({ navigation }) {
  return (
    <Konyvek/>
  );
}


function Konyvlapok({ navigation }) {
  return (
    <Konyv/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Könyv">
        <Drawer.Screen name="Könyvek" component={Konyvlap} />
        <Drawer.Screen name="Könyv" component={Konyvlapok} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Konyvek from './konyvek';
import Konyv from './konyv'
import Konyvek from './konyvek';

function Konyvlap({ navigation }) {
  return (
    <Konyvek/>
  );
}


function konyv({ navigation }) {
  return (
    <konyv/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Konyvek" component={Konyvek} />
        <Drawer.Screen name="konyv" component={konyv} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
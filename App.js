import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { AppProvider } from './src/context/AppContext';

import Aleatorios from './src/componentes/aleatorios';
import Capturados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Pokemon from './src/componentes/pokemon';
import Usuario from './src/componentes/usuario';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} options={{ headerShown: false }} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function CapturadosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capturados" component={Capturados} options={{ headerShown: false }} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lista" component={ListaStack} options={{ headerShown: false }} />
          <Tab.Screen name="Aleatorios" component={Aleatorios} />
          <Tab.Screen name="Capturados" component={CapturadosStack} options={{ headerShown: false }} />
          <Tab.Screen name="Favoritos" component={FavoritosStack} options={{ headerShown: false }} />
          <Tab.Screen name="Usuario" component={Usuario} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
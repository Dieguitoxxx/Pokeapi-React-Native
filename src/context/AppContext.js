import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const [capturados, setCapturados] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const favs = await AsyncStorage.getItem('favoritos');
        if (favs) setFavoritos(JSON.parse(favs));

        const caps = await AsyncStorage.getItem('capturados');
        if (caps) setCapturados(JSON.parse(caps));
      } catch (error) {
        console.log('Error al cargar datos:', error);
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    AsyncStorage.setItem('capturados', JSON.stringify(capturados));
  }, [capturados]);

  return (
    <AppContext.Provider value={{ favoritos, setFavoritos, capturados, setCapturados }}>
      {children}
    </AppContext.Provider>
  );
}
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Pokemon({ route }) {
  const { name } = route.params || {};
  const { favoritos, setFavoritos } = useContext(AppContext);
  
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Verificamos si este Pokémon ya está en favoritos
  const esFavorito = favoritos.some((fav) => fav.name === name);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setCargando(false);
        })
        .catch((error) => {
          console.error('Error al cargar detalle del Pokémon:', error);
          setCargando(false);
        });
    }
  }, [name]);

  const toggleFavorito = () => {
    if (esFavorito) {
      // Si ya está, lo filtramos para sacarlo
      setFavoritos(favoritos.filter((fav) => fav.name !== name));
    } else {
      // Si no está, lo agregamos
      setFavoritos([...favoritos, { name }]);
    }
  };

  if (cargando) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#e74c3c" />
        <Text>Cargando detalles...</Text>
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.loader}>
        <Text>No se pudo cargar la información del Pokémon.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nombre}>{pokemon.name.toUpperCase()}</Text>
      
      {pokemon.sprites && pokemon.sprites.front_default && (
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.imagen}
        />
      )}

      <TouchableOpacity 
        style={[styles.btnFavorito, esFavorito ? styles.btnQuitar : styles.btnAgregar]} 
        onPress={toggleFavorito}
      >
        <Text style={styles.btnTexto}>
          {esFavorito ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
        </Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Altura: {pokemon.height}</Text>
        <Text style={styles.infoText}>Peso: {pokemon.weight}</Text>
        <Text style={styles.infoText}>
          Tipo(s): {pokemon.types.map((t) => t.type.name).join(', ')}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  btnFavorito: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  btnAgregar: {
    backgroundColor: '#2ecc71',
  },
  btnQuitar: {
    backgroundColor: '#e74c3c',
  },
  btnTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});
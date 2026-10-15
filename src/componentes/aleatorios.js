import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Aleatorios({ navigation }) {
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(false);

  const obtenerPokemonAleatorio = () => {
    setCargando(true);
    // La PokéAPI tiene más de 1000 Pokémon, elegiremos un ID al azar entre 1 y 150 (primera generación)
    const idAleatorio = Math.floor(Math.random() * 150) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener Pokémon aleatorio:', error);
        setCargando(false);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnAleatorio} onPress={obtenerPokemonAleatorio}>
        <Text style={styles.btnTexto}>¡Sortear Pokémon Aleatorio! 🎲</Text>
      </TouchableOpacity>

      {cargando && <ActivityIndicator size="large" color="#e74c3c" style={{ marginTop: 20 }} />}

      {pokemon && !cargando && (
        <View style={styles.card}>
          <Text style={styles.nombre}>{pokemon.name.toUpperCase()}</Text>
          {pokemon.sprites && pokemon.sprites.front_default && (
            <Image source={{ uri: pokemon.sprites.front_default }} style={styles.imagen} />
          )}
          <TouchableOpacity
            style={styles.btnDetalle}
            onPress={() => navigation.navigate('Lista', { screen: 'Pokemon', params: { name: pokemon.name } })}
          >
            <Text style={styles.btnDetalleTexto}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  btnAleatorio: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  btnTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    elevation: 3,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  imagen: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },
  btnDetalle: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  btnDetalleTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
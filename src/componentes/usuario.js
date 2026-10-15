import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Usuario() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>JT</Text>
        </View>
        <Text style={styles.nombre}>Entrenador Pokémon</Text>
        <Text style={styles.info}>Ciudad: Bogotá</Text>
        <Text style={styles.info}>Especialidad: Desarrollo Software</Text>
        <Text style={styles.estado}>¡Listo para atraparlos a todos!</Text>
      </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  estado: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
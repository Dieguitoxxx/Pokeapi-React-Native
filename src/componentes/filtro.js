
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Filtro({ onTipoChange = () => {} }) {
  const tipos = [
    'All',
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'stellar',
    'shadow',
    'unknown',
  ];

  return (
    <View style={styles.filtroContainer}>
      {tipos.map((unTipo) => (
        <TouchableOpacity
          key={unTipo}
          style={styles.button}
          onPress={() => onTipoChange(unTipo)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            {unTipo === 'All' ? 'Todos' : unTipo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filtroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

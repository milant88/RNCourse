import { View, StyleSheet, Text } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.title}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 8,
        marginVertical: 8,
        backgroundColor: 'purple',
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    goalText: {
        fontSize: 16,
        color: '#fff',
    }
});
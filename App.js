import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    }

  return (
      <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
              <Button title='Add Goal' onPress={addGoalHandler}/>
          </View>
          <View style={styles.goalsContainer}>
              <ScrollView>
                  {courseGoals.map((goal, index) => (
                      <View key={index} style={styles.goalItem}>
                          <Text style={styles.goalText}>{goal}</Text>
                      </View>
                  ))}
              </ScrollView>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
    },
    goalsContainer: {
        flex: 5,
    },
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
import React, {useState} from 'react';
import {TextInput, StyleSheet, Button, View} from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoal('');
    }
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
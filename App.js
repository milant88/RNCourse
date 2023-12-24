import { useState } from 'react';
import {Button, StyleSheet, View, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(courseGoals) {
        setCourseGoals(currentGoals => [...currentGoals, {text: courseGoals, id: Math.random().toString()}]);
    }

  return (
      <View style={styles.appContainer}>
          <GoalInput onAddGoal={addGoalHandler}/>
          <View style={styles.goalsContainer}>
              <FlatList data={courseGoals} renderItem={ idemData => {
                  return (
                      <GoalItem title={idemData.item.text}/>
                  );
              }}  alwaysBounceVertical={false} keyExtractor={(item, index) => item.id}/>
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
    goalsContainer: {
        flex: 5,
    }
});
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Task, NewTask, DetailsTask } from "../pages";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ headerTintColor: "#219ebc", title: "Tarefas" }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{ headerTintColor: "#219ebc", title: "Adicionar tarefa" }}
        />
        <Stack.Screen
          name="DetailsTask"
          component={DetailsTask}
          options={{ headerTintColor: "#219ebc", title: "Detalhes da tarefa" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

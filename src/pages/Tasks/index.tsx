import React from "react";
import styles from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useGetTasks } from "../../hooks/useGetTasks";
import { useDeleteTask } from "../../hooks/useDeleteTask";

interface Props {
  navigation: NavigationProp<any, any>;
}

export function Task({ navigation }: Props) {
  const { tasks, handleGetTasks } = useGetTasks();
  const { handleDeleteTask } = useDeleteTask();

  const handleDelete = (id: string) =>
    handleDeleteTask(id).then(() => handleGetTasks());

  return (
    <View style={styles.container}>
      {tasks && tasks.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={(task) => {
            return (
              <View style={styles.tasks}>
                <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => handleDelete(task.item.id)}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    color="#219ebc"
                  ></FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.description}
                  onPress={() =>
                    navigation.navigate("DetailsTask", {
                      id: task.item.id,
                      description: task.item.description,
                    })
                  }
                >
                  {task.item.description}
                </Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noTasks}>
          <Text>Nenhuma tarefa adiciona ainda.</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

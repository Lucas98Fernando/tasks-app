import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { database } from "../../config/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any, any>;
}

export function Task({ navigation }: Props) {
  const [tasks, setTasks] = useState<DocumentData[]>([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const tasksCollection = collection(database, "tasks");
    const tasksSnapshot = await getDocs(tasksCollection);
    const tasksList: DocumentData[] = [];
    tasksSnapshot.docs.map((doc) => {
      tasksList.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setTasks(tasksList);
  }

  async function handleDeleteTask(id: string) {
    await deleteDoc(doc(database, "tasks", id));
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={(task) => {
          return (
            <View style={styles.tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => handleDeleteTask(task.item.id)}
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
                  navigation.navigate("Details", {
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
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

import { useFocusEffect } from "@react-navigation/native";
import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import { useCallback, useState } from "react";
import { database } from "../config/firebase";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState<DocumentData[]>([]);

  useFocusEffect(
    useCallback(() => {
      handleGetTasks();
    }, [])
  );

  const handleGetTasks = async () => {
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
  };

  return { tasks, setTasks, handleGetTasks };
};

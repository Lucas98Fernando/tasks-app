import { Task } from "./../types/task";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore/lite";
import { database } from "../config/firebase";
import {
  RouteProp,
  useRoute,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";
import Toast from "react-native-toast-message";

export const useUpdateTask = () => {
  const route = useRoute<RouteProp<{ params: Task }>>();
  const navigation = useNavigation<NavigationProp<any>>();

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(route.params.description);

  async function handleUpdateTask() {
    try {
      setLoading(true);
      await updateDoc(doc(database, "tasks", route.params.id), {
        description,
      });
      navigation.navigate("Task");
      Toast.show({
        type: "success",
        text1: "Muito bem!",
        text2: "Tarefa atualizada com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "Não foi possível atualizar a tarefa",
      });
    } finally {
      setLoading(false);
    }
  }

  return { description, loading, setDescription, handleUpdateTask };
};

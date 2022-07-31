import { NavigationProp, useNavigation } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore/lite";
import { useState } from "react";
import { database } from "../config/firebase";
import Toast from "react-native-toast-message";

export const useAddTask = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAddTask() {
    try {
      setLoading(true);
      await addDoc(collection(database, "tasks"), {
        description,
      });
      navigation.navigate("Task");
      Toast.show({
        type: "success",
        text1: "Muito bem!",
        text2: "Tarefa criada com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "Não foi possível adicionar a tarefa",
      });
    } finally {
      setLoading(false);
    }
  }

  return { description, loading, setDescription, handleAddTask };
};

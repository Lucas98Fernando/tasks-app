import Toast from "react-native-toast-message";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { database } from "../config/firebase";

export const useDeleteTask = () => {
  async function handleDeleteTask(id: string) {
    try {
      await deleteDoc(doc(database, "tasks", id));
      Toast.show({
        type: "success",
        text1: "Ação realizada",
        text2: "Tarefa removida com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "Não foi possível excluir a tarefa",
      });
    }
  }

  return { handleDeleteTask };
};

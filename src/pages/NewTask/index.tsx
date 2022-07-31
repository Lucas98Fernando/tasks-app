import { addDoc, collection } from "firebase/firestore/lite";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { database } from "../../config/firebase";
import { NavigationProp } from "@react-navigation/native";
import styles from "../../common/styles";

interface Props {
  navigation: NavigationProp<any, any>;
}

export function NewTask({ navigation }: Props) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  async function handleAddTask() {
    try {
      await addDoc(collection(database, "tasks"), {
        description,
        status,
      });
      navigation.navigate("Task");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React Native"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

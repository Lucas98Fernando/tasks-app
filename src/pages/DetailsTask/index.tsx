import { useEffect, useState } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../common/styles";
import { Task } from "../../types/task";
import { database } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";

interface Props {
  route: RouteProp<{ params: Task }>;
  navigation: NavigationProp<any, any>;
}

export function DetailsTask({ route, navigation }: Props) {
  const [description, setDescription] = useState(route.params.description);

  async function handleUpdateTask() {
    try {
      await updateDoc(doc(database, "tasks", route.params.id), {
        description,
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
      <TouchableOpacity style={styles.button} onPress={handleUpdateTask}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

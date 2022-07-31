import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../common/styles";
import { useAddTask } from "../../hooks/useAddTask";

export function NewTask() {
  const { description, loading, setDescription, handleAddTask } = useAddTask();

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
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Salvar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

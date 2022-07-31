import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../common/styles";
import { useUpdateTask } from "../../hooks/useUpdateTask";

export function DetailsTask() {
  const { description, loading, setDescription, handleUpdateTask } =
    useUpdateTask();

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
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Atualizar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

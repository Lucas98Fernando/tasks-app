import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteTask: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  description: {
    width: "85%",
    alignContent: "flex-start",
    padding: 12,
    borderRadius: 50,
    marginVertical: 8,
    marginRight: 15,
    backgroundColor: "#caeaea",
  },
  buttonNewTask: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    left: 10,
    width: 60,
    height: 60,
    backgroundColor: "#219ebc",
    borderRadius: 50,
  },
  iconButton: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  noTasks: {
    paddingLeft: 20,
  },
});

export default styles;

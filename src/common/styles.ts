import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: "#219ebc",
  },
  input: {
    width: "90%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#219ebc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "25%",
    padding: 10,
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: "#219ebc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;

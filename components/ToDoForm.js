import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  useState,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ToDoItems from "./ToDoItems";
import { Ionicons } from "@expo/vector-icons";

const ToDoForm = (props) => {
  var [enteredItem, setEnteredItem] = React.useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredItem) return;
    const addList = [...props.toDoList, { item: enteredItem }]; // without item, no state text is displayed
    props.setToDoList(addList);
    setEnteredItem("");
  };

  const DeleteItem = (event, index) => {
    event.preventDefault();
    const deleteList = [...props.toDoList]; // without item, no state text is displayed
    deleteList.splice(deleteList.length - 1);
    props.setToDoList(deleteList);
  };

  return (
    <View style={styles.app}>
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Task"
          value={enteredItem}
          onChangeText={(enteredItem) => setEnteredItem(enteredItem)}
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={SubmitHandler}>
          <Ionicons name="md-add-circle-sharp" size={90} color="blue" />
        </TouchableOpacity>
      </View>
      <View>
        <Button title="Delete" onPress={DeleteItem}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: "white",
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  todo: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 3,
    fontSize: 12,
    justifyContent: "space-between",
    marginBottom: 6,
    padding: 10,
  },
  TextInput: {
    height: 100,
    width: 390,
    fontSize: 30,
    textAlign: "center",
  },
});

export default ToDoForm;

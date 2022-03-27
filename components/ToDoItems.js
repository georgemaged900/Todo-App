import React from "react";
import ToDoForm from "./ToDoForm";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  View,
  Text,
  TextInput,
  useState,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const ToDoItems = (props) => {
  const [toDoList, setToDoList] = React.useState([
    { item: "Prepare Clothes" },
    { item: "learn react" },
    { item: "read book" },
  ]);

  const DeleteItem = (event, index) => {
    event.preventDefault();
    const deleteList = [toDoList]; // without item, no state text is displayed
    deleteList.splice(deleteList.length - 1);
    setToDoList(deleteList);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          flex: 0.2,
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 15,
        }}
      >
        <Text style={styles.welcomeStyle}> Tasks</Text>
      </View>
      <View // for text boxes
        style={{
          flexDirection: "column",
          flex: 1,
          padding: 80,
        }}
      >
        {toDoList.map((toDoList) => (
          <View>
            <Text style={styles.textContainer}>{toDoList.item}</Text>
            <TouchableOpacity style={styles.deleteStyle} onPress={DeleteItem}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // for whole items parent view
  container: {
    justifyContent: "center", // centers all components in screen
    flex: 1, // takes whole screen
    backgroundColor: "white",
  },

  deleteStyle: {
    backgroundColor: "red",
  },

  textContainer: {
    // for text boxes
    alignSelf: "center",
    padding: 20,
    marginTop: 5,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    width: 350,
    borderRadius: 12,
    backgroundColor: "white",
    borderColor: "white",
    height: 60,
    borderWidth: 0.25,
    borderRadius: 10,
  },
  welcomeStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ToDoItems;

import React, { Component } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
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

function App() {
  // const DeleteItem = (event, index) => {
  //   event.preventDefault();
  //   const deleteList = [toDoList]; // without item, no state text is displayed
  //   deleteList.splice(deleteList.length - 1);
  //   setToDoList(deleteList);
  // };

  // return <ToDoItems DeleteItem={DeleteItem} />;
  return <ToDoItems />;
}
export default App;

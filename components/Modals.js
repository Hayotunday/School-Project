import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

export const AddEventModal = () => {
  const [eventVisible, setEventVisible] = useState(false)

  const [event, setEvent] = useState({});
  const [eventItems, setEventItems] = useState([]);



  const handleAddEvent = () => {
    Keyboard.dismiss();
    setEventItems([...eventItems, event]);
    setEvent(null);
  };

  const completeEvent = (index) => {
    let eventsCopy = [...eventItems];
    eventsCopy.splice(index, 1);
    setEventItems(eventsCopy);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={eventVisible}
      onRequestClose={() => {
        setModalVisible(!eventVisible);
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 25,
            height: "80%",
            width: "80%",
            padding: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={{ height: "100%" }}>
            <TextInput
              style={styles.input}
              placeholder='Enter Day'
              value={task}
              onChangeText={(task) => setTask(task)}
            />
            <TextInput
              style={styles.input}
              placeholder='Enter Course Code'
              value={task}
              onChangeText={(task) => setTask(task)}
            />
            <TextInput
              style={styles.input}
              placeholder='Enter Course Title'
              value={task}
              onChangeText={(task) => setTask(task)}
            />
            <View>
              <DateTimePicker mode='time' />
            </View>

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View >
                <Text >+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export const AddTaskModal = () => {
  const [taskVisible, setTaskVisible] = useState(false)

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={taskVisible}
      onRequestClose={() => {
        setTaskVisible(!taskVisible);
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: "35%",
            width: "100%",
            padding: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={{ height: "100%", justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Select new activity
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Enter Day'
              value={task}
              onChangeText={(task) => setTask(task)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}
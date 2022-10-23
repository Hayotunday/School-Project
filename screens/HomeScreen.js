import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Modal, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import React, { useState } from 'react';

import SafeView from '../components/SafeView';
import Event from '../components/Event';
import Carousel from '../components/Carousel'
import Task from '../components/Task';

import { Ionicons, Entypo, MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { lectures } from '../model/data';

// import { AddEventModal, AddTaskModal } from '../components/Modals'

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskVisible, setTaskVisible] = useState(false)
  const [eventVisible, setEventVisible] = useState(false)

  const [event, setEvent] = useState({});
  const [eventItems, setEventItems] = useState([]);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddEvent = () => {
    Keyboard.dismiss();
    setEventItems([...eventItems, event]);
    setEvent(null);
  };

  const handleAddTask = () => {
    if (task === null) {
      Alert.alert('', 'Please Enter a task', [{ text: '' }], { cancelable: true });
    } else {
      setTaskVisible(!taskVisible);
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeEvent = (index) => {
    let eventsCopy = [...eventItems];
    eventsCopy.splice(index, 1);
    setEventItems(eventsCopy);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const renderCourse = ({ item, index }) => {
    return <Event key={index} data={item} />;
  };

  return (
    <SafeView style={{ paddingHorizontal: 15 }}>

      <StatusBar style="auto" />
      <View style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 35, fontWeight: '900' }}>Hello, Daniel!</Text>
          <ImageBackground source={require('../assets/profile.jpg')} style={{ height: 40, width: 40 }} imageStyle={{ borderRadius: 20 }} />
        </View>
        <Text style={{ fontSize: 15 }}>Have a nice Day!</Text>
      </View>


      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', borderRadius: 15, width: '100%', paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center', backgroundColor: '#87CEEB', marginRight: 10 }}>
          <Ionicons name="search-outline" size={20} color='#333' style={{ marginRight: 5 }} />
          <TextInput placeholder='Search' placeholderTextColor='#333' onChangeText={() => { }} />
        </View>
        {/* <View style={{ flexDirection: 'row', borderRadius: 15, width: '15%', paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center', backgroundColor: '#87CEEB' }}>
          <Ionicons name="add-sharp" size={24} color="#333" />
        </View> */}
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: '800' }}>Lectures</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Event')}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#87CEEB' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Carousel data={eventItems} renderItem={renderCourse} />
          {/* <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#ddd', height: 40, width: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 70 }}>
            <Entypo name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#ddd', height: 40, width: 40, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, top: 70 }}>
            <Entypo name="chevron-left" size={24} color="black" />
          </TouchableOpacity> */}
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: '800' }}>Tasks</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Task')}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#87CEEB' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10 }}>
          {
            taskItems.length !== 0 && <Task text={taskItems[0]} />
          }
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
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
                Add New Event
              </Text>
              <View style={{ justifyContent: "space-between" }}>
                <TouchableOpacity
                  onPress={() => { setEventVisible(!eventVisible); setModalVisible(!modalVisible) }}
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="event" size={24} color="black" />
                  <Text style={{ marginLeft: 10, fontSize: 18 }}>Event</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { setTaskVisible(!taskVisible); setModalVisible(!modalVisible); }}
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <Octicons name="tasklist" size={24} color="black" />
                  <Text style={{ marginLeft: 10, fontSize: 18 }}>Task</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Events Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={eventVisible}
        onRequestClose={() => {
          setModalVisible(!eventVisible);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
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
                style={{}}
                placeholder='Enter Day'
                value={task}
                onChangeText={() => { }}
              />
              <TextInput
                style={{}}
                placeholder='Enter Course Code'
                value={task}
                onChangeText={() => { }}
              />
              <TextInput
                style={{}}
                placeholder='Enter Course Title'
                value={task}
                onChangeText={() => { }}
              />
              <View>
                <DateTimePickerAndroid mode='time' />
              </View>

              <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => setEventVisible(!eventVisible)}>
                  <Text style={{}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleAddEvent(); setEventVisible(!eventVisible); console.log(eventItems) }}>
                  <Text style={{}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal> */}

      {/* Tasks Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={taskVisible}
        onRequestClose={() => {
          setTaskVisible(!taskVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 25,
              height: "40%",
              width: "90%",
              paddingVertical: 20,
              paddingHorizontal: 25,
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
                Add New Task
              </Text>
              <TextInput
                style={{ borderColor: '#87CEEB', borderWidth: 2, borderRadius: 5, padding: 5 }}
                placeholder='Enter Day'
                value={task}
                onChangeText={(task) => setTask(task)}
              />

              <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { setTaskVisible(!taskVisible) }}>
                  <Text style={{ backgroundColor: '#87CEEB', fontSize: 15, padding: 8, borderRadius: 10 }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleAddTask() }}>
                  <Text style={{ backgroundColor: '#87CEEB', fontSize: 15, padding: 8, borderRadius: 10 }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#87CEEB', position: 'absolute', bottom: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>

    </SafeView>
  )
}
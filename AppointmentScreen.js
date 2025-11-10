import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function AppointmentScreen({ screenstyle, navigation }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    if (!name || !time) {
      Alert.alert("Missing Info", "Please enter your name and preferred time.");
      return;
    }

    try {
      // Save data to Firestore
      await addDoc(collection(db, "bookings"), {
        name: name,
        time: time,
        createdAt: Timestamp.now(),
      });

      Alert.alert("Booking Confirmed", `Thank you, ${name}! Your booking is set for ${time}.`);

      setName("");
      setTime("");
    } catch (error) {
      console.error("Error adding booking:", error);
      Alert.alert("Error", "Something went wrong while saving your booking.");
    }
  };

  return (
    <View style={[styles.container, screenstyle]}>
      <Text style={styles.title}>Book an Appointment</Text>

      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Preferred Time (e.g., 3:00 PM)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />

      <Button title="Book" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

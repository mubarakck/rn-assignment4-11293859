import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen ({ route }) {
const { name, email } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {name}!</Text>
      <Text>Your email is {email}</Text>
    </View>
  );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "Yellow",
        justifyContent: "center",
    },
text:{
    fontSize:24,
    fontWeight: "200",
    margin: 20,
},
});


import { View, Text, StyleSheet } from "react-native";

export default function Login () {
    return (
        <View style={styles.container}>
      <Text styles={styles.text}>Open up App.js to start working on your Login Screen!</Text>
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


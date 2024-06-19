import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TextInput  } from "react-native";

export default function HomeScreen ({ route }) {
const { name, email } = route.params;
    return (


        <ScrollView style={styles.container}>


<View style={ styles.header}>       
<View style={ styles.head}>    
        <Text style={styles.name}>{name}</Text> 
        <Text style={styles.email}>{email}</Text>
</View>
        
        <Image source={require('../assets/user.png')} style={styles.user} /> 
      
      </View>

      
      



    <View style={styles.searchContainer}>
    <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          placeholderTextColor="#ccc"
        />
       <Image source={require('../assets/filter.png')} style={styles.searchIcon} />
      </View>

     
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
      marginTop: 70,
      flexDirection: 'row',
    },
    head:{
      flexDirection: 'column',
    },
    user: {
      flexDirection: 'row',
      
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    email: {
      fontSize: 18,
      color: 'gray',
      flex: 1,
      marginTop: 0,
    },



    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
    },
    searchInput: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 16,
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
   });
import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TextInput  } from "react-native";

export default function HomeScreen ({ route }) {
const { name, email } = route.params;
    return (
        <ScrollView style={styles.container}>



        <Text style={styles.name}>{name}</Text>  
        <View style={ styles.header}>           
        
       
      <Text style={styles.email}>{email}</Text>
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

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <View style={styles.jobCard}>
      <Image source={require('../assets/facebooklogo.png')} style={styles.logo} />
        <Text style={styles.jobTitle}>Software {"\n"} Engineer</Text> 
        <Text style={styles.jobCompany}>Facebook</Text>
        <Text style={styles.jobLocation}>Accra, Ghana</Text>
        <Text style={styles.jobSalary}>$180,000</Text>
      </View>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <View style={styles.jobCard}>
        <Image source={{ uri: 'burgerking' }} style={styles.logo} />
        <Text style={styles.jobTitle}>Jr Executive</Text>
        <Text style={styles.jobCompany}>Burger King</Text>
        <Text style={styles.jobLocation}>Los Angeles, US</Text>
        <Text style={styles.jobSalary}>$96,000/y</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    user: {   
       flexDirection: 'row',
       marginTop: 30,
       width: 40,
       height: 40,
       borderRadius: 20, 
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      
      marginTop: 70,
      padding: 20,
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
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 10,
    },
    jobCard: {
      backgroundColor: 'lightblue',
      padding: 20,
      margin: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 10,
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    jobCompany: {
      fontSize: 16,
      color: 'gray',
    },
    jobLocation: {
      fontSize: 14,
      color: 'gray',
    },
    jobSalary: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
    },
  });
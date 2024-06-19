import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TextInput  } from "react-native";

export default function HomeScreen ({ route }) {
const { name, email } = route.params;
    return (
        <ScrollView style={styles.container}>


        <View style={ styles.header}>
      <Text style={styles.name}>{name}!</Text>
      <Text style={styles.email}>{email}</Text>
    </View>

<TextInput style={styles.searchInput} placeholder="Search a job or position" />

<Text style={styles.sectionTitle}>Featured Jobs</Text>
<View style={styles.jobCard}>
  <Image source={{ uri: 'facebook_logo_url' }} style={styles.logo} />
  <Text style={styles.jobTitle}>Software Engineer</Text>
  <Text style={styles.jobCompany}>Facebook</Text>
  <Text style={styles.jobLocation}>Accra, Ghana</Text>
  <Text style={styles.jobSalary}>$180,000</Text>
</View>

<Text style={styles.sectionTitle}>Popular Jobs</Text>
<View style={styles.jobCard}>
  <Image source={{ uri: 'burger_king_logo_url' }} style={styles.logo} />
  <Text style={styles.jobTitle}>Jr Executive</Text>
  <Text style={styles.jobCompany}>Burger King</Text>
  <Text style={styles.jobLocation}>Los Angeles, US</Text>
  <Text style={styles.jobSalary}>$96,000/y</Text>
</View>
</ScrollView>

  );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      email: {
        fontSize: 18,
        color: 'gray',
      },
      searchInput: {
        margin: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
      },
      jobCard: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        margin: 20,
        borderRadius: 10,
      },
      logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
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

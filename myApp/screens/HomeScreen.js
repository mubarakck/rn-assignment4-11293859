import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity  } from "react-native";

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


<View style={styles.title}>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <TouchableOpacity>
      <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
      </View>


      <View>
      <ScrollView horizontal={true} style={styles.categories} showsHorizontalScrollIndicator={false}>

        </ScrollView>
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
      alignContent:'flex-end',
      marginLeft: 120,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#0D0D26',
    },
    email: {
      fontSize: 18,
      color: '#95969D',
      flex: 1,
      marginTop: 0,
    },



    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20,
      height: 48,
      width: 370,
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
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:20,
    },
    title:{
      flexDirection: 'row',
      marginTop: 20,
    },
    seeAll:{
      marginLeft:180,
      color: '#95969D',
    }

   });
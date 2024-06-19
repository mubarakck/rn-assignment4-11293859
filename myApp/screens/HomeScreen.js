import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity  } from "react-native";
import Featuredjobs from "./Featuredjobs";
//import Popularjobs from "./Popularjobs";
import facebooklogo from "../assets/facebooklogo.png";
import googlelogo from "../assets/googlelogo.png";
import burgerking from "../assets/burgerking.png";
import beats from "../assets/beats.png";
import yango from "../assets/yango.png";
import meta from "../assets/meta.png";
import oracle from "../assets/oracle.png";
import hp from "../assets/hp.png";





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
        <View style={styles.notificationDot} />
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


      


  
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.container}>
      <Featuredjobs
        logo={facebooklogo}
        jobTitle="Software Engineer"
        companyName="Facebook"
        salary="$180,000"
        location="Accra, Ghana"
        backgroundColor='#5386E4'
      />
      <Featuredjobs
        logo={googlelogo}
        jobTitle="Sales Manager"
        companyName="Google"
        salary="$110,000"
        location="New York, USA"
        backgroundColor='#142e3d'
      />
      <Featuredjobs
        logo={burgerking}
        jobTitle="Cybersecurity Analyst"
        companyName="Burger King"
        salary="$380,000"
        location="Bucharest, Rome"
        backgroundColor='#aae036'
      />
      <Featuredjobs
        logo={beats}
        jobTitle="Sound Engineer"
        companyName="Beats By Dr. Dre"
        salary="$500,000"
        location="Miami, USA"
        backgroundColor='#701148'
      />
      <Featuredjobs
        logo={yango}
        jobTitle="Backend Engineer"
        companyName="Yango"
        salary="GHS 180,000"
        location="Accra, Ghana"
        backgroundColor='#cc7135'
      />
      <Featuredjobs
        logo={oracle}
        jobTitle="Database Manager"
        companyName="Oracle"
        salary="$580,000"
        location="Peru, Para"
        backgroundColor='#bf2133'
      />
      <Featuredjobs
        logo={meta}
        jobTitle="Systems Administrator"
        companyName="Meta AI"
        salary="$280,000"
        location="Konongo, Zongo"
        backgroundColor='#667ce8'
      />
      <Featuredjobs
        logo={hp}
        jobTitle="Senior Tester"
        companyName="Hewllet Packard"
        salary="$88,000"
        location="Toronto, Canada"
        backgroundColor='#54a1bf'
      />
     
    </ScrollView>


    <View style={styles.title}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
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
      marginLeft: 220,
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
    notificationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'red',
      position: 'absolute',
      right: 10,
      top: 10,
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
      marginBottom: 20,
    },
    title:{
      flexDirection: 'row',
      marginTop: 20,
    },
    seeAll:{
      marginLeft:180,
      color: '#95969D',
    },
    categories: {
      flexDirection: 'row',   
    },
   });
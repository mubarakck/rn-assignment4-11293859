import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// JobCard Component
const Featuredjobs = ({ logo, jobTitle, companyName, salary, location, backgroundColor  }) => {
  return (
        <View style={[styles.card1, { backgroundColor: backgroundColor }]}>
            <View style={styles.innerText}>
                 <Image source={logo} style={styles.jobIcons} />
            
                       <View style={styles.bothText}>
                          <Text style={styles.firstText}>{jobTitle}</Text>
                            <Text style={styles.secondText}>{companyName}</Text>
                        </View>
         </View>

            <View style={styles.bottomTextView}>
                        <Text style={styles.bottomTextText1}>{salary}</Text>
                        <Text style={styles.bottomTextText2}>{location}</Text>
            </View>
      </View>
   
  );
};



const styles = StyleSheet.create({
    card1: {
      //backgroundColor: '#5386E4', // Facebook blue
      borderRadius: 30,
      padding: 20,
      margin: 10,
      height: 186,
      marginLeft:24,
      width: 320,
    },
    jobIcons:{
      backgroundColor: 'white',
      height: 45,
      width: 45,
      borderRadius: 10,
    },
    innerText:{
      flexDirection: 'row',
    },
    bothText:{
      marginLeft: 20,
      flexDirection: 'column',
    },
    firstText:{
      color:"white",
      fontWeight: '600',
    },
    secondText:{
      color:"white",
      fontWeight: '400',
    },
    bottomTextView:{
      marginTop: 80,
      flexDirection:'row',
    },
    bottomTextText1:{
  color:'white',
  marginRight:90,
    },
    bottomTextText2:{
      color:'white',
    },
  
   
    
  });
export default Featuredjobs;
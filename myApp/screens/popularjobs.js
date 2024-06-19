// components/JobCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Popularjobs = ({ logo, jobTitle, companyName, salary, location }) => {
    return (


        <View style={styles.card}>

                    <View style={styles.firstText}>
                     <Image source={logo} style={styles.logo} />

                             <View style={styles.info}>
                                    <Text style={styles.jobTitle}>{jobTitle}</Text>
                                    <Text style={styles.companyName}>{companyName}</Text>
                           </View>
                    </View>

                        <View style={styles.secondText}>
                                    <Text style={styles.salary}>{salary}</Text>
                                    <Text style={styles.details}>{location}</Text>
                                    
                        </View>
                            
        </View>
    );
};

const styles = StyleSheet.create({
card:{
        flexDirection: 'row',
        padding:20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        margin: 10,
    },
firstText:{
        flexDirection:'row',
        marginLeft: 20,
},
logo: {
    margin:5,
    width: 50,
    height: 50,

}, 
secondText:{
 marginLeft: 30,
},
info: {
    marginLeft: 10,
},
salary: {
    fontWeight: '600',
},
jobTitle: {
    fontWeight: '800',
},   
companyName:{
 color:'#0D0D26',
},
location: {
    color:'#0D0D26',
},





});

export default Popularjobs;
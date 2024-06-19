import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

// JobCard Component
const JobCard = ({ logoUrl, jobTitle, companyName, salary, location }) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logoUrl }} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

// HomeScreen Component
const featuredjobs = () => {
  return (
    <ScrollView style={styles.container}>
      <JobCard
        logoUrl="facebook_logo_url"
        jobTitle="Software Engineer"
        companyName="Facebook"
        salary="$180,000"
        location="Accra, Ghana"
      />
      {/* You can add more JobCard components here with different props */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#4267B2', // Facebook blue
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  companyName: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  location: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default featuredjobs;
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function UploadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Arrow Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("HomeScreen")}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#4CAF50" />
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Upload Screen</Text>
      </View>

      {/* Placeholder Content */}
      <View style={styles.content}>
        <MaterialCommunityIcons name="cloud-upload" size={100} color="#4CAF50" />
        <Text style={styles.infoText}>This is the Upload Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    marginLeft: 5,
  },
  header: {
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

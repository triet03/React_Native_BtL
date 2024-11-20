import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalAmount, paymentMethod } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Successful</Text>
      <Text style={styles.details}>Your order has been processed successfully!</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total Amount: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.infoText}>Payment Method: {paymentMethod.label}</Text>
        <Text style={styles.infoText}>Details: {paymentMethod.details}</Text>
      </View>
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginVertical: 20,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  doneButton: {
    backgroundColor: '#00A86B',
    padding: 12,
    borderRadius: 8,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;

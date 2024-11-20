import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  // Retrieve the total amount passed from the CartScreen
  const { totalAmount } = route.params;

  const paymentMethods = [
    { id: 1, label: 'Visa', details: '**** 2334' },
    { id: 2, label: 'MasterCard', details: '**** 3774' },
    { id: 3, label: 'PayPal', details: 'abc@gmail.com' },
  ];

  const handlePayment = () => {
    if (selectedMethod) {
      navigation.navigate('PaymentCheck', {
        totalAmount: totalAmount, // Passing the actual total amount
        paymentMethod: paymentMethods.find((method) => method.id === selectedMethod),
      });
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.totalLabel}>TOTAL</Text>
      <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[styles.paymentOption, selectedMethod === method.id && styles.selectedOption]}
          onPress={() => setSelectedMethod(method.id)}
        >
          <Text style={styles.methodLabel}>{method.label}</Text>
          <Text style={styles.methodDetails}>{method.details}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addNewCardButton}>
        <Text style={styles.addNewCardText}>+ Add new card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  totalLabel: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#00A86B', // Highlight the selected option
  },
  methodLabel: {
    fontSize: 18,
  },
  methodDetails: {
    fontSize: 18,
    color: '#888',
  },
  payButton: {
    backgroundColor: '#00A86B',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addNewCardButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  addNewCardText: {
    color: '#00A86B',
    fontSize: 16,
  },
});

export default PaymentScreen;

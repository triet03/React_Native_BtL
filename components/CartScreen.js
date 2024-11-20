import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useCart } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Thêm axios để gọi API

const CartScreen = () => {
  const { cart, getTotalPrice } = useCart();
  const navigation = useNavigation();

  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyVoucher = async () => {
    try {
      // Thay URL bằng đường dẫn Mocky hoặc API backend thực tế của bạn
      const response = await axios.get('https://run.mocky.io/v3/11e49d10-f943-4a3b-b883-65dded412036');
      const vouchers = response.data;

      if (vouchers[voucherCode]) {
        setDiscount(vouchers[voucherCode]);
        Alert.alert('Voucher Applied', `You received a ${vouchers[voucherCode]}% discount!`);
      } else {
        setDiscount(0);
        Alert.alert('Invalid Voucher', 'The voucher code you entered is not valid.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to apply voucher at the moment.');
    }
  };

  // Tính tổng tiền với giảm giá
  const totalPriceWithDiscount = getTotalPrice() * (1 - discount / 100);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ Hàng</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.voucherContainer}>
        <TextInput
          style={styles.voucherInput}
          placeholder="Enter Voucher Code"
          value={voucherCode}
          onChangeText={setVoucherCode}
        />
        <TouchableOpacity style={styles.applyButton} onPress={applyVoucher}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng tiền:</Text>
        <Text style={styles.totalPrice}>${totalPriceWithDiscount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          navigation.navigate('PaymentScreen', {
            totalAmount: totalPriceWithDiscount, // Truyền tổng tiền sau giảm giá
          })
        }
      >
        <Text style={styles.nextButtonText}>Tiếp theo</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    color: '#888',
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  voucherInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#00A86B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#00A86B',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;

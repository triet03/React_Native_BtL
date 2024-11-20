import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFavorites } from './CartContext';  // Import context cho yêu thích
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();  // Lấy danh sách sản phẩm yêu thích từ context
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });  // Điều hướng đến màn hình chi tiết sản phẩm
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress(item)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản phẩm yêu thích</Text>
      <FlatList
        data={favorites} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}  // Giả sử mỗi sản phẩm có id duy nhất
      />
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
  productContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default FavoritesScreen;
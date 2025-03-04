import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import beauty1 from '../assets/beauty.png';
import beauty2 from '../assets/beauty1.png';
import beauty3 from '../assets/beauty2.png';
import beauty4 from '../assets/beauty3.png';
import beauty5 from '../assets/beauty4.png';
import beauty6 from '../assets/phan.png';
import beauty7 from '../assets/serum.png';

const products = [
  { id: '1', name: 'Son LV', price: '$1500', rating: 4, image: beauty1 },
  { id: '2', name: 'Laneige', price: '$1000', rating: 5, image: beauty2 },
  { id: '3', name: 'Son Laneige', price: '$700', rating: 4, image: beauty3 },
  { id: '4', name: 'Phan Gucci', price: '$500', rating: 4, image: beauty4 },
];

const relevantProducts = [
  { id: '5', name: 'Phan Gucci', price: '$15', rating: 4, image: beauty5 },
  { id: '6', name: 'phan', price: '$23', rating: 5, image: beauty6 },
  { id: '7', name: 'Serum', price: '$23', rating: 5, image: beauty7 },
];

const BeautyScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('List', { userName: name });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', { product: item })
      }
      style={styles.productCard}
      key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderRelevantProduct = (item) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', { product: item })
      }
      style={styles.relevantProductCard}
      key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.homeContainer}>
      <View style={styles.home1}>
        <View style={{ flexDirection: 'row' }}>
         
          <Text style={{ fontSize:24, fontWeight: 'bold' }}>Beauty</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="shopping-cart"
            size={20}
            color="#9095A0"
            style={{ right: 20 }}
          />
          <Icon name="user" size={30} color="#9095A0" />
        </View>
      </View>

      <View style={styles.home2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: '85%',
            borderColor: '#9095A0',
          }}>
          <Icon name="search" size={15} color="#9095A0" />
          <TextInput
            style={{ fontSize: 12 }}
            placeholder="   Search for product"
            placeholderTextColor="#9095A0"
          />
        </View>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#9095A0',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="bars" size={15} color="#9095A0" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.home3}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold' }}>Recommended for you</Text>
          <Text style={{ color: '#9095A0' }}>View all</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#d9cbf6',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/beauty.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#c5d1f7',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/serum.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#f9d8c0',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/phan.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.home4}>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>
            Best Sales
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>
            Best Matched
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>Popular</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productGrid}
        />

        {/* See All Button */}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>

        {/* Relevant Products Section */}
        <Text style={styles.relevantProductsTitle}>Relevant products</Text>
        <View style={styles.relevantProductsContainer}>
          {relevantProducts.map((item) => renderRelevantProduct(item))}
        </View>
      </ScrollView>

      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  home1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  home2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  home3: {
    marginTop: 10,

    justifyContent: 'space-around',
  },
  home4: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  home5: {
    marginTop: 10,
  },
  productGrid: {
    justifyContent: 'center',
  },
  productCard: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9095A0',
  },
  productImage: {
    width: 75,
    height: 75,
    marginBottom: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: '#9095A0',
  },
  seeAllButton: {
    alignItems: 'center',
    marginVertical: 16,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
   relevantProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  relevantProductsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  relevantProductCard: {
    width: 120,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9095A0',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  home6: {
    flexDirection: 'row',
    marginTop: 10,
  },
  scrollContainer: {
    paddingBottom: 60, // Để tránh nội dung bị che khuất bởi thanh điều hướng
  },
  home7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default BeautyScreen;

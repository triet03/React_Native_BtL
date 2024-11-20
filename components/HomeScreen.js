import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const [name, setName] = useState('');

  const navigation = useNavigation();

  const handleGetElectronic = () => {
    navigation.navigate('Electronic');
  };

  const handleGetFasion = () => {
    navigation.navigate('Fasion');
  };

  const handleGetBeauty = () => {
    navigation.navigate('Beauty');
  };

  const handleGetFreshFruit = () => {
    navigation.navigate('FreshFruits');
  };

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  const handleGetComment = () => {
    navigation.navigate('Comment');
  };

  const handleFavoritesPress = () => {
    // Thực hiện hành động, ví dụ: chuyển đến màn hình yêu thích
    navigation.navigate('Favorites'); // Đảm bảo rằng màn hình 'Favorites' đã được cấu hình trong navigator
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.home1}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>All Deals</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon
              name="shopping-cart"
              size={30}
              color="#9095A0"
              style={{ right: 20 }}
            />
          </TouchableOpacity>
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.home3}>
          <TouchableOpacity onPress={handleGetElectronic}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#8A2BE2',
                  padding: 5,
                  borderRadius: 100,
                }}>
                <Image
                  source={require('../assets/electronic.png')}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Electronics
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGetFasion}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#4069e5',
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../assets/fasion.png')}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Fasion</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGetBeauty}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#ed7d2d',
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../assets/beauty.png')}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Beauty</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGetFreshFruit}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#e05858',
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../assets/FreshFruits.png')}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Fresh Fruits
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.home4}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: '#02bdd6' }}>
              Shoes
            </Text>
            <Text style={{ fontSize: 16, color: '#9095A0', marginTop: 5 }}>
              50% off
            </Text>
            <TouchableOpacity
              onPress={() => handleGetFasion()}
              style={{
                backgroundColor: 'black',
                width: 80,
                padding: 10,
                borderRadius: 10,
                marginTop: 5,
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../assets/giay_banner.png')}
              style={{ width: 110, height: 110 }}
            />
          </View>
        </View>

        <View style={styles.home5}>
          <View style={{ width: '50%' }}>
            <TouchableOpacity onPress={() => handleGetBeauty()}>
              <Image
                source={require('../assets/tuisach.jpg')}
                style={{ width: '95%', height: 100, borderEndStartRadius: 10 }}
              />
              <Text
                style={{
                  width: 40,
                  backgroundColor: '#e05858',
                  padding: 5,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                  top: -90,
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                30%
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '50%', left: '5%' }}>
            <TouchableOpacity onPress={() => handleGetElectronic()}>
              <Image
                source={require('../assets/maytinh.jpg')}
                style={{
                  width: '95%',
                  height: 100,
                  borderBottomRightRadius: 10,
                }}
              />
              <Text
                style={{
                  width: 40,
                  backgroundColor: '#ed7d2d',
                  padding: 5,
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                  top: -90,
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                30%
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -20,
          }}>
          <Text style={{ fontWeight: 'bold' }}>Recommended for you</Text>
          <Text style={{ color: '#9095A0' }}>View all</Text>
        </View>

        <View style={styles.home6}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 110,
                height: 150,
                backgroundColor: '#f8f9fa',
                padding: 10,
              }}>
              <Image
                source={require('../assets/giay_product.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderBottomRightRadius: 10,
                  left: 10,
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 10 }}>
                Shoes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{
                      width: 16,
                      height: 16,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <Text style={{ fontSize: 12, left: 5, color: '#9095A0' }}>
                    4.5
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#02bdd6',
                    fontSize: 12,
                  }}>
                  $299
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 110,
                height: 150,
                backgroundColor: '#f8f9fa',
                padding: 10,
                left: 10,
              }}>
              <Image
                source={require('../assets/tablet.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderBottomRightRadius: 10,
                  left: 10,
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 10 }}>
                Tablet
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{
                      width: 16,
                      height: 16,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <Text style={{ fontSize: 12, left: 5, color: '#9095A0' }}>
                    4.5
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#02bdd6',
                    fontSize: 12,
                  }}>
                  $499
                </Text>
              </View>
            </View>

            <View
              style={{
                width: 110,
                height: 150,
                backgroundColor: '#f8f9fa',
                padding: 10,
                left: 20,
              }}>
              <Image
                source={require('../assets/pear.png')}
                style={{
                  width: 70,
                  height: 70,
                  borderBottomRightRadius: 10,
                  left: 10,
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 10 }}>
                Pear
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{
                      width: 16,
                      height: 16,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <Text style={{ fontSize: 12, left: 5, color: '#9095A0' }}>
                    4.5
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#02bdd6',
                    fontSize: 12,
                  }}>
                  $499
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.separator} />

      <View style={styles.home7}>
        <TouchableOpacity onPress={() => handleGetStarted()} style={{ width: '20%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              left: '30%',
            }}>
            <Icon name="home" size={'30%'} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleFavoritesPress()}
          style={{ width: '20%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              left: '30%',
            }}>
            <Icon name="heart" size={'30%'} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Favorites</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => handleGetComment()} style={{ width: '20%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              left: '30%',
            }}>
            <Icon name="comment" size={'30%'} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Comment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '20%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              left: '30%',
            }}>
            <Icon name="user" size={'30%'} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Account</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  home4: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f2fd',
    padding: 20,
    borderRadius: 10,
  },
  home5: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
    paddingBottom: 20, // Để tránh nội dung bị che khuất bởi thanh điều hướng
  },
  home7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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

export default HomeScreen;

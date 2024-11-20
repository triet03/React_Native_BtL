import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleGetStarted = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/4cd3df00-a4aa-4940-84cd-efc0c335282e', { method: 'GET' }); // Thay bằng URL của bạn
      const data = await response.json();

      if (name === data.name && password === data.password) {
        navigation.navigate('Home');
      } else {
        alert('Sai tên hoặc mật khẩu!');
      }
    } catch (error) {
      alert('Không thể kết nối đến server. Hãy kiểm tra lại mạng.');
    }
  };

  return (
    <LinearGradient
      colors={['#8A2BE2', '#4B0082']}
      style={styles.homeContainer}
    >
      <Image
        source={require('../assets/logo.PNG')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.homeTitle}>Welcome to E-Market</Text>
      <Text style={styles.subtitle}>Shop easily, anytime!</Text>
      <View style={styles.homeInputContainer}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput
          style={styles.homeInput}
          placeholder="Enter your name"
          placeholderTextColor="#D3D3D3"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.homeInputContainer}>
        <Icon name="lock" size={20} style={styles.icon} />
        <TextInput
          style={styles.homeInput}
          placeholder="Enter your password"
          placeholderTextColor="#D3D3D3"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={handleGetStarted}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>GET STARTED ➔</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200, // Đặt chiều rộng tùy ý
    height: 150, // Đặt chiều cao tùy ý
    marginBottom: 20,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#D3D3D3',
    marginBottom: 20,
  },
  homeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25,
    width: '100%',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
    color: '#FFFFFF',
  },
  homeInput: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  homeButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B0082',
  },
});

export default UserScreen;

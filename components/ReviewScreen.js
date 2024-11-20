import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ReviewScreen = ({ route, navigation }) => {
  const { product, onReviewSubmitted } = route.params; // Nhận sản phẩm và callback từ ProductDetailScreen
  const [rating, setRating] = useState(0); // Trạng thái cho đánh giá
  const [feedback, setFeedback] = useState(''); // Trạng thái cho phản hồi

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Vui lòng chọn đánh giá');
      return;
    }

    if (feedback.trim() === '') {
      Alert.alert('Vui lòng nhập phản hồi');
      return;
    }

    // Gọi callback để gửi đánh giá và phản hồi về ProductDetailScreen
    onReviewSubmitted(rating, feedback);
    
    // Hiển thị thông báo gửi thành công
    Alert.alert('Đánh giá đã được gửi thành công!');

    // Đặt lại trạng thái
    setRating(0);
    setFeedback('');

    // Điều hướng trở lại ProductDetailScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đánh giá sản phẩm: {product.name}</Text>
      
      {/* Chọn đánh giá */}
      <Text style={styles.label}>Chọn đánh giá:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Icon name={star <= rating ? "star" : "star-outline"} size={30} color="#FFD700" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Nhập phản hồi */}
      <Text style={styles.label}>Phản hồi của bạn:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nhập phản hồi của bạn"
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={4}
      />

      {/* Nút gửi đánh giá */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Gửi đánh giá</Text>
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    height: 100,
  },
  submitButton: {
    backgroundColor: '#ff6347',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
    submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
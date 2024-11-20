import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart, useFavorites } from './CartContext';  // Sử dụng context cho giỏ hàng và yêu thích

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;  // Nhận sản phẩm từ màn hình trước
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();  // Hàm thêm vào yêu thích

  const [currentRating, setCurrentRating] = useState(product.rating || 0);
  const [currentFeedback, setCurrentFeedback] = useState(product.feedback || '');

  useEffect(() => {
    if (route.params.product.rating) {
      setCurrentRating(route.params.product.rating);
      setCurrentFeedback(route.params.product.feedback);
    }
  }, [route.params.product]);

  const handleRatingPress = () => {
    navigation.navigate('ReviewScreen', { 
      product, 
      onReviewSubmitted: (newRating, newFeedback) => {
        setCurrentRating(newRating);  // Cập nhật đánh giá
        setCurrentFeedback(newFeedback);  // Cập nhật phản hồi
      } 
    });
  };

  const handleBuyNow = () => {
    addToCart(product);  // Thêm sản phẩm vào giỏ hàng
    Alert.alert('Đã thêm vào giỏ hàng');
  };

  const handleFavoritePress = () => {
    addToFavorites(product);  // Thêm sản phẩm vào yêu thích
    Alert.alert('Đã thêm vào yêu thích');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={{ fontWeight: 'bold' }}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{product.name}</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="person-circle-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image source={product.image} style={styles.productImage} />

      {/* Price and Rating */}
      <View style={styles.priceRatingContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon 
              key={index} 
              name={index < currentRating ? "star" : "star-outline"} 
              size={16} 
              color="#FFD700" 
            />
          ))}
          <Text style={styles.ratingText}>{currentRating}</Text>
          <Text style={styles.reviewCount}>({product.reviews} đánh giá)</Text>
        </View>
      </View>

      {/* Product Description */}
      <Text style={styles.sectionTitle}>Mô tả</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Current Feedback */}
      {currentFeedback ? (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>Đánh giá của bạn:</Text>
          <Text style={styles.feedbackText}>{currentFeedback}</Text>
        </View>
      ) : null}

      {/* Rating Button */}
      <TouchableOpacity style={styles.ratingButton} onPress={handleRatingPress}>
        <Text style={styles.ratingButtonText}>Đánh giá</Text>
      </TouchableOpacity>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
                <Text style={styles.buyNowText}>Mua ngay</Text>
      </TouchableOpacity>

      {/* Favorite Button */}
      <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
        <Icon name="heart-outline" size={30} color="#ff6347" />
        <Text style={styles.favoriteButtonText}>Yêu thích</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    marginBottom: 16,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00A86B',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
  reviewCount: {
    marginLeft: 4,
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  feedbackContainer: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackText: {
    fontSize: 14,
    color: '#555',
  },
  ratingButton: {
    backgroundColor: '#ff6347',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: '#00A86B',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  favoriteButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#ff6347',
  },
});

export default ProductDetailScreen;
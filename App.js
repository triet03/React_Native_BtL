import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FreshFruitsScreen from './components/ScreenFreshFruits';
import ReviewScreen from './components/ReviewScreen'; 
import CartScreen from './components/CartScreen'; 
import HomeScreen from './components/HomeScreen';
import UserScreen from './components/UserScreen';
import ElectronicScreen from './components/ElectronicScreen';
import BeautyScreen from './components/BeautyScreen';
import FasionScreen from './components/FasionScreen';
import PaymentScreen from './components/PaymentScreen'
import PaymentCheck from './components/PaymentCheck'
import Favorites from './components/FavoritesScreen'
import ProductDetail from './components/ProductDetailScreen'

import { CartProvider } from './components/CartContext';



const Stack = createStackNavigator();
 
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen name="User" component={UserScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Electronic" component={ElectronicScreen}/>
          <Stack.Screen name="Beauty" component={BeautyScreen}/>
          <Stack.Screen name="Fasion" component={FasionScreen}/>
          <Stack.Screen name="FreshFruits" component={FreshFruitsScreen} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="PaymentCheck" component={PaymentCheck} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../helper/colorConstants';
import {useNavigation} from '@react-navigation/native';
import {CART_SCREEN} from '../../helper/routeConstants';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const CartIcon = ({cartItemCount}) => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.CartReducer.items);
  if (!cartItems.length > 0) return;
  let totalAmount = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalAmount = totalAmount + cartItems[i]?.price;
  }

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={() => navigation.navigate(CART_SCREEN)}>
        <View className="p-2 px-4 rounded-full" style={styles.container}>
          <Text className="font-extrabold text-white text-lg">
            {cartItemCount?.length}
          </Text>
        </View>
        <Text className="font-extrabold flex-1 text-center text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold  text-white text-lg">
          Rs {totalAmount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

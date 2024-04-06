import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {featured} from '../../helper/testData';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../helper/colorConstants';
import {useNavigation} from '@react-navigation/native';
import {ORDER_PREPARING} from '../../helper/routeConstants';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeFromCart,
  selectCartTotal,
  selectedCartItems,
} from '../../redux/reducer/cartReducer';
import {getCorrectImage} from '../../helper';
const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectedCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispacth = useDispatch();
  const [groupedItems, setGroupedItems] = useState({});
  {
    /** The reduce() method in JavaScript is used to transform an array into a single value.
     *It iterates over each element of the array and applies a reducer function that
     * accumulates the result.
     * */
  }

  useEffect(() => {
    const items = cartItems?.reduce((group, item) => {
      if (group?.[item?._id]) {
        group[item?._id].push(item);
      } else {
        group[item?._id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  const deliveryfee = cartTotal > 0 ? 30 : 0;
  const orderTotal = deliveryfee + cartTotal;
  const isOrderButtonReq = Object.keys(groupedItems).length > 0;

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-lg">
        <TouchableOpacity
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke={'white'} strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-semibold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">Hotel Rajmahal</Text>
        </View>
      </View>
      <View
        className="flex-row items-center px-4 py-2"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <Image
          source={require('../../assets/images/bike.png')}
          className="h-20 w-20 rounded-full"
        />
        <Text className="flex-1 ml-4 text-black font-semibold">
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="pt-5 bg-white">
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          const correctImage = getCorrectImage(dish?.image?.asset?._ref);
          return (
            <View
              key={key}
              className="flex-row rounded-3xl bg-white shadow-lg mb-3 mx-2 items-center space-x-3 py-2 px-4">
              <Text style={{color: themeColors.text}} className="font-bold">
                {items.length} x
              </Text>
              <Image
                source={{
                  uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
                }}
                className="h-16 w-16 rounded-full my-2"
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">Rs. {dish.price}</Text>
              <TouchableOpacity
                onPress={() => dispacth(removeFromCart({id: dish._id}))}
                className="p-1 rounded-full"
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon.Minus
                  stroke={'white'}
                  height={20}
                  width={20}
                  strokeWidth={2}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {isOrderButtonReq && (
        <View
          style={{backgroundColor: themeColors.bgColor(0.2)}}
          className="p-5 px-8 rounded-t-3xl space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">Rs {cartTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">Rs {deliveryfee}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">
              Rs {orderTotal}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(ORDER_PREPARING)}
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-3 rounded-full">
              <Text className="text-center text-white font-bold text-lg">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../helper/colorConstants';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../../redux/reducer/cartReducer';
import {getCorrectImage} from '../../helper';
import {styles} from './styles';
const DishesContainer = ({dish, index}) => {
  const dispatch = useDispatch();
  const handleMinusClick = () => {
    dispatch(removeFromCart({id: dish._id}));
  };
  const handlePlusClick = () => {
    dispatch(addToCart({...dish}));
  };
  const correctImage = getCorrectImage(dish?.image?.asset?._ref);
  const totalItems = useSelector(state => selectCartItemsById(state, dish._id));
  return (
    <View className="flex-row items-start bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        source={{
          uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
        }}
        style={styles.imgStyle}
        className="rounded-3xl"
      />
      <View className="mx-3 my-3 flex-1 space-y-1">
        <Text className="text-xl font-semibold text-gray-700 ">
          {dish.name}
        </Text>
        <Text className="text-sm text-gray-700">{dish.description}</Text>
        <View className="flex-row justify-between  items-center">
          <Text className="font-bold text-lg text-gray-700">
            Rs {dish.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => handleMinusClick()}
              className="rounded-full p-1 "
              disabled={!totalItems.length}
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Icon.Minus
                height={20}
                width={20}
                stroke={'white'}
                strokeWidth={2}
              />
            </TouchableOpacity>
            <Text className="px-2">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={() => handlePlusClick()}
              className="rounded-full p-1 "
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Icon.Plus
                height={20}
                width={20}
                stroke={'white'}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishesContainer;

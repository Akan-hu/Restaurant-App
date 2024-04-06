import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../helper/colorConstants';
import DishesContainer from '../../components/dishesContainer';
import CartIcon from '../../components/cartIcon';
import {useDispatch, useSelector} from 'react-redux';
import {SetRestaurant} from '../../redux/reducer/restaurantReducer';
import {getCorrectImage} from '../../helper';
const RestuarantScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.CartReducer.items);
  const {params} = useRoute();
  const {data} = params;
  useEffect(() => {
    if (data && data._id) {
      dispatch(SetRestaurant({...data}));
    }
  }, [dispatch, data]);
  const topStyle = Platform.OS === 'android' ? 'top-4' : 'top-14';
  const correctImage = getCorrectImage(data?.image?.asset?._ref);

  return (
    <View>
      <CartIcon cartItemCount={cartItems} />
      <StatusBar style="light" />
      <TouchableOpacity
        className={`absolute ${topStyle} left-4 bg-gray-50 rounded-full p-1 shadow z-50`}
        onPress={() => navigation.goBack()}>
        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            className="w-full h-80"
            source={{
              uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
            }}
          />
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="-mt-10 pt-6 bg-white">
          <View className="px-5">
            <Text className="text-3xl font-bold">{data.name}</Text>
          </View>
          <View className="flex-row ml-5 mt-2 mr-5">
            <View className="flex-row items-center  space-x-1 mb-5">
              <Image
                source={require('../../assets/images/star.png')}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{data.stars}</Text>
                <Text className="text-gray-700">
                  {' '}
                  ({data.reviews} review) •{' '}
                </Text>
                <Text className="font-semibold"> {data.description} </Text>
              </Text>
            </View>
          </View>
          <View className="flex-row ml-5 mr-5 flex-1 -mt-2 mb-3">
            <Icon.MapPin color={'gray'} width={15} height={15} />
            <Text className="ml-2 text-xs text-gray-700">
              Nearby • {data.address}
            </Text>
          </View>
        </View>
        <View className="pb-36">
          <Text className="px-4 py-4 text-2xl font-bold text-gray-700">
            Menu
          </Text>
          {/** Dishes */}
          {data.dishes.map((dish, index) => (
            <DishesContainer dish={dish} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestuarantScreen;

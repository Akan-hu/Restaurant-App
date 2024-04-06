import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../../helper/testData';
import {useNavigation} from '@react-navigation/native';
import MapView, {Circle, Marker} from 'react-native-maps';
import {themeColors} from '../../helper/colorConstants';
import LottieView from 'lottie-react-native';
import * as Icon from 'react-native-feather';
import {HOME_SCREEN} from '../../helper/routeConstants';
import {useDispatch, useSelector} from 'react-redux';
import {emptyCart} from '../../redux/reducer/cartReducer';

const DeliveryScreen = () => {
  const restaurants = useSelector(state => state.restaurant.restaurant);
  const navigation = useNavigation();
  const radius = 2000;
  const dispatch = useDispatch();
  const handleCrossPress = () => {
    navigation?.navigate(HOME_SCREEN);
    dispatch(emptyCart());
  };

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurants.lng,
          longitude: restaurants.lat,
          latitudeDelta: 0.4, //Zoom level (change as needed)
          longitudeDelta: 0.4, //Zoom level (change as needed)
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurants.lng,
            longitude: restaurants.lat,
          }}
          title={restaurants.name}
          description={restaurants.category}
          pinColor={themeColors.bgColor(5)}
        />
        <Circle
          center={{
            latitude: restaurants.lng,
            longitude: restaurants.lat,
          }}
          radius={radius}
          strokeWidth={1.5}
          strokeColor={themeColors.bgColor(8)} // Circle stroke color
          fillColor={themeColors.bgColor(0.3)} // Circle fill color
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="justify-between flex-row px-5 pt-8">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text lassName="mt-2 font-semibold text-gray-700 mb-2">
              Your order is on it's way
            </Text>
          </View>
          {/* <LottieView /> */}
          <LottieView
            source={require('../../assets/onTheWay.json')}
            autoPlay
            loop
            style={{width: '50%', height: '110%'}}
          />
        </View>
      </View>
      <View
        style={{backgroundColor: themeColors.bgColor(0.8)}}
        className="p-2 flex-row justify-between items-center rounded-full mx-2 my-5">
        <View
          className="rounded-full p-1"
          style={{
            backgroundColor: themeColors.bgColor('rgba(255,255,255,0.4)'),
          }}>
          <Image
            source={require('../../assets/images/deliver_guy.jpeg')}
            className="h-16 w-16 rounded-full"
          />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-lg font-bold text-white">Akanksha Gautam</Text>
          <Text className="font-semibold text-white">Your Rider</Text>
        </View>
        <View className="flex-row items-center mr-3 space-x-3">
          <TouchableOpacity className="bg-white p-2 rounded-full">
            <Icon.Phone
              fill={themeColors.bgColor(1)}
              strokeWidth={1}
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white p-2 rounded-full"
            onPress={handleCrossPress}>
            <Icon.X
              fill={themeColors.bgColor(1)}
              strokeWidth={5}
              stroke={'red'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;

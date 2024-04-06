import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {DELIVERY_SCREEN} from '../../helper/routeConstants';

const OrderPreparing = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(DELIVERY_SCREEN);
    }, 2000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <LottieView
        source={require('../../assets/delivery.json')}
        autoPlay
        loop
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default OrderPreparing;

import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../helper/colorConstants';
import {useNavigation} from '@react-navigation/native';
import {RESTUARANT_SCREEN} from '../../helper/routeConstants';
import {getCorrectImage} from '../../helper';
export const RestuarentCard = ({data, index}) => {
  const navigation = useNavigation();

  const correctImage = getCorrectImage(data?.image?.asset?._ref);
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(RESTUARANT_SCREEN, {data: data})}>
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg mx-4  w-64"
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}>
        <Image
          className="h-40 w-68 rounded-t-3xl shadow"
          source={{
            uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
          }}
        />
        <View className=" mx-4 py-4">
          <Text>{data.name}</Text>
          <View className="flex-row mt-3 items-center space-x-1">
            <Image
              source={require('../../assets/images/star.png')}
              className="h-5 w-5"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{data.stars}</Text>
              <Text className="text-gray-700">({data.reviews} review) • </Text>
              <Text className="font-semibold"> {data.description} </Text>
            </Text>
          </View>
          <View className="flex-row mt-2 items-center max-w-xs">
            <Icon.MapPin color={'gray'} width={15} height={15} />
            <Text className="ml-2 text-xs text-gray-700 ">
              Nearby • {data.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestuarentCard;

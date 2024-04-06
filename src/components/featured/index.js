import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../../helper/colorConstants';
import RestuarentCard from '../restuarentCard';
import {ALL_ITEMS_SCREEN} from '../../helper/routeConstants';
import {useNavigation} from '@react-navigation/native';
import {style} from './styles';

const Featured = props => {
  const {restaurants, description} = props || {};
  const navigation = useNavigation();
  const capitalizedStr =
    description.charAt(0).toUpperCase() + description.substring(1);

  return (
    <View>
      <View className="flex-row flex-1 items-center justify-between mx-4 text-center ">
        <View>
          <Text className="text-gray-700 text-lg font-bold">
            {capitalizedStr}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ALL_ITEMS_SCREEN, {
              data: restaurants,
              title: capitalizedStr,
            })
          }
          className="items-center text-center">
          <Text
            style={{color: themeColors.text}}
            className="font-semibold text-center items-center">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollStyle}
        className="overflow-visible py-5">
        {restaurants.map((item, index) => {
          return <RestuarentCard data={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Featured;

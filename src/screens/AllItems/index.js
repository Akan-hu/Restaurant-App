import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {themeColors} from '../../helper/colorConstants';
import {RESTUARANT_SCREEN} from '../../helper/routeConstants';
import {getCorrectImage} from '../../helper';
import {styles} from './styles';

const AllItems = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {data, title} = params;
  console.log('Route data', data);
  return (
    <View className="flex-1">
      <Header title={title} />
      <ScrollView className="mt-5 " showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          const correctImage = getCorrectImage(item?.image?.asset?._ref);
          return (
            <View className="flex-1 ">
              <TouchableOpacity
                key={index}
                className="flex-row mx-2 my-2 "
                onPress={() =>
                  navigation.navigate(RESTUARANT_SCREEN, {data: item})
                }>
                <Image
                  source={{
                    uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
                  }}
                  className="h-36 w-36 rounded-full z-10"
                  style={styles.imgStyle}
                />
                <View
                  className=" flex-1 my-3 -ml-8 items-center rounded-tr-2xl shadow-lg space-y-1"
                  style={styles.cardStyle}>
                  <Text className="font-bold text-sm mt-2 font-extrabold text-black">
                    {item.name}
                  </Text>
                  <Text className="font-bold  mt-1 ml-9 mr-1 text-gray-600">
                    {item.address}
                  </Text>
                  <View className="flex-row flex-1">
                    <Image
                      source={require('../../assets/images/star.png')}
                      className="h-4 w-4"
                    />
                    <Text className="ml-2">Ratings {item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AllItems;

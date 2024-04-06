import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Icon from 'react-native-feather';
import {styles} from './styles';
import Categories from '../../components/categories';
import Featured from '../../components/featured';
import {category, featured} from '../../helper/testData';
import {isIOS} from '../../helper';
import axios from 'axios';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SEARCH_SCREEN} from '../../helper/routeConstants';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../../helper/colorConstants';

const HomeScreen = () => {
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handlePaddingVertical = isIOS ? 'py-3' : 'py-0';
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://g6wazjfs.api.sanity.io/v2022-03-07/data/query/production?query=+*%5B_type%3D%3D%27featured%27%5D%7B%0A++++...%2C%0A++++restaurants%5B%5D-%3E%7B%0A++++++...%2C%0A++++++dishes%5B%5D-%3E%7B%0A++++++++...%0A++++++%7D%2C%0A++++++type-%3E%7B%0A++++++++name%0A++++++%7D%0A++++%7D%0A++%7D',
        );
        setFeatured(response?.data?.result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View className="bg-white flex-1">
      {!isLoading ? (
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          {/**Search View */}
          <View className="flex-row items-center space-x-2 px-4 pb-5 mt-2">
            <View
              className={`flex-row flex-1 items-center ${handlePaddingVertical} px-3 border rounded-full border-gray-300`}>
              <Icon.Search height={25} width={25} color={'grey'} />
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation?.navigate(SEARCH_SCREEN, {data: featured})
                }>
                <Text className=" mr-10  ">Search here...</Text>
              </TouchableWithoutFeedback>

              <View className="flex-row items-center space-x-1  border-l-2 pl-1 ">
                <Icon.MapPin height={20} width={20} stroke={'grey'} />
                <Text className="text-gray-600">Bareilly Uttar Pradesh</Text>
              </View>
            </View>
            <View className="p-2 rounded-full" style={styles.bgcolor}>
              <Icon.Sliders
                height={20}
                width={20}
                strokeWidth={2.5}
                className="p-3"
                color={'white'}
              />
            </View>
          </View>
          {/** main view */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scroll}>
            <Categories />
            <View className="mt-5">
              {featured.map((item, index) => {
                return (
                  <Featured
                    key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}
                  />
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={'large'} color={themeColors.bgColor(2)} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

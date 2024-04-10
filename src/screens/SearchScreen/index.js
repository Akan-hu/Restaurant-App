import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import * as Icon from 'react-native-feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getCorrectImage, isIOS} from '../../helper';
import {RESTUARANT_SCREEN} from '../../helper/routeConstants';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {data} = params;

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterNames, setFilterNames] = useState([]);
  // Define the function outside the component
  const filterFirst = data => {
    const restaurantNames = [];
    data.forEach(item => {
      item.restaurants.forEach(restaurantArray => {
        restaurantNames.push(restaurantArray);
      });
    });
    return restaurantNames;
  };

  useEffect(() => {
    // Call the function and update the state in useEffect
    const getFilterValue = filterFirst(data);
    setFilteredMovies(getFilterValue);
  }, [data]); // Run this effect only when 'data' changes

  const hanldeSearch = useCallback(
    value => {
      setSearchQuery(value);
      if (value) {
        const query = value.toLowerCase();
        const filteredResults = filteredMovies.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            item.address.toLowerCase().includes(query),
        );
        setFilterNames(filteredResults);
      }
    },
    [filteredMovies],
  );
  useEffect(() => {
    if (searchQuery === '') {
      setFilterNames([]);
      return;
    }
    hanldeSearch(searchQuery);
  }, [searchQuery, hanldeSearch]);
  const getVerticalPadding = isIOS ? 'py-3' : 'py-0';
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center">
        <TouchableOpacity className="ml-5" onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke={'black'} strokeWidth={3} />
        </TouchableOpacity>
        <View
          className={`border-1 ${getVerticalPadding} bg-white flex-1 mx-5 ml-2 rounded-2xl border border-opacity-5 flex-row justify-between items-center mt-2`}>
          <TextInput
            placeholder="Restaurant, location"
            placeholderTextColor={'gray'}
            onChangeText={hanldeSearch}
            autoFocus={true}
            value={searchQuery}
            className="ml-3"
          />
          <TouchableOpacity
            className="mr-2"
            onPress={() => {
              setSearchQuery(''); // Clear the search query
              setFilterNames([]); // Reset filtered movies
              Keyboard.dismiss();
            }}>
            <Icon.X stroke={'black'} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>
      {filterNames.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 mt-5">
          <View className="flex-row flex-1 items-center justify-center  flex-wrap">
            {filterNames.map((item, index) => {
              const correctImage = getCorrectImage(item?.image?.asset?._ref);

              return (
                <TouchableOpacity
                  className="mt-5 mx-2 bg-white pb-4 rounded-2xl shadow-lg px-1 items-center pt-4 "
                  onPress={() =>
                    navigation?.push(RESTUARANT_SCREEN, {data: item})
                  }
                  key={index}>
                  <Image
                    className="h-40 w-40 rounded-2xl shadow items-center "
                    source={{
                      uri: `https://cdn.sanity.io/images/g6wazjfs/production/${correctImage}`,
                    }}
                  />
                  <View className=" text-center">
                    <Text className="max-w-[200px]  text-center text-lg text-black">
                      {item.name}
                    </Text>
                    <Text className="max-w-[200px] text-center">
                      {item.address?.length > 20
                        ? item.address.slice(0, 25) + '...'
                        : item.address}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="items-center flex-1 mt-20">
          <Text>No Restaurant Found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

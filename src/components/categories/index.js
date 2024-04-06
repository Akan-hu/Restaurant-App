import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';

import sanityClient from '../../../sanity';
import client from '../../../sanity';
import {getCategories} from '../../../api';
import axios from 'axios';
import {getCorrectImage} from '../../helper';
import {themeColors} from '../../helper/colorConstants';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://g6wazjfs.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27category%27%5D',
        );
        setCategory(response.data?.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={styles.scroll}>
        {category.map((categories, key) => {
          let isActive = categories?._id == activeCategory;

          const filename = categories?.image?.asset?._ref;

          const rightImage = getCorrectImage(filename);
          return (
            <View
              className="flex justify-center items-center mr-6 shadow-lg"
              style={styles.shadowStyle}>
              <TouchableOpacity
                key={key}
                onPress={() => setActiveCategory(categories?._id)}
                style={styles.bgcolor(isActive)}
                className={'p-1 rounded-full shadow bg-gray-200'}>
                <Image
                  source={{
                    uri: `https://cdn.sanity.io/images/g6wazjfs/production/${rightImage}`,
                  }}
                  className="h-14 w-14 rounded-full"
                />
              </TouchableOpacity>
              <Text
                className={'mt-2 text-center text-sm'}
                style={styles.textColor(isActive)}>
                {categories.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

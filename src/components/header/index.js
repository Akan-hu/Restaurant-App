import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {themeColors} from '../../helper/colorConstants';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
const isIOS = Platform.OS === 'ios';
const Header = props => {
  const {title} = props;
  const navigation = useNavigation();
  const marginTop = !isIOS ? 'mt-4' : 'mt-0';
  return (
    <SafeAreaView
      style={{height: isIOS ? 120 : 75, backgroundColor: 'white'}}
      className="
    shadow-lg">
      <StatusBar style="light" />
      <View className={`flex1 flex-row ${marginTop} items-center pb-2 `}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full p-3 ml-2 shadow-sm"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <Icon.ArrowLeft stroke={'white'} strokeWidth={3} />
        </TouchableOpacity>
        <Text className="font-semibold text-xl ml-5 text-black">{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

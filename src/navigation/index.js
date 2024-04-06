import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {
  ALL_ITEMS_SCREEN,
  CART_SCREEN,
  DELIVERY_SCREEN,
  HOME_SCREEN,
  ORDER_PREPARING,
  RESTUARANT_SCREEN,
  SEARCH_SCREEN,
} from '../helper/routeConstants';
import RestuarantScreen from '../screens/RestuarantScreen';
import CartScreen from '../screens/CartScreen';
import OrderPreparing from '../screens/OrderPreparing';
import DeliveryScreen from '../screens/DeliveryScreen';
import AllItems from '../screens/AllItems';
import SearchScreen from '../screens/SearchScreen';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name={HOME_SCREEN} />
        <Stack.Screen component={RestuarantScreen} name={RESTUARANT_SCREEN} />
        <Stack.Screen
          component={CartScreen}
          name={CART_SCREEN}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen
          component={OrderPreparing}
          name={ORDER_PREPARING}
          options={{presentation: 'fullScreenModal'}}
        />
        <Stack.Screen
          component={DeliveryScreen}
          name={DELIVERY_SCREEN}
          options={{presentation: 'fullScreenModal'}}
        />
        <Stack.Screen component={AllItems} name={ALL_ITEMS_SCREEN} />
        <Stack.Screen
          component={SearchScreen}
          name={SEARCH_SCREEN}
          options={{presentation: 'fullScreenModal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

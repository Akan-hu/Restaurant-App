import {StyleSheet} from 'react-native';
import {themeColors} from '../../helper/colorConstants';

export const styles = StyleSheet.create({
  imgStyle: {
    borderWidth: 4,
    borderColor: themeColors.bgColor(2),
  },
  cardStyle: {
    borderBottomRightRadius: 55,
    shadowColor: themeColors.bgColor(2),
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 0.8,
    backgroundColor: 'white',
  },
});

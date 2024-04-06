import {StyleSheet} from 'react-native';
import {themeColors} from '../../helper/colorConstants';
import {isIOS} from '../../helper';

export const styles = StyleSheet.create({
  bgcolor: {backgroundColor: themeColors.bgColor(1)},
  scroll: {paddingBottom: 70},
});

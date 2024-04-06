const {Platform} = require('react-native');

export const isIOS = Platform.OS === 'ios';

export const getCorrectImage = initial => {
  // const initial = 'image-257d063bddb5a07b42c12a09e2dfb6181b642683-275x183-jpg';

  // Remove 'image-' with optional leading '-' using a regular expression
  const withoutImage = initial?.replace(/^-?image-/, '');

  // Find the index of the second occurrence of "-"
  const secondDashIndex = withoutImage?.indexOf(
    '-',
    withoutImage.indexOf('-') + 1,
  );

  if (secondDashIndex !== -1) {
    // Replace the second occurrence of "-" with "."
    const modified =
      withoutImage?.slice(0, secondDashIndex) +
      '.' +
      withoutImage?.slice(secondDashIndex + 1);

    return modified;
  } else {
  }
};

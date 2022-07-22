import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 600;

export const scaleWidth = size => {
  return size * (width / DESIGN_WIDTH);
};

export const scaleHeight = size => {
  return size * (height / DESIGN_HEIGHT);
};

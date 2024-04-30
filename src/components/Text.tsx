import {
  Text as RNText,
  TextStyle,
  StyleProp,
  TextProps,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../utils/colors';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  fontWeight?: 'bold' | 'regular';
  fontSize?: number;
  color?: string;
  children: string | ReactNode;
}

const Text = ({
  style,
  fontWeight,
  fontSize,
  children,
  color,
  ...props
}: Props) => {
  let fontFamily;

  switch (fontWeight) {
    case 'bold':
      fontFamily = 'Helvetica-Bold';
      break;
    case 'regular':
      fontFamily = 'Helvetica';
      break;
    default:
      fontFamily = 'Helvetica';
      break;
  }

  return (
    <RNText
      style={[
        styles.text,
        style,
        {fontFamily},
        fontSize ? {fontSize: fontSize} : {},
        color ? {color: color} : {},
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.black,
  },
});

import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {Children, ReactNode} from 'react';
import Text from './Text';
import {colors} from '../utils/colors';

interface ButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPressButton: () => void;
  children: string | ReactNode;
}

const Button = ({onPressButton, containerStyle, children}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[styles.container, containerStyle]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 42,
  },
});

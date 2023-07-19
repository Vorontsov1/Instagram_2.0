import {ReactNode} from 'react';
import {View, Text, Pressable} from 'react-native';

interface IDoublePressProps { 
    onDoublePress?: () => void;
    children: ReactNode;
}

const DoublePressable = ({ onDoublePress = () => {}, children}: IDoublePressProps) => {
      let lastTap = 0;

      const hadleDoublePress = () => {
        const now = Date.now();
        if (now - lastTap < 300) {
          onDoublePress();
        }
        lastTap = now;
      };
  return (
    <Pressable onPress={hadleDoublePress}>
        {children}
    </Pressable>
  );
};

export default DoublePressable;

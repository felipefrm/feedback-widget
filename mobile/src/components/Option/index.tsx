import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: OptionProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
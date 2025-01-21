// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';


export function TabBarIcon({ style, ...rest}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}


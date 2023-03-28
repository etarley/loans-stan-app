/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import Avatar from 'boring-avatars';

export interface AvatarProps {
  size: number;
  name: string;
  variant:
    | 'marble'
    | 'beam'
    | 'pixel'
    | 'sunset'
    | 'bauhaus'
    | 'ring'
    | 'bauhaus';
  colors: string[];
  square?: boolean;
}

export const AvatarRC = qwikify$<AvatarProps>(
  ({ size = 40, name, variant = 'marble', colors, square = false }) => {
    return (
      <Avatar
        size={size}
        name={name}
        variant={variant}
        colors={colors}
        square={square}
      />
    );
  }
);

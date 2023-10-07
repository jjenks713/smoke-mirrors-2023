'use client';

import { useMemo } from 'react';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function useSmTheme(isLight: boolean) {

  const ThemeOptions = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    [isLight]
  );

  const theme = createTheme(ThemeOptions as ThemeOptions);

  theme.components = componentsOverrides(theme);

  return theme;
}

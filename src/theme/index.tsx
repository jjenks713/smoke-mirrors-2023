'use client';

import { useMemo } from 'react';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { presets } from './options/presets';
import { darkMode } from './options/dark-mode';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import RTL, { direction } from './options/right-to-left';

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

import type { Theme } from '../types/theme';
import Color from 'color';

export function generateDefaultTheme(): Theme {
  return {
    id: 'default',
    name: 'Default Theme',
    colors: {
      primary: '#6200ee',
      primaryContainer: '#eaddff',
      onPrimary: '#ffffff',
      onPrimaryContainer: '#21005d',
      secondary: '#03dac6',
      secondaryContainer: '#cef6f0',
      onSecondary: '#000000',
      onSecondaryContainer: '#002021',
      tertiary: '#9c27b0',
      tertiaryContainer: '#ffd8e4',
      onTertiary: '#ffffff',
      onTertiaryContainer: '#31111d',
      error: '#b00020',
      errorContainer: '#ffdad6',
      onError: '#ffffff',
      onErrorContainer: '#410002',
      surface: '#ffffff',
      onSurface: '#1c1b1f',
      surfaceContainerHighest: '#e7e0ec',
      outline: '#79747e',
      onSurfaceVariant: '#49454f',
      shadow: '#000000',
      inverseSurface: '#313033',
      inversePrimary: '#d0bcff',
      onInverseSurface: '#f4eff4'
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      headlineLarge: '2.125rem',
      headlineMedium: '1.75rem',
      headlineSmall: '1.5rem',
      bodyLarge: '1rem',
      bodyMedium: '0.875rem',
      bodySmall: '0.75rem',
    },
    shape: {
      borderRadius: 4,
      elevation: 2,
    },
    isDark: false,
    appBar: {
      backgroundColor: '#6200ee',
      foregroundColor: '#ffffff',
      height: 64,
      elevation: 4,
      position: 'top'
    },
    tabBar: {
      backgroundColor: '#ffffff',
      indicatorColor: '#6200ee',
      labelColor: '#6200ee',
      unselectedLabelColor: '#757575',
      height: 48,
      indicatorHeight: 2,
      indicatorWeight: 2,
    },
    bottomNavigation: {
      backgroundColor: '#ffffff',
      selectedItemColor: '#6200ee',
      unselectedItemColor: '#757575',
      height: 56,
      elevation: 8,
      iconSize: 24,
      labelFontSize: 12,
    },
    fab: {
      backgroundColor: '#6200ee',
      foregroundColor: '#ffffff',
      size: 56,
      elevation: 6,
      extendedPadding: 16,
      iconSize: 24,
    },
    buttons: {
      filled: {
        backgroundColor: '#6200ee',
        foregroundColor: '#ffffff',
        elevation: 2,
        padding: {
          horizontal: 16,
          vertical: 8,
        },
        fontSize: 14,
        hoverOpacity: 0.08,
        pressedOpacity: 0.12,
        disabledOpacity: 0.38,
      },
      outlined: {
        backgroundColor: 'transparent',
        foregroundColor: '#6200ee',
        borderColor: '#6200ee',
        borderWidth: 1,
        elevation: 0,
        padding: {
          horizontal: 16,
          vertical: 8,
        },
        fontSize: 14,
        hoverOpacity: 0.08,
        pressedOpacity: 0.12,
        disabledOpacity: 0.38,
      },
      text: {
        backgroundColor: 'transparent',
        foregroundColor: '#6200ee',
        elevation: 0,
        padding: {
          horizontal: 8,
          vertical: 8,
        },
        fontSize: 14,
        hoverOpacity: 0.08,
        pressedOpacity: 0.12,
        disabledOpacity: 0.38,
      },
    },
    iconTheme: {
      size: 24,
      color: '#000000',
      selectedColor: '#6200ee',
      disabledColor: '#9e9e9e',
      opacity: 0.87,
      selectedOpacity: 1,
      disabledOpacity: 0.38,
    },
    inputDecoration: {
      fillColor: '#f5f5f5',
      focusedFillColor: '#f0f0f0',
      errorFillColor: '#ffebee',
      borderColor: '#e0e0e0',
      focusedBorderColor: '#6200ee',
      errorBorderColor: '#b00020',
      labelColor: '#757575',
      focusedLabelColor: '#6200ee',
      errorLabelColor: '#b00020',
      textColor: '#000000',
      hintColor: '#9e9e9e',
      errorTextColor: '#b00020',
      borderRadius: 4,
      borderWidth: 1,
      focusedBorderWidth: 2,
      padding: {
        horizontal: 12,
        vertical: 16,
      },
      fontSize: 16,
      labelFontSize: 12,
    },
    switch: {
      trackColor: '#e0e0e0',
      trackColorSelected: '#6200ee',
      trackColorDisabled: '#bdbdbd',
      thumbColor: '#ffffff',
      thumbColorSelected: '#ffffff',
      thumbColorDisabled: '#f5f5f5',
      width: 52,
      height: 32,
      thumbSize: 24,
      thumbElevation: 2,
    },
    checkbox: {
      fillColor: '#ffffff',
      activeColor: '#6200ee',
      disabledColor: '#bdbdbd',
      checkColor: '#ffffff',
      borderColor: '#757575',
      size: 18,
      borderWidth: 2,
      borderRadius: 2,
      splashRadius: 20,
      elevation: 0,
    },
    radio: {
      fillColor: '#ffffff',
      activeColor: '#6200ee',
      disabledColor: '#bdbdbd',
      borderColor: '#757575',
      size: 20,
      borderWidth: 2,
      innerSize: 10,
      splashRadius: 20,
      elevation: 0,
    },
    slider: {
      trackColor: '#e0e0e0',
      activeTrackColor: '#6200ee',
      inactiveTrackColor: '#bdbdbd',
      disabledTrackColor: '#e0e0e0',
      thumbColor: '#6200ee',
      thumbColorDisabled: '#bdbdbd',
      overlayColor: 'rgba(98, 0, 238, 0.12)',
      trackHeight: 4,
      thumbSize: 20,
      thumbElevation: 2,
      overlayRadius: 24,
    },
  };
}

export function generateColorPalette(baseColor: string): string[] {
  const color = Color(baseColor);
  const palette: string[] = [];

  // Generate 10 shades from lightest to darkest
  for (let i = 0; i < 10; i++) {
    const lightness = 90 - (i * 10);
    palette.push(color.lightness(lightness).hex());
  }

  return palette;
}
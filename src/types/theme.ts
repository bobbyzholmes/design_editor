export interface ThemeColors {
  // Primary colors
  primary: string;
  primaryContainer: string;
  onPrimary: string;
  onPrimaryContainer: string;

  // Secondary colors
  secondary: string;
  secondaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;

  // Tertiary colors
  tertiary: string;
  tertiaryContainer: string;
  onTertiary: string;
  onTertiaryContainer: string;

  // Error colors
  error: string;
  errorContainer: string;
  onError: string;
  onErrorContainer: string;

  // Neutral colors
  surface: string;
  onSurface: string;

  // Neutral variant colors
  surfaceContainerHighest: string;
  outline: string;
  onSurfaceVariant: string;
  shadow: string;

  // Inverse colors
  inverseSurface: string;
  inversePrimary: string;
  onInverseSurface: string;
}

export interface Typography {
  fontFamily: string;
  headlineLarge: string;
  headlineMedium: string;
  headlineSmall: string;
  bodyLarge: string;
  bodyMedium: string;
  bodySmall: string;
}

export interface Shape {
  borderRadius: number;
  elevation: number;
}

export interface AppBar {
  backgroundColor: string;
  foregroundColor: string;
  height: number;
  elevation: number;
  position: 'top' | 'bottom';
}

export interface TabBar {
  backgroundColor: string;
  indicatorColor: string;
  labelColor: string;
  unselectedLabelColor: string;
  height: number;
  indicatorHeight: number;
  indicatorWeight: number;
}

export interface BottomNavigation {
  backgroundColor: string;
  selectedItemColor: string;
  unselectedItemColor: string;
  height: number;
  elevation: number;
  iconSize: number;
  labelFontSize: number;
}

export interface FloatingActionButton {
  backgroundColor: string;
  foregroundColor: string;
  size: number;
  elevation: number;
  extendedPadding: number;
  iconSize: number;
}

export interface ButtonStyles {
  backgroundColor: string;
  foregroundColor: string;
  borderColor?: string;
  elevation: number;
  padding: {
    horizontal: number;
    vertical: number;
  };
  fontSize: number;
  borderWidth?: number;
  hoverOpacity: number;
  pressedOpacity: number;
  disabledOpacity: number;
}

export interface Buttons {
  filled: ButtonStyles;
  outlined: ButtonStyles;
  text: ButtonStyles;
}

export interface IconTheme {
  size: number;
  color: string;
  selectedColor: string;
  disabledColor: string;
  opacity: number;
  selectedOpacity: number;
  disabledOpacity: number;
}

export interface InputDecoration {
  fillColor: string;
  focusedFillColor: string;
  errorFillColor: string;
  borderColor: string;
  focusedBorderColor: string;
  errorBorderColor: string;
  labelColor: string;
  focusedLabelColor: string;
  errorLabelColor: string;
  textColor: string;
  hintColor: string;
  errorTextColor: string;
  borderRadius: number;
  borderWidth: number;
  focusedBorderWidth: number;
  padding: {
    horizontal: number;
    vertical: number;
  };
  fontSize: number;
  labelFontSize: number;
}

export interface Switch {
  trackColor: string;
  trackColorSelected: string;
  trackColorDisabled: string;
  thumbColor: string;
  thumbColorSelected: string;
  thumbColorDisabled: string;
  width: number;
  height: number;
  thumbSize: number;
  thumbElevation: number;
}

export interface Checkbox {
  fillColor: string;
  activeColor: string;
  disabledColor: string;
  checkColor: string;
  borderColor: string;
  size: number;
  borderWidth: number;
  borderRadius: number;
  splashRadius: number;
  elevation: number;
}

export interface Radio {
  fillColor: string;
  activeColor: string;
  disabledColor: string;
  borderColor: string;
  size: number;
  borderWidth: number;
  innerSize: number;
  splashRadius: number;
  elevation: number;
}

export interface Slider {
  trackColor: string;
  activeTrackColor: string;
  inactiveTrackColor: string;
  disabledTrackColor: string;
  thumbColor: string;
  thumbColorDisabled: string;
  overlayColor: string;
  trackHeight: number;
  thumbSize: number;
  thumbElevation: number;
  overlayRadius: number;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  typography: Typography;
  shape: Shape;
  isDark: boolean;
  appBar: AppBar;
  tabBar: TabBar;
  bottomNavigation: BottomNavigation;
  fab: FloatingActionButton;
  buttons: Buttons;
  iconTheme: IconTheme;
  inputDecoration: InputDecoration;
  switch: Switch;
  checkbox: Checkbox;
  radio: Radio;
  slider: Slider;
}
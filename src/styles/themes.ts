export const lightTheme = {
  colors: {
    primary: '#4f46e5',
    primaryLight: '#818cf8',
    primaryDark: '#3730a3',
    primaryGhost: 'rgba(79, 70, 229, 0.08)',
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceElevated: '#ffffff',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#64748b',
    textMuted: '#94a3b8',
    success: '#059669',
    successLight: '#d1fae5',
    error: '#dc2626',
    errorLight: '#fef2f2',
    warning: '#d97706',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    size: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      xxl: '28px',
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  }
};

export const darkTheme = {
  colors: {
    primary: '#818cf8',
    primaryLight: '#a5b4fc',
    primaryDark: '#6366f1',
    primaryGhost: 'rgba(129, 140, 248, 0.1)',
    background: '#0f172a',
    surface: '#1e293b',
    surfaceElevated: '#293548',
    border: '#334155',
    borderLight: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    success: '#34d399',
    successLight: 'rgba(52, 211, 153, 0.15)',
    error: '#f87171',
    errorLight: 'rgba(248, 113, 113, 0.15)',
    warning: '#fbbf24',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    size: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      xxl: '28px',
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
    xl: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
  }
};

export type ThemeType = typeof lightTheme;
export type ThemeKey = 'light' | 'dark';
export const themes: Record<ThemeKey, ThemeType> = {
  light: lightTheme,
  dark: darkTheme,
};

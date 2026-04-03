export const theme = {
  colors: {
    primary: '#4361ee',
    primaryHover: '#3a56d4',
    background: '#ffffff',
    surface: '#f8f9fa',
    border: '#dee2e6',
    text: '#212529',
    textSecondary: '#6c757d',
    error: '#dc3545',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    }
  }
};

export type ThemeType = typeof theme;

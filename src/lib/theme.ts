export const theme = {
  colors: {
    // govguru24 Primary
    primary: '#414045',
    secondary: '#42409F',
    success: '#409f71',

    // egovc Accents
    accent: '#F72585',
    accentAlt: '#40E1AB',
    accentCyan: '#15DBD5',

    // Backgrounds
    background: '#f9f9f9',
    backgroundDark: '#121212',

    // Text
    text: '#38362d',
    textMuted: '#4B4F58',
    textLight: '#ffffff',
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
} as const;

export type Theme = typeof theme;

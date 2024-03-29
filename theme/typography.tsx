import { pxToRem, responsiveFontSizes } from '@/utils/getFontValue';

const FONT_FAMILY = 'Plus Jakarta Sans;';

const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(36),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 36, md: 36, lg: 36 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 32, md: 32, lg: 32 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 24, lg: 24 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 20, sm: 20, md: 20, lg: 20 }),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 12, lg: 12 }),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body3: {
    lineHeight: 22 / 12,
    fontSize: pxToRem(12),
  },
  body4: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    fontWeight: 500,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  formTopHeading: {
    fontWeight: 600,
    fontSize: pxToRem(18),
  },
  customStyle: {
    fontSize: pxToRem(12),
    color: '#fff',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    formTopHeading: React.CSSProperties;
    customStyle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    formTopHeading?: React.CSSProperties;
    customStyle: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    formTopHeading: true;
    customStyle: true;
    body3: true;
    body4: true;
  }
}

export default typography;

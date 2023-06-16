export interface Typographies {
  display20: TypographyVariant;
  title40: TypographyVariant;
  title30: TypographyVariant;
  title20: TypographyVariant;
  title10: TypographyVariant;
  body30: TypographyVariant;
  body20: TypographyVariant;
  body10: TypographyVariant;
  caption30: TypographyVariant;
  caption20: TypographyVariant;
  caption10: TypographyVariant;
}
export type TypographyType = keyof Typographies;
type TypographyVariant = {
  fontSize: number;
  fontWeight: number;
};

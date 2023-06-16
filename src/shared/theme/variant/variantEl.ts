import { ColorProps, colors } from "../colors";
import {
  ColorHelper,
  ColorObject,
  VariantOptions,
  defaultValues,
} from "../../helpers";
import { VariantElProps } from "./VariantEl.Props";

export type VariantsProps = {
  [key: string]: VariantElProps;
};

/**
 * @param value
 *  @param options
 */
export const createVariant = (
  value: string | VariantElProps,
  options: boolean | VariantOptions = true
): VariantElProps => {
  const variantOptions = options as VariantOptions;
  let variant: VariantElProps;
  let color: ColorObject;

  /**
   *  check if value is string return object else return value
   */

  if (typeof value === "string")
    variant = {
      main: value,
    };
  else variant = value;

  /**
   *  check if main color is available
   */
  try {
    color = ColorHelper.getColor(variant.main);
  } catch (ignored) {
    throw "Main color is not valid.";
  }

  // utils
  if (options === true || variantOptions.util) {
    variant.font = variant.font || ColorHelper.getFontColor(variant.main);
    variant.dark =
      variant.dark || color.darken(defaultValues.DARK_LEVEL).hex().toString();
    variant.darker =
      variant.darker ||
      color.darken(defaultValues.DARKER_LEVEL).hex().toString();
    variant.darkest =
      variant.darkest ||
      ColorHelper.getColor(variant.darker)
        .darken(defaultValues.DARK_LEVEL)
        .hex()
        .toString();
    variant.light =
      variant.light || color.darken(defaultValues.LIGHT_LEVEL).hex().toString();
    variant.lighter =
      variant.lighter ||
      color.darken(defaultValues.LIGHTER_LEVEL).hex().toString();
    variant.lightest =
      variant.lightest ||
      ColorHelper.getColor(variant.lighter)
        .darken(defaultValues.LIGHT_LEVEL)
        .hex()
        .toString();
    variant.shadow =
      variant.shadow ||
      color.alpha(defaultValues.SHADOW_FADE_LEVEL).rgb().toString();
  }

  //generate button variant

  if (options === true || variantOptions.button) {
    variant.button = variant.button || {};
    variant.button.background =
      variant.button.background || colors.defaultValues.buttonBg;
    variant.button.placeholder = variant.button.placeholder || variant.main;
    variant.button.placeholderFill =
      variant.button.placeholderFill || ColorHelper.getFontColor(variant.main);
  }

  //waveeffect
  if (options === true || variantOptions.waveEffect) {
    variant.waveEffect = variant.waveEffect || {};
    const waveEffectColor = ColorHelper.getColor(
      variant.waveEffect.color || variant.main
    );
    variant.waveEffect.color = `radial-gradient(${waveEffectColor
      .alpha(0.2)
      .toString()} 0, ${waveEffectColor
      .alpha(0.3)
      .toString()} 40%, ${waveEffectColor
      .alpha(0.4)
      .toString()} 50%, ${waveEffectColor
      .alpha(0.5)
      .toString()} 60%, ${waveEffectColor.alpha(0).toString()} 70%)`;
  }
  // form
  if (options === true || variantOptions.form) {
    variant.form = variant.form || {};
    variant.form.disabledBackgroundColor =
      colors.defaultValues.FORM_DISABLED_BG_COLOR;
    variant.form.radioColor =
      variant.form.radioColor || colors.defaultValues.FORM_RADIO_COLOR;
    variant.form.radioBorder =
      variant.form.radioBorder || colors.defaultValues.FORM_RADIO_BORDER_COLOR;
    variant.form.inputBackground =
      variant.form.inputBackground || colors.defaultValues.FORM_INPUT_BG_COLOR;
    variant.form.inputBorder =
      variant.form.inputBorder || colors.defaultValues.FORM_INPUT_BORDER_COLOR;
    variant.form.inputFont =
      variant.form.inputFont ||
      ColorHelper.getFontColor(variant.form.inputBackground as string);
    variant.form.inputPlaceholder =
      variant.form.inputPlaceholder ||
      colors.defaultValues.FORM_INPUT_PLACEHOLDER_COLOR;
    variant.form.inputPlaceholderFill =
      variant.form.inputPlaceholderFill ||
      ColorHelper.getColor(variant.font as string)
        .alpha(defaultValues.FORM_INPUT_PLACEHOLDER_FILL_FADE_LEVEL)
        .rgb()
        .toString();
  }

  return variant;
};

export const variantEl = {
  primary: createVariant(colors.primary.light),
  secondary: createVariant(colors.secondary.dark),
  success: createVariant({
    main: colors.success.default,
    font: colors.text.body.dark,
  }),
  danger: createVariant({
    main: colors.danger.default,
    font: colors.text.body.dark,
  }),
  warning: createVariant({
    main: colors.warning.default,
    font: colors.text.body.dark,
  }),
  info: createVariant({
    main: colors.info.default,
    font: colors.text.body.dark,
  }),
  light: createVariant({
    main: colors.gray.gray300,
    font: colors.text.body.light,
  }),
  dark: createVariant({
    main: colors.gray.gray700,
    font: colors.text.body.dark,
  }),
  white: createVariant({
    main: colors.white.default,
    font: colors.text.body.light,
  }),
  black: createVariant({
    main: colors.dark.default,
    font: colors.text.body.dark,
  }),
};

import Color from "color";

const colorPrimary = "#4357AD";
const colorSecondary = "#3EAA96";
const colorAccent = colorPrimary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(1.575)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(0.95)
  .hex();

const colorAccentFaint = colorSecondaryFaint;

const colorSidebar = "#161b25";

export const themeBlue = {
  colorPrimary,
  colorSecondary,
  colorAccent,
  colorAccentFaint,
  colorPrimaryFaint,
  colorSecondaryFaint,
  colorSidebar
};

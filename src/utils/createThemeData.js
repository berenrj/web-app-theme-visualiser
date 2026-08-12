import getHexFromTailwindColour from "./getHexFromTailwindColour";

export default function createThemeData(theme) {
  const getColourData = (value, prefix) => {
    const [colour, shade] = value.split("-");

    return {
      tailwindClass: `${prefix}-${value}`,
      hex: getHexFromTailwindColour(
        colour,
        Number(shade)
      )
    };
  };

  return {
    primaryBg: getColourData(theme.bg.primary, "bg"),
    secondaryBg: getColourData(theme.bg.secondary, "bg"),
    tertiaryBg: getColourData(theme.bg.tertiary, "bg"),
    quaternaryBg: getColourData(theme.bg.quaternary, "bg"),

    headingTextColour: getColourData(theme.text.heading, "text"),
    contentTextColour: getColourData(theme.text.content, "text"),
    linkTextColour: getColourData(theme.text.link, "text")
  };
}
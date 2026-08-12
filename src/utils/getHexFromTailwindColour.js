import colourMap from './colourMap'

export default function getHexFromTailwindColour(tailwindColourName, sliderValue) {
    // will return a hex colour string from the given tailwind colour, and slider value (50 - 950)
    return colourMap[tailwindColourName][sliderValue];
}
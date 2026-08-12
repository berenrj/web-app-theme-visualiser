import getHexFromTailwindColour from "../../utils/getHexFromTailwindColour";

const tailwindColourNames = [
    "Red", "Orange", "Amber", "Yellow", 
    "Lime", "Green", "Emerald", "Teal",
    "Cyan", "Sky", "Blue", "Indigo",
    "Violet", "Purple", "Fuchsia", "Pink", "Rose",
    "Slate", "Gray", "Zinc", "Neutral", "Stone"
];

const tailwindColourShades = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

const isLightBackground = (hex) => {
    if (hex.length == 7) {
        const rgb = [
            parseInt(hex.substring(1, 3), 16),
            parseInt(hex.substring(3, 5), 16),
            parseInt(hex.substring(5), 16)
        ];
        const luminance = 
            (0.2126 * rgb[0]) / 255 + 
            (0.7152 * rgb[1]) / 255 + 
            (0.0722 * rgb[2]) / 255;
        return luminance > 0.5;
    }
    return false;
}

export default function ColourControl({inputName, theme, themeGroup, themeKey, onChange}) {
    
  const currentColourValue = theme[themeGroup][themeKey];
  const [currentColour, currentShade] = currentColourValue.split("-");

  const shadeIndex = tailwindColourShades.indexOf(Number(currentShade));

  const hexColour = getHexFromTailwindColour(currentColour, Number(currentShade));

  const inputId = `${themeGroup}-${themeKey}`;

  return (
    <div className="shadow-[inset_0_0_0_1px_black] rounded-md
    grid grid-cols-12 grid-flow-row
    relative
    content-center
    items-center
    justify-items-stretch
    min-h-7 max-h-9
    gap-x-1
    bg-gray-300
    ">

        <label htmlFor={inputId} className="
        col-span-5 md:col-span-4 lg:col-span-5
        h-full
        p-1
        leading-6
        text-sm md:text-base
        border-r border-gray-500 rounded-r-sm
        ">
            {inputName}
        </label>

        <select className="
        cursor-pointer 
        col-span-2
        min-h-7 max-h-9
        pl-1
        text-sm md:text-base
        " 
        name="colour-select" 
        id={inputId}
        value={currentColour} 
        onChange={e => {
            onChange(themeGroup, themeKey, `${e.target.value}-${currentShade}`)
        }}>
            {tailwindColourNames.map(colourName => (
                <option 
                key={colourName} 
                value={colourName.toLowerCase()}
                >
                    {colourName}
                </option>
            ))}
        </select>

        <input className=" 
        cursor-pointer
        col-span-3 md:col-span-4 lg:col-span-3
        select-auto
        accent-amber-600
        " 
        type="range" 
        name="shade-range" 
        min="0" 
        max="10" 
        step="1" 
        value={shadeIndex}
        onChange={e => {
            const newShade = tailwindColourShades[Number(e.target.value)];
            onChange(themeGroup, themeKey, `${currentColour}-${newShade}`)
        }}
        />

        <div className="
        box-border shadow-[inset_0_0_0_1px_gray] rounded-md
        col-span-2
        min-h-7
        mr-[2px]
        text-xs text-center
        content-center
        "
        style={{ 
            backgroundColor: hexColour,
            color: isLightBackground(hexColour) ? "#000000" : "#ffffff"
        }}
        >
            <div className="flex flex-col leading-[0.95] font-extralight">
                <span>{hexColour}</span>
                <span>{currentColourValue}</span>
            </div>
            
        </div>

    </div>
  )
}

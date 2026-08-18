import ColourControl from "../common/ColourControl"
import checkBox from "../../icons/check-box.svg"
import { useEffect, useState } from "react";
import createThemeData from "../../utils/createThemeData"

export default function ControlsContainer({theme, onChange}) {

  const [copied, setCopied] = useState(false);

  async function handleCopyTheme() {
    const themeData = createThemeData(theme);

    await navigator.clipboard.writeText(
      JSON.stringify(themeData, null, 2)
    );

    setCopied(true);
  }

  useEffect(() => {
    setCopied(false);
  },[theme]);

  return (
    <div className="
    box-border border border-1 border-gray-500
    lg:rounded-l-md
    w-full lg:w-1/2
    h-1/2 lg:h-auto
    min-h-0
    max-h-[640px]
    overflow-y-auto
    flex flex-col
    gap-y-0 md:gap-y-1 lg:gap-y-3
    px-3 py-0 md:py-1 lg:py-3
    font-content
    select-none
    bg-stone-300
    ">

      <h1 className="text-lg sm:text-xl">
        Theme Controls
      </h1>
      <div className="
      flex flex-col
      pt-0 md:pt-1 lg:pt-5
      gap-1 md:gap-2 lg:gap-5
      ">

        <h5 className="
        text-xs sm:text-base
        ">
          Background Colours
        </h5>
        <ColourControl 
        inputName="Primary (Main)" 
        theme={theme} 
        themeGroup="bg" themeKey="primary" 
        onChange={onChange} 
        />
        <ColourControl 
        inputName="Secondary (Banner)" 
        theme={theme} 
        themeGroup="bg" themeKey="secondary" 
        onChange={onChange} 
        />
        <ColourControl 
        inputName="Tertiary (Articles)" 
        theme={theme} 
        themeGroup="bg" themeKey="tertiary" 
        onChange={onChange} 
        />
        <ColourControl 
        inputName="Quaternary (Links/Aside)" 
        theme={theme} 
        themeGroup="bg" themeKey="quaternary" 
        onChange={onChange} 
        />

        <h5 className="
        text-xs sm:text-base
        ">
          Text Colours
        </h5>
        <ColourControl 
        inputName="Heading Colour" 
        theme={theme} 
        themeGroup="text" themeKey="heading" 
        onChange={onChange} 
        />
        <ColourControl 
        inputName="Content Colour" 
        theme={theme} 
        themeGroup="text" themeKey="content" 
        onChange={onChange} 
        />
        <ColourControl 
        inputName="Link Colour" 
        theme={theme} 
        themeGroup="text" themeKey="link" 
        onChange={onChange} 
        />

      </div>

        <div className="layout
        relative
        w-28
        md:mx-auto
        flex flex-row flex-0
        mt-1 sm:mt-3 lg:mt-3
        gap-x-1
        h-7
        ">
          <button className="
          w-28
          bg-amber-600 hover:bg-amber-500
          text-gray-50
          text-sm md:text-base
          rounded-md
          "
          onClick={handleCopyTheme}
          >
            Copy Theme
          </button>

          <img className={`
          absolute
          h-full
          left-full
          ml-1
          ${copied ? 'animate-[checkbox-pop_0.2s_ease-out]' : 'hidden'}
          `} 
          src={checkBox} 
          alt="Copied!" 
          />

        </div>

    </div>
  )
}

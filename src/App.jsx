import { useState } from 'react'
import Banner from './components/sections/Banner';
import ControlsContainer from './components/sections/ControlsContainer';
import Visualiser from './components/sections/Visualiser';

import getHexFromTailwindColour from './utils/getHexFromTailwindColour'

const defaultTheme = {
  bg: {
    primary: "gray-800", // Main Background
    secondary: "gray-700", // Banner Background
    tertiary: "gray-600", // Article Background
    quaternary: "gray-500" // Sidebar/Buttons Background
  },
  text: {
    heading: "gray-50", // Heading Text
    content: "gray-100", // Content Text
    link: "gray-100" // Sidebar/Buttons Text
  }
}

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  function handleThemeChange(themeGroup, themeKey, colourValue) {
    setTheme(prevTheme => ({
      ...prevTheme,
      [themeGroup]: {
        ...prevTheme[themeGroup],
        [themeKey]: colourValue
      }
    }));
  }

  return (
    <>
    <Banner />

    <main className="
    mx-auto mt-0 lg:mt-3
    flex flex-col-reverse lg:flex-row
    max-w-[1360px]
    lg:h-auto
    h-[calc(100vh-40px)]
    lg:min-h-[500px]
    overflow-hidden
    ">

      <ControlsContainer theme={theme} onChange={handleThemeChange} />

      <Visualiser theme={theme} />

    </main>
    </> 
  )
}

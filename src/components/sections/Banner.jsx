import paintBrushLogo from '../../icons/paint-brush-logo.png'
import tailwindLogo from '../../icons/tailwind-css-logo-orange.svg'

export default function Banner() {
  return (
    <header className="
    mx-auto
    max-w-[1360px]
    h-[40px]
    cursor-default
    flex flex-row
    items-center
    bg-amber-600
    border-x-0 border-b-2 border-amber-800
    lg:rounded-b-md
    ">

      <div className="
      relative
      flex flex-row
      w-full
      items-center
      justify-center
      ">

        <img src={paintBrushLogo} alt="Brush Logo" className="
        absolute
        w-8 h-8
        left-1
        "/>

        <h1 className="
        font-banner
        text-gray-50
        ">
          Web App Theme Visualiser
        </h1>

        <p className="
        absolute
        right-11
        text-xs md:text-sm
        font-semibold
        text-orange-300 
        invisible sm:visible
        ">
          <i>Tailwind CSS</i>
        </p>

        <a className="
        absolute
        w-8 h-8
        right-1
        bg-orange-300 rounded-[10%]
        cursor-pointer
        " 
        href="https://tailwindcss.com/"
        target="_blank"
        >
          <img src={tailwindLogo} alt="Tailwind Logo"/>        
        </a>
      </div>

    </header>
  )
}
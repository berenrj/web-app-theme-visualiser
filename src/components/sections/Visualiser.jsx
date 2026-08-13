import VisualiserGraphic from "../common/VisualiserGraphic";


export default function Visualiser({theme}) {
  return (
    <div className="
    box-border lg:border-l-0 border border-1 border-gray-500
    lg:rounded-r-md
    w-full lg:w-1/2
    h-1/2 lg:h-auto
    min-h-[360px]
    flex flex-col
    justify-center
    gap-y-1 lg:gap-y-5
    px-3 pb-1 py-0 md:py-1 lg:py-3
    bg-white
    cursor-default
    select-none
    ">

      <h1 className="text-lg sm:text-xl">
        Preview
      </h1>
      
      <VisualiserGraphic theme={theme} />

    </div>
  )
}

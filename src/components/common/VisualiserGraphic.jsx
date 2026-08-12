import getHexFromTailwindColour from "../../utils/getHexFromTailwindColour"


export default function VisualiserGraphic({theme}) {

  // Parse tailwind colour class and store equivalent hex string

  // Background Colours
  const primaryBg = getHexFromTailwindColour(...theme.bg.primary.split("-"));
  const secondaryBg = getHexFromTailwindColour(...theme.bg.secondary.split("-"));
  const tertiaryBg = getHexFromTailwindColour(...theme.bg.tertiary.split("-"));
  const quaternaryBg = getHexFromTailwindColour(...theme.bg.quaternary.split("-"));

  // Text Colours
  const headingTextCol = getHexFromTailwindColour(...theme.text.heading.split("-"));
  const contentTextCol = getHexFromTailwindColour(...theme.text.content.split("-"));
  const linkTextCol = getHexFromTailwindColour(...theme.text.link.split("-"));

  return (
    <div className="
    flex
    lg:flex-1
    items-center
    justify-center
    overflow-hidden
    box-border
    ">
      <div className="
      aspect-[4/3]
      border-2 border-gray-500
      rounded-md
      h-full
      max-w-full
      "
      style={{ backgroundColor: primaryBg }}
      >

        <div className="
        flex
        h-full
        ">

          <aside className="
          w-[10%] lg:w-[20%]
          flex-1
          "
          style={{ backgroundColor: quaternaryBg }}
          >
          </aside>

          <div className="
          flex
          flex-col
          w-[90%] lg:w-[85%]
          ">

            <header className="
            h-[10%]
            flex flex-row
            items-center
            justify-evenly
            px-1
            gap-x-3
            "
            style={{
              backgroundColor: secondaryBg,
              color: headingTextCol
            }}
            >
              <h3>HEADING</h3>

              <div className="
              flex flex-row
              gap-x-3
              ">
                <a className="rounded-sm 
                px-3
                "
                style={{ 
                  backgroundColor: quaternaryBg,
                  color: linkTextCol
                }}
                >
                  LINK
                </a>
                <a className="rounded-sm 
                px-3
                "
                style={{ 
                  backgroundColor: quaternaryBg,
                  color: linkTextCol
                }}
                >
                  LINK
                </a>
                <a className="rounded-sm 
                px-3
                "
                style={{ 
                  backgroundColor: quaternaryBg,
                  color: linkTextCol
                }}
                >
                  LINK
                </a>
                <a className="rounded-sm 
                px-3
                "
                style={{ 
                  backgroundColor: quaternaryBg,
                  color: linkTextCol
                }}
                >
                  LINK
                </a>                                
              </div>

            </header>

            <main className="
            flex-1
            flex flex-col
            items-center
            justify-evenly
            m-3
            ">
              <article className="rounded-sm 
              w-full
              flex flex-col
              lg:gap-y-1
              p-1
              "
              style={{ backgroundColor: tertiaryBg }}
              >
                <h5 className="pb-1"
                style={{ color: headingTextCol }}
                >
                  Heading
                </h5>
                <p className="rounded-md 
                text-sm
                tracking-tighter lg:tracking-normal 
                leading-none lg:leading-normal
                pb-1
                "
                style={{ color: contentTextCol }}
                >
                  Content content content content content content content content content content content content
                  content content content content content content content content content
                </p>
                <div className="
                flex flex-row
                items-center
                justify-end
                p-0 pt-1
                gap-x-1
                ">
                  <a className="rounded-sm 
                  px-3
                  "
                  style={{ 
                    backgroundColor: quaternaryBg,
                    color: linkTextCol
                  }}
                  >
                    Link
                  </a>
                  <a className="rounded-sm 
                  px-3
                  "
                  style={{ 
                    backgroundColor: quaternaryBg,
                    color: linkTextCol
                  }}
                  >
                    Link
                  </a>
                </div>
              </article>

              <article className="rounded-sm 
              w-full
              flex flex-col
              lg:gap-y-1
              p-1
              "
              style={{ backgroundColor: tertiaryBg }}
              >
                <h5 className="pb-1"
                style={{ color: headingTextCol }}
                >
                  Heading
                </h5>
                <p className="rounded-md 
                text-sm
                tracking-tighter lg:tracking-normal 
                leading-none lg:leading-normal
                pb-1
                "
                style={{ color: contentTextCol }}
                >
                  Content content content content content content content content content content content content
                  content content content content content content content content content
                </p>
                <div className="
                flex flex-row
                items-center
                justify-end
                p-0 pt-1
                gap-x-1
                ">
                  <a className="rounded-sm 
                  px-3
                  "
                  style={{ 
                    backgroundColor: quaternaryBg,
                    color: linkTextCol
                  }}
                  >
                    Link
                  </a>
                  <a className="rounded-sm 
                  px-3
                  "
                  style={{ 
                    backgroundColor: quaternaryBg,
                    color: linkTextCol
                  }}
                  >
                    Link
                  </a>
                </div>
              </article>              

            </main>

          </div>

        </div>


      </div>
    </div>
  )
}

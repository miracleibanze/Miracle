import Tagline from "./Tagline"


const Heading = ({className, title, title2, span, span2, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center`}>
      {tag && <Tagline className='mb-4'>{tag}</Tagline>}
        <div>
          {title && <h2 className="h2 text-white">{title}&nbsp;<span className="h2 mt-4 text-color-4 span">{span}</span></h2>}
          {title2 && <h2 className="h2 text-white">{title2}&nbsp;<span className="h2 mt-4 text-color-4 span">{span2}</span></h2>}
        </div>
    </div>
  )
}

export default Heading
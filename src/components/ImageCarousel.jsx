import { useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { productImages } from "../assets/imagedata"
import { useGlobalContext } from "../context/context"

const ImageCarousel = () => {
  const {} = useGlobalContext()
  const carouselRef = useRef(null)

  return (
    <Splide
      options={{
        pagination: false,
      }}
      ref={carouselRef}
    >
      {productImages.map((image, idx) => {
        const { url, alt } = image
        return (
          <SplideSlide key={idx}>
            <button>
              <img src={url} alt={alt} />
            </button>
          </SplideSlide>
        )
      })}
    </Splide>
  )
}

export default ImageCarousel

import { useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useGlobalContext } from "../context/context"
import styled from "styled-components"

const ImageCarousel = ({ productImages, productThumbnails }) => {
  const {} = useGlobalContext()
  const carouselRef = useRef(null)

  return (
    <CarouselWrapper>
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
      <div className="thumbnails">
        {productThumbnails.map((thumbnail, idx) => {
          const { url, alt } = thumbnail
          return (
            <button onClick={() => carouselRef.current.go(idx)}>
              <img src={url} alt={alt} />
            </button>
          )
        })}
      </div>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.section`
  

  .splide__track {
    height: 100%;
  }

  .thumbnails {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .thumbnails {
      display: flex;
      gap: 3rem;
    }
  }
`

export default ImageCarousel

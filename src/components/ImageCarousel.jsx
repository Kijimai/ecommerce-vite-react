import { useRef, useState, useEffect } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useGlobalContext } from "../context/context"
import styled from "styled-components"

const ImageCarousel = ({ productImages, productThumbnails }) => {
  // const [currentIndex, setCurrentIndex] = useState(null)
  const {
    state: { screenWidth },
  } = useGlobalContext()
  const carouselRef = useRef(null)

  useEffect(() => {}, [])

  return (
    <CarouselWrapper>
      <Splide
        options={{
          pagination: false,
          height: `${
            screenWidth < 601
              ? "30rem"
              : screenWidth < 768
              ? "40rem"
              : "44.5rem"
          }`,
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
            <button
              className="thumb-btn"
              key={idx}
              onClick={() => {
                carouselRef.current.go(idx)
              }}
            >
              <img src={url} alt={alt} />
            </button>
          )
        })}
      </div>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.section`
  .splide {
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
  }

  .thumbnails {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    max-width: 80%;
    margin: 0 auto;

    .thumbnails {
      display: flex;
      gap: 3rem;

      .thumb-btn {
        border-radius: 1rem;
        overflow: hidden;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    max-width: 100%;

    .splide__slide img {
      border-radius: 1.5rem;
    }

    .splide__arrow--next,
    .splide__arrow--prev {
      display: none;
    }
  }
`

export default ImageCarousel

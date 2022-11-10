import { useRef, useState, useEffect } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useGlobalContext } from "../context/context"
import ImageOverlay from "./ImageOverlay"
import styled from "styled-components"

const ImageCarousel = ({ productImages, productThumbnails }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const {
    state: { screenWidth, showingOverlay },
    showImageOverlay,
  } = useGlobalContext()

  // Carousel and Overlay refs
  const carouselRef = useRef(null)
  const overlayRef = useRef(null)

  const splideOptions = {
    pagination: false,
    height: `${
      screenWidth < 601 ? "30rem" : screenWidth < 768 ? "40rem" : "44.5rem"
    }`,
    type: "loop",
    autoWidth: false,
    perPage: 1,
    drag: false,
  }

  return (
    <>
      <CarouselWrapper>
        <Splide
          onClick={() => {
            showImageOverlay()
            if (carouselRef.current && overlayRef.current) {
              overlayRef.current.sync(carouselRef.current.splide)
              setImageIndex(carouselRef.current.splide.index)
            }
          }}
          options={splideOptions}
          ref={carouselRef}
          onMove={() => setImageIndex(carouselRef.current.splide.index)}
        >
          {productImages.map((image, idx) => {
            const { url, alt } = image
            return (
              <SplideSlide key={idx}>
                <img src={url} alt={alt} />
              </SplideSlide>
            )
          })}
        </Splide>
        <div className="thumbnails">
          {productThumbnails.map((thumbnail, idx) => {
            const { url, alt } = thumbnail
            return (
              <button
                className={`thumb-btn ${imageIndex === idx ? "active" : ""}`}
                key={idx}
                onClick={() => {
                  setImageIndex(idx)
                  carouselRef.current.go(idx)
                }}
              >
                <img src={url} alt={alt} />
              </button>
            )
          })}
        </div>
      </CarouselWrapper>
      {showingOverlay && (
        <ImageOverlay
          carouselRef={carouselRef}
          overlayRef={overlayRef}
          productImages={productImages}
          productThumbnails={productThumbnails}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      )}
    </>
  )
}

const CarouselWrapper = styled.section`
  .splide {
    cursor: pointer;
    width: 100%;
  }

  .splide__track {
    /* margin: 0 auto; */
  }

  .splide__arrow {
    background-color: hsl(var(--white));
    opacity: 1;
    height: 4rem;
    width: 4rem;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
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

    .splide__arrow {
      display: none;
    }

    .thumbnails {
      display: flex;
      gap: 3rem;

      .thumb-btn {
        border-radius: 1rem;
        overflow: hidden;
        transition: 0.3s ease opacity;

        &.active {
          img {
            opacity: 0.5;
          }
          outline: 0.2rem solid hsl(var(--orange));
        }

        &:hover {
          opacity: 0.8;
        }
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

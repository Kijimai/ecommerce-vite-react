import { useState } from "react"
import styled from "styled-components"
import { Close } from "../icons/index"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useGlobalContext } from "../context/context"

const ImageOverlay = ({ productImages, productThumbnails, overlayRef }) => {
  const { hideImageOverlay, showingOverlay } = useGlobalContext()
  const [] = useState(0)
  return (
    <OverlayWrapper>
      <div className="inner-overlay">
        <button className="close-btn" onClick={hideImageOverlay}>
          <Close />
        </button>
        <Splide
          options={{ autoWidth: false, pagination: false, type: "loop" }}
          ref={overlayRef}
        >
          {productImages.map((image, idx) => {
            const { url, alt } = image
            return (
              <SplideSlide>
                <button key={idx}>
                  <img src={url} alt={alt} />
                </button>
              </SplideSlide>
            )
          })}
        </Splide>
        <div className="thumbnails">
          {productThumbnails.map((thumbnail, idx) => {
            return (
              <button key={idx}>
                <img src={thumbnail.url} alt={thumbnail.alt} />
              </button>
            )
          })}
        </div>
      </div>
    </OverlayWrapper>
  )
}

const OverlayWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: hsl(var(--black) / 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;

    .close-btn {
      margin-bottom: 2.4rem;
    }

    .splide {
      width: 55rem;
      height: 55rem;
      margin-bottom: 4rem;
    }

    .splide__slide {
      overflow: hidden;
      border-radius: 1.5rem;
      width: 55rem;
      height: 55rem;
    }

    .splide__arrow,
    .splide__arrow:disabled {
      opacity: 1;
    }

    .splide__arrow {
      background-color: hsl(var(--white));
      height: 5.6rem;
      width: 5.6rem;
    }

    .splide__arrow--prev {
      left: -2.8rem;
    }

    .splide__arrow--next {
      right: -2.8rem;
    }

    img {
      display: block;
      width: 100%;
    }
    .close-btn {
      align-self: flex-end;
    }

    .thumbnails {
      display: flex;
      justify-content: space-around;
      gap: 3.1rem;

      button {
        overflow: hidden;
        height: 8.8rem;
        width: 8.8rem;
        border-radius: 1rem;
      }
    }
  }
`

export default ImageOverlay

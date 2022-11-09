import styled from "styled-components"
import { Close } from "../icons/index"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

const ImageOverlay = ({ productImages, overlayRef }) => {

  return (
    <OverlayWrapper>
      <button>
        <Close />
      </button>
      <Splide ref={overlayRef}>
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
    </OverlayWrapper>
  )
}

const OverlayWrapper = styled.section`
  display: none;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: hsl(var(--black) / 0.7);

  &.active {
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

export default ImageOverlay

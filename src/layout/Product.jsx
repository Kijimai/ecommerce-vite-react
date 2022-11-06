import styled from "styled-components"
import ImageCarousel from "../components/ImageCarousel"
import ImageOverlay from "../components/ImageOverlay"
import { productImages, productThumbnails } from "../assets/imagedata"
import { useGlobalContext } from "../context/context"

const Product = () => {
  const { showingOverlay } = useGlobalContext()

  return (
    <ProductWrapper>
      <ImageCarousel
        productImages={productImages}
        productThumbnails={productThumbnails}
      />
      <div className="product-info"></div>
      {showingOverlay && (
        <ImageOverlay
          productImages={productImages}
          productThumbnails={productThumbnails}
        />
      )}
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
  display: flex;
`

export default Product

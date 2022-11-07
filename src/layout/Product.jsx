import styled from "styled-components"
import ImageCarousel from "../components/ImageCarousel"
import ImageOverlay from "../components/ImageOverlay"
import ProductInfo from "../components/ProductInfo"
import { productImages, productThumbnails } from "../assets/imagedata"
import { useGlobalContext } from "../context/context"
import { data } from "../utils/data"
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
      <ProductInfo {...data} />
    </ProductWrapper>
  )
}

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
`

export default Product

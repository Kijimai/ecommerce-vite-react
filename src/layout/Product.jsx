import styled from "styled-components"
import ImageCarousel from "../components/ImageCarousel"

const Product = () => {
  return <ProductWrapper>
    <ImageCarousel/>
    <div className="product-info">

    </div>
  </ProductWrapper>
}

const ProductWrapper = styled.article`
  display: flex;
`

export default Product

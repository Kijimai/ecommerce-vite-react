import styled from "styled-components"
import PropTypes from "prop-types"

const ProductInfo = ({
  companyName,
  productName,
  productDescription,
  productPrice,
  isOnSale,
  salePercent,
}) => {
  return (
    <InfoWrapper>
      <p>{companyName}</p>
      <p>{productName}</p>
      <p>{productDescription}</p>
      <p>{productPrice}</p>
      <p>{isOnSale && salePercent}</p>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  padding: 2.4rem;
`

ProductInfo.propTypes = {
  companyName: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  productPrice: PropTypes.number,
  isOnSale: PropTypes.bool,
  salePercent: PropTypes.number,
}

ProductInfo.defaultProps = {
  companyName: "N/A",
  productName: "N/A",
  productDescription: "No description available.",
  productPrice: 0,
  isOnSale: false,
  salePercent: 0,
}

export default ProductInfo

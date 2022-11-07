import styled from "styled-components"
import PropTypes from "prop-types"
import ProductControls from "./ProductControls"

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
      <h2 className="company-name">{companyName}</h2>
      <p className="product-name">{productName}</p>
      <p className="product-description">{productDescription}</p>
      <p>{productPrice}</p>
      <p>{isOnSale && salePercent}</p>
      <ProductControls />
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  padding: 2.4rem;

  .company-name {
    font-size: 1.2rem;
    color: hsl(var(--orange));
    margin-bottom: 2rem;
  }

  .product-name {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .product-description {
    font-size: 1.5rem;
    color: hsl(var(--dark-grayish-blue));
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }
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

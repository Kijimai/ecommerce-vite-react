import styled from "styled-components"
import PropTypes from "prop-types"
import ProductControls from "./ProductControls"

const ProductInfo = ({
  productId,
  companyName,
  productName,
  productDescription,
  productPrice,
  isOnSale,
  salePercent,
}) => {
  return (
    <InfoWrapper>
      <div className="inner-info">
        <h2 className="company-name">{companyName}</h2>
        <p className="product-name">{productName}</p>
        <p className="product-description">{productDescription}</p>
        <div className="pricing">
          <p className="price">
            $
            {isOnSale
              ? (productPrice * salePercent).toFixed(2)
              : productPrice.toFixed(2)}
          </p>
          {isOnSale && (
            <p className="percent">{salePercent.toFixed(2) * 100 + "%"}</p>
          )}
          {isOnSale && (
            <p className="original-price">${productPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
      <ProductControls productId={productId} />
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  padding: 2.4rem;

  @media screen and (min-width: 600px) {
    padding: 2.4rem 4rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  .inner-info {
    margin-bottom: 1.6rem;

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

    .pricing {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      gap: 1.6rem;

      .price {
        font-size: 2.8rem;
        font-weight: 700;
        grid-column: 1 / 2;
      }

      .percent {
        color: hsl(var(--orange));
        background-color: hsl(var(--pale-orange));
        font-size: 1.6rem;
        font-weight: 700;
        padding: 0.7rem 0.8rem;
        border-radius: 0.6rem;
        grid-column: 2 / 3;
        text-align: center;
      }

      .original-price {
        text-decoration: line-through;
        font-size: 1.6rem;
        font-weight: 700;
        color: hsl(var(--grayish-blue));
        grid-column: 4 / 5;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    flex-basis: 44.5rem;

    .inner-info {
      .company-name {
        font-size: 1.3rem;
        line-height: 1.6rem;
        margin-bottom: 2.4rem;
      }

      .product-name {
        font-size: 4.4rem;
        line-height: 4.8rem;
        margin-bottom: 3.2rem;
      }

      .product-description {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }

      .pricing {
        grid-template-rows: 1fr 1fr;
        gap: 0 1.6rem;
        .price {
          grid-column: 1 / 2;
          grid-row: 1;
        }

        .percent {
          justify-self: start;
        }

        .original-price {
          grid-column: 1 / 2;
          grid-row: 2;
        }
      }
    }
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

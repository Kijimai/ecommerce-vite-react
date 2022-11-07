import styled from "styled-components"
import PropTypes from "prop-types"
import { Plus, Minus, Cart } from "../icons/index"
import Button from "./Button"
const ProductControls = ({ increaseAmount, decreaseAmount }) => {
  return (
    <ControlsWrapper>
      <div className="inner-controls">
        <button>
          <Minus />
        </button>
        <span className="amount">0</span>
        <button>
          <Plus />
        </button>
      </div>
      <Button color={"#FFFFFF"}>
        <Cart />
        Add to Cart
      </Button>
    </ControlsWrapper>
  )
}

const ControlsWrapper = styled.div`
  .inner-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(var(--light-grayish-blue));
    padding: 2.2rem 2.4rem;
    border-radius: 1rem;
    margin-bottom: 2.4rem;

    .amount {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2rem;
    }
  }
`

export default ProductControls

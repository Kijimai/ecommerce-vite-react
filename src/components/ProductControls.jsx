import styled from "styled-components"
import PropTypes from "prop-types"
import { Plus, Minus, Cart } from "../icons/index"
import Button from "./Button"
import { useGlobalContext } from "../context/context"
import { data } from "../utils/data"
const ProductControls = ({ productId }) => {
  const { increaseAmount, decreaseAmount, removeItem, addToCart, state } =
    useGlobalContext()

  return (
    <ControlsWrapper>
      <div className="inner-controls">
        <button
          onClick={() => {
            decreaseAmount(productId)
          }}
        >
          <Minus />
        </button>
        <span className="amount">{state.amount}</span>
        <button
          onClick={() => {
            increaseAmount(productId)
          }}
        >
          <Plus />
        </button>
      </div>
      <Button
        func={() => {
          addToCart(state.amount, data)
        }}
        color={"#FFFFFF"}
      >
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
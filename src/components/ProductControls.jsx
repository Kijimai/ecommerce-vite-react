import styled from "styled-components"
import PropTypes from "prop-types"
import { Plus, Minus } from "../icons/index"

const ProductControls = ({ increaseAmount, decreaseAmount }) => {
  return (
    <ControlsWrapper>
      <div className="inner-controls">
        <button></button>
      </div>
    </ControlsWrapper>
  )
}

const ControlsWrapper = styled.div`
  .inner-controls {
    display: flex;
    justify-content: space-between;
  }
`

export default ProductControls

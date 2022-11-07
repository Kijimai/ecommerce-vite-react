import styled from "styled-components"
import PropTypes from "prop-types"
import { Plus, Minus } from "../icons/index"

const ProductControls = ({ increaseAmount, decreaseAmount }) => {
  return (
    <ControlsWrapper>
      <div className="inner-controls">
        <button>
          <Plus />
        </button>
        <span>0</span>
        <button>
          <Minus />
        </button>
      </div>
    </ControlsWrapper>
  )
}

const ControlsWrapper = styled.div`
  .inner-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default ProductControls

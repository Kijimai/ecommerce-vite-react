import styled from "styled-components"
import Product from "./Product"
const Main = () => {
  return (
    <MainWrapper>
      <Product />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export default Main

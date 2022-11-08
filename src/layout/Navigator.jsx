import styled from "styled-components"
import { Logo, Menu, Cart } from "../icons/index"
import { avatar } from "../assets/imagedata"
import FloatingCart from "../components/FloatingCart"
import { useGlobalContext } from "../context/context"

const Navigator = () => {
  const { showSidebar, showCart, hideCart, state } = useGlobalContext()

  return (
    <NavigatorWrapper>
      <nav>
        <div className="nav-left">
          <button onClick={showSidebar} className="menu-btn">
            <Menu />
          </button>
          <div className="logo">
            <Logo />
          </div>
        </div>
        <div className="nav-right">
          <button
            onClick={() => {
              if (state.showingCart) {
                hideCart()
              } else {
                showCart()
              }
            }}
            className="cart-btn"
          >
            <Cart />
            <span>{state.cart.length}</span>
          </button>
          <button className="avatar-btn">
            <img src={avatar} alt="avatar" />
          </button>
          <FloatingCart className={`${state.showingCart ? "active" : ""}`} />
        </div>
      </nav>
    </NavigatorWrapper>
  )
}

const NavigatorWrapper = styled.header`
  padding: 2.4rem;

  img,
  svg {
    display: block;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .menu-btn {
      display: block;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }

  .nav-right {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .cart-btn {
      position: relative;

      svg,
      path {
        fill: hsl(var(--black));
      }

      span {
        user-select: none;
        position: absolute;
        top: -1rem;
        right: -1rem;
        background-color: hsl(var(--orange));
        font-weight: 700;
        color: hsl(var(--white));
        border-radius: 50%;
        padding: 0.3rem 0.8rem;
        font-size: 1.1rem;
      }
    }

    .avatar-btn {
      height: 2.4rem;
      width: 2.4rem;

      img {
        width: 100%;
      }
    }
  }
`

export default Navigator

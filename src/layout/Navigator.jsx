import styled from "styled-components"
import { Logo, Menu, Cart } from "../icons/index"
import { avatar } from "../assets/imagedata"

const Navigator = () => {
  return (
    <NavigatorWrapper>
      <nav>
        <div className="nav-left">
          <button className="menu-btn">
            <Menu />
          </button>
          <div className="logo">
            <Logo />
          </div>
        </div>
        <div className="nav-right">
          <button className="cart-btn">
            <Cart />
            <span>3</span>
          </button>
          <button className="avatar-btn">
            <img src={avatar} alt="avatar" />
          </button>
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
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .cart-btn {
      position: relative;

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

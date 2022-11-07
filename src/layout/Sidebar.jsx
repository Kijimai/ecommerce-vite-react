import styled from "styled-components"
import { Close } from "../icons/index"
import { useGlobalContext } from "../context/context"
const sideBarLinks = ["Collections", "Men", "Women", "About", "Contact"]

const Sidebar = ({ isShowing }) => {
  const { hideSidebar } = useGlobalContext()

  return (
    <SidebarWrapper className={isShowing && "active"}>
      <nav>
        <button onClick={hideSidebar}>
          <Close />
        </button>
        <ul className="sidebar-links">
          {sideBarLinks.map((link, idx) => {
            return (
              <li key={idx}>
                <a onClick={hideSidebar} href="#">
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  z-index: 1000;
  height: 100vh;
  transition: 0.3s ease width, 0.2s ease opacity;
  background-color: hsl(var(--black) / 0.7);
  user-select: none;
  pointer-events: none;

  nav {
    padding: 2.5rem;
    max-width: 25rem;
    height: 100%;
    background-color: hsl(var(--white));

    .sidebar-links {
      margin-top: 5.4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 1.8rem;
      font-weight: 700;
      font-family: inherit;
      list-style: none;

      a {
        color: hsl(var(--black));
        text-decoration: none;
      }
    }
  }

  &.active {
    pointer-events: auto;
    user-select: auto;
    opacity: 1;
    width: 100%;
  }
`

export default Sidebar

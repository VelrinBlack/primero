import styled from 'styled-components';

const StyledWrapper = styled.header`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 130px;
  padding: 0 100px;

  background-color: rgba(0, 0, 0, 50%);

  z-index: 5;

  @media (max-width: 2560px) {
    height: 100px;
    padding: 0 60px;
  }

  @media (max-width: 1024px) {
    height: 80px;
    padding: 0 40px;
  }

  .logo {
    position: relative;
    width: 141px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .navigation {
    width: 350px;

    display: flex;
    justify-content: space-between;

    transform: translateX(10px);

    @media (max-width: 2560px) {
      width: 280px;
    }

    @media (max-width: 1024px) {
      display: none;
    }

    li {
      padding: 10px;

      font-size: ${({ theme }) => theme.fontSizes.M};
      color: ${({ theme }) => theme.colors.white};

      list-style: none;
      cursor: pointer;

      @media (max-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSizes.S};
      }
    }
  }

  .hamburger {
    width: 30px;
    height: 20px;

    box-sizing: content-box;
    padding: 10px;

    flex-direction: column;
    justify-content: space-between;

    background-color: transparent;
    border: none;

    display: none;
    z-index: 1;

    @media (max-width: 1024px) {
      display: flex;
    }

    .stripe {
      width: 100%;
      height: 3px;

      background-color: ${({ theme, hamburgerActive }) =>
        hamburgerActive ? theme.colors.black : theme.colors.white};
      border-radius: 1.5px;

      transition: background-color 0.5s, transform 0.5s;
      transform-origin: left center;

      &:nth-child(2) {
        opacity: ${({ hamburgerActive }) => (hamburgerActive ? '0' : '100%')};
      }

      &:nth-child(1) {
        transform: ${({ hamburgerActive }) =>
          hamburgerActive ? 'rotate(45deg) translateY(-3px)' : 'none'};
      }

      &:nth-child(3) {
        transform: ${({ hamburgerActive }) =>
          hamburgerActive ? 'rotate(-45deg) translateY(3px)' : 'none'};
      }
    }
  }

  .mobile-navigation {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transform: ${({ hamburgerActive }) =>
      hamburgerActive ? 'translateX(0)' : 'translateX(-100%)'};

    background-color: ${({ theme }) => theme.colors.white};

    transition: transform 0.5s;

    li {
      padding: 15px;

      font-size: ${({ theme }) => theme.fontSizes.S};
      color: ${({ theme }) => theme.colors.black};

      list-style: none;
      cursor: pointer;
    }
  }
`;

export default StyledWrapper;

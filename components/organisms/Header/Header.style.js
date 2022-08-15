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

  .logo {
    width: 100px;
    height: 40px;
    background-color: red;
  }

  .navigation {
    width: 350px;

    display: flex;
    justify-content: space-between;

    transform: translateX(10px);

    @media (max-width: 2560px) {
      width: 280px;
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
`;

export default StyledWrapper;

import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 25%);
  border-radius: ${({ theme }) => theme.borderRadiuses.big};

  @media (max-width: 2560px) {
    height: 225px;
  }

  @media (max-width: 1600px) {
    width: 275px;
    height: 275px;
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 180px;
    padding: 20px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .image-container {
    position: relative;

    width: 140px;
    height: 140px;

    @media (max-width: 2560px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 1600px) {
      width: 140px;
      height: 140px;
    }

    @media (max-width: 1024px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 500px) {
      width: 50%;
      min-width: 110px;
      height: auto;
      aspect-ratio: 1 / 1;
    }

    img {
      border-radius: 100%;
    }
  }

  .name {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSizes.M};
    font-weight: ${({ theme }) => theme.fontWeights.black};

    @media (max-width: 1024px) {
      margin-top: 12px;
      font-size: ${({ theme }) => theme.fontSizes.S};
    }

    @media (max-width: 500px) {
      margin-top: 20px;
      font-size: ${({ theme }) => theme.fontSizes.M};
    }
  }

  .phone {
    margin-top: 5px;

    font-size: ${({ theme }) => theme.fontSizes.S};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSizes.XS};
    }

    @media (max-width: 500px) {
      font-size: ${({ theme }) => theme.fontSizes.S};
    }
  }
`;

export default StyledWrapper;

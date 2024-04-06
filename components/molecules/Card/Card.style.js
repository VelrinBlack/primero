import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 480px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 25%);
  border-radius: ${({ theme }) => theme.borderRadiuses.big};

  @media (max-width: 2560px) {
    width: 340px;
  }

  @media (max-width: 1600px) {
    width: 600px;

    &:not(:first-child) {
      margin-top: 80px;
    }
  }

  @media (max-width: 1024px) {
    width: 400px;

    &:not(:first-child) {
      margin-top: 60px;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    &:not(:first-child) {
      margin-top: 50px;
    }
  }

  .image-container {
    position: relative;

    width: 100%;
    height: 0;
    padding-bottom: 100%;

    img {
      border-top-left-radius: ${({ theme }) => theme.borderRadiuses.big};
      border-top-right-radius: ${({ theme }) => theme.borderRadiuses.big};
      object-fit: cover;
    }
  }

  .content {
    padding: 30px;

    @media (max-width: 2560px) {
      padding: 25px;
    }

    .title {
      font-size: ${({ theme }) => theme.fontSizes.L};
      font-weight: ${({ theme }) => theme.fontWeights.black};

      @media (max-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSizes.M};
      }
    }

    .price {
      width: fit-content;
      margin-top: 15px;
      padding: 15px;

      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: ${({ theme }) => theme.borderRadiuses.small};

      font-size: ${({ theme }) => theme.fontSizes.M};
      font-weight: ${({ theme }) => theme.fontWeights.regular};

      @media (max-width: 2560px) {
        margin-top: 10px;
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSizes.S};
      }
    }

    .link {
      width: 100%;
      height: 70px;
      margin-top: 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      border-radius: ${({ theme }) => theme.borderRadiuses.small};

      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSizes.M};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      text-decoration: none;

      @media (max-width: 2560px) {
        height: 50px;
        margin-top: 25px;
        font-size: ${({ theme }) => theme.fontSizes.S};
      }
    }
  }
`;

export default StyledWrapper;

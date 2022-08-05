import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;

  .shadow,
  .cover-image-container {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    &.shadow {
      background-color: rgba(0, 0, 0, 50%);
      z-index: 2;
    }

    &.cove-image-container {
      z-index: 1;
    }

    img {
      object-fit: cover;
    }
  }

  .text {
    position: absolute;
    bottom: 0;
    right: 0;

    margin: 0 100px 200px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    text-align: end;
    color: ${({ theme }) => theme.colors.white};

    z-index: 3;

    @media (max-width: 2560px) {
      margin: 0 60px 120px 0;
    }

    @media (max-width: 1024px) {
      right: 50%;
      transform: translateX(50%);

      margin-right: 0;
      align-items: center;
      text-align: center;
    }

    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 50px;
    }

    .title {
      width: 800px;
      font-weight: ${({ theme }) => theme.fontWeights.black};
      font-size: ${({ theme }) => theme.fontSizes.XXL};

      @media (max-width: 2560px) {
        width: 600px;
        font-size: ${({ theme }) => theme.fontSizes.XL};
      }

      @media (max-width: 1024px) {
        width: 300px;
        font-size: ${({ theme }) => theme.fontSizes.L};
      }

      @media (max-width: 500px) {
        width: 100%;
        max-width: 400px;
        padding: 0 20px;
      }
    }

    .subtitle {
      width: 1000px;
      margin-top: 30px;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      font-size: ${({ theme }) => theme.fontSizes.L};

      @media (max-width: 2560px) {
        width: 700px;
        margin-top: 20px;
        font-size: ${({ theme }) => theme.fontSizes.M};
      }

      @media (max-width: 1024px) {
        width: 450px;
        margin-top: 10px;
        font-size: ${({ theme }) => theme.fontSizes.S};
      }

      @media (max-width: 500px) {
        width: 100%;
        padding: 0 10px;
      }
    }
  }
`;

export default StyledWrapper;

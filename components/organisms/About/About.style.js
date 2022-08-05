import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 2560px) {
    margin-top: 300px;
  }

  @media (max-width: 1600px) {
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    margin-top: 200px;
  }

  .text {
    width: 850px;

    @media (max-width: 2560px) {
      width: 650px;
    }

    @media (max-width: 1600px) {
      width: 80%;
    }

    .title {
      font-size: ${({ theme }) => theme.fontSizes.XXL};
      font-weight: ${({ theme }) => theme.fontWeights.black};

      @media (max-width: 2560px) {
        font-size: ${({ theme }) => theme.fontSizes.XL};
      }

      @media (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSizes.L};
      }
    }

    .content {
      margin-top: 50px;
      font-size: ${({ theme }) => theme.fontSizes.L};

      @media (max-width: 2560px) {
        margin-top: 30px;
        font-size: ${({ theme }) => theme.fontSizes.M};
      }

      @media (max-width: 1024px) {
        margin-top: 15px;
        font-size: ${({ theme }) => theme.fontSizes.S};
      }
    }
  }

  .image-container {
    position: relative;

    width: 800px;
    height: 650px;

    margin-left: 400px;

    @media (max-width: 2560px) {
      width: 620px;
      height: 500px;

      margin-left: 200px;
    }

    @media (max-width: 1600px) {
      width: 80%;
      margin: 50px 0 0 0;
    }

    @media (max-width: 1024px) {
      margin-top: 30px;
    }

    @media (max-width: 500px) {
      height: 300px;
    }

    img {
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadiuses.big};
    }
  }
`;

export default StyledWrapper;

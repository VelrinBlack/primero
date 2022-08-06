import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 2560px) {
    margin-top: 300px;
  }

  @media (max-width: 1024px) {
    margin-top: 200px;
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

  .cards-container {
    width: 2050px;
    margin-top: 150px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 2560px) {
      margin-top: 100px;
      width: 1470px;
    }

    @media (max-width: 1600px) {
      width: 100%;

      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      margin-top: 80px;
    }

    @media (max-width: 500px) {
      margin-top: 50px;
    }
  }
`;

export default StyledWrapper;

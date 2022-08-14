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

  .flex-container {
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

    & > div {
      width: 850px;

      @media (max-width: 2560px) {
        width: 650px;
      }

      @media (max-width: 1600px) {
        width: 600px;
      }

      @media (max-width: 1024px) {
        width: 400px;
      }

      @media (max-width: 600px) {
        width: 80%;
      }

      &:first-child {
        display: flex;
        justify-content: space-between;

        @media (max-width: 1600px) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contact-cards {
          width: 300px !important;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media (max-width: 2560px) {
            width: 225px !important;
          }

          @media (max-width: 1600px) {
            width: 100% !important;
            margin-top: 50px;
            flex-direction: row;
          }

          @media (max-width: 500px) {
            flex-direction: column;
            row-gap: 30px;
          }
        }
      }

      &:nth-child(2) {
        @media (max-width: 1600px) {
          height: auto;
          aspect-ratio: 3 / 2;
          margin-top: 100px;
        }

        @media (max-width: 1024px) {
          margin-top: 80px;
        }

        @media (max-width: 500px) {
          margin-top: 50px;
          aspect-ratio: 1 / 1;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: ${({ theme }) => theme.borderRadiuses.big};
        }
      }
    }
  }
`;

export default StyledWrapper;

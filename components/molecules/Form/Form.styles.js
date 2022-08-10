import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 500px !important;
  height: min-content;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 2560px) {
    width: 375px !important;
    row-gap: 15px;
  }

  @media (max-width: 1600px) {
    width: 100% !important;
  }

  * {
    border-radius: ${({ theme }) => theme.borderRadiuses.small};
  }

  input {
    height: 70px;
    padding: 20px;

    border: none;
    background-color: ${({ theme }) => theme.colors.grey};

    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSizes.M};
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    @media (max-width: 2560px) {
      height: 50px;
      padding: 15px;
      font-size: ${({ theme }) => theme.fontSizes.S};
    }
  }

  textarea {
    height: 400px;
    padding: 20px;

    border: none;
    background-color: ${({ theme }) => theme.colors.grey};

    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSizes.M};
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    resize: none;

    @media (max-width: 2560px) {
      height: 300px;
      padding: 15px;
      font-size: ${({ theme }) => theme.fontSizes.S};
    }
  }

  button {
    height: 70px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};

    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.M};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    cursor: pointer;

    @media (max-width: 2560px) {
      height: 50px;
      font-size: ${({ theme }) => theme.fontSizes.S};
    }
  }
`;

export default StyledWrapper;

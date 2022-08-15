import styled from 'styled-components';

const StyledWrapper = styled.footer`
  height: 130px;
  margin-top: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};

  font-size: ${({ theme }) => theme.fontSizes.S};

  @media (max-width: 2560px) {
    height: 100px;
    margin-top: 300px;
    font-size: ${({ theme }) => theme.fontSizes.XS};
  }

  @media (max-width: 1024px) {
    margin-top: 200px;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default StyledWrapper;

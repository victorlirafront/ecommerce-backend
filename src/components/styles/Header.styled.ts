import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 5px 60px;
  background: rgb(32, 32, 32);
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 3rem;
    color: white;
    transition: 0.4s;
    cursor: pointer;
    span {
      color: rgb(247, 211, 7);
    }
    &:hover {
      color: rgb(177, 177, 177);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 5px 20px;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  font-family: inherit;
  font-size: 1.2rem;
  border-radius: 50px;
  border: 2px solid rgba(247, 211, 7, 0.7);
  color: #fff;
  padding: 0.3rem 1.2rem;
  width: 200px;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 10px;
  }
`;

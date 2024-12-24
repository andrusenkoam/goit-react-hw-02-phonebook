import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  & label {
    margin-right: 5px;
    font-size: 20px;
    color: rgb(5, 95, 8);
  }

  & input {
    margin-right: 10px;
    padding: 5px;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellowGreen;
    cursor: pointer;
    transition: color 500ms ease;

    &:hover,
    &:focus {
      color: green;
    }
  }
`;

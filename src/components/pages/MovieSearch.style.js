import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const Input = styled.input`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchBtn = styled.button`
  padding: 3px;
  margin-left: 5px;
  width: 60px;
  cursor: pointer;
  background: #e9e9e9;
color: black;
transition: 0.5s ease;
border-radius: 4px;
text-align: center;
transition: 0.1s ease;
box-shadow: 0px 2px 0px 2px rgba(0, 0, 0, 0.7);

    :hover,
    :focus {
      background: #a9a9a9
      transform: translateY(1px);
  box-shadow: none;
    }

    :active {
      transform: translateY(2px);
      box-shadow: inset 0px 1px 0px 2px rgba(0, 0, 0, 0.5);
    }
`

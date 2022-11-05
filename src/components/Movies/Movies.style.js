import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
`
export const WrapTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  
`
export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 25%;
`

export const Error = styled.p`
  color: black;
  text-align: center;
  font-size: xx-large;  
`

export const MovieLink = styled(Link)`
  width: 80px;
  color:darkseagreen; 
  text-align: center;
  padding: 5px;
  background: rgba(129, 129, 129, 0.119);


  border: 1px solid black;

  position: absolute;
  left: 20px;

  :hover,
  :fokus {
    color: red;
  }
  `

export const MovieInfo = styled(NavLink)`
  padding: 12px;
  width: 80px;
  cursor: pointer;
  background: #e9e9e9;
  color: black;
  transition: 0.5s ease;
  border-radius: 10px;
  text-align: center;
  transition: 0.1s ease;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.7);

  &.active {
    background-color: #a9a9a9;
    color: black;
    box-shadow: inset 0px 3px 3px 4px rgba(0, 0, 0, 0.5);
  }

      :hover,
      :focus {
        background: #a9a9a9
        transform: translateY(2px);
    box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),
      0px 8px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
      }

      :active {
        transform: translateY(4px);
        box-shadow: inset 0px 3px 3px 4px rgba(0, 0, 0, 0.5);
  }
`

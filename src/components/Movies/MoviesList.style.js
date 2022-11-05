import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MovieList = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  `

export const MovieItem = styled.li`
  transition: 0.1s ease;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.7);

    :hover,
    :focus {
      transform: translateY(2px);
  box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),
    0px 8px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
    }

    :active {
      transform: translateY(8px);
      box-shadow: inset 0px 0px 3px 4px rgba(0, 0, 0, 0.5);
    }
`

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 150px;

  :hover,
  :fokus {
    color: red;
  }
`

export const LinkDescription = styled.span`
  padding: 10px;
`
